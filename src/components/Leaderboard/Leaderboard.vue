<script setup>
import { computed, ref } from '@vue/reactivity';
import { getBet, betX, addCash } from "../../utils/wallet"
import LeaderboardItem from './LeaderboardItem.vue';
import BetWin from "../Bet/BetWin.vue"

const props = defineProps(["horses", "results", "leaderboard"]);

const raceFinished = ref(false);
const isBetWin = ref(null);

const sortedHorses = computed(() => { // we are following the sorting 

    const isRaceFinished = props.horses.every((horse) => horse.pos >= 100) // if all horses pos >= 95 then return true

    if (isRaceFinished) {
        raceFinished.value = true;
        if (getBet().selectedHorse == props.leaderboard[0].name) {   // bet winning
            addCash(getBet().betAmount * betX);
            isBetWin.value = true;
        } else {
            isBetWin.value = false;
        }
        return props.leaderboard;
    } else {    // sorting continue till race finish
        const sortedData = [...props.horses].sort((a, b) => {
            return b.pos - a.pos;
        });
        return sortedData;
    }
});
</script>

<template>
    <div class="leaderboard">
        <div id="header">
            <div class="leaderboard__header">
                <img class="leaderboard__icon" src="https://cdn-icons-png.flaticon.com/512/6514/6514964.png" alt="">
                <h1 class="leaderboard__title">LEADERBOARD</h1>
            </div>
        </div>

        <div class="leaderboard__rankings">
            <LeaderboardItem
              v-for="(horse, index) in sortedHorses"
              :key="horse.id"
              :horse="horse"
              :rank="index"
              :leaderboard="props.leaderboard"
              :raceFinished="raceFinished">
              </LeaderboardItem>
        </div>
    </div>
    <template v-if="isBetWin">
        <BetWin :betresult="isBetWin"></BetWin>
    </template>
    <template v-if="isBetWin == false">
        <BetWin :betresult="isBetWin"></BetWin>
    </template>
</template>

<style lang="scss" scoped>
.leaderboard {
    @apply flex justify-center items-center p-3 bg-bgprimary text-slate-50 w-full h-[200px];

    &__header {
        @apply hidden flex-col justify-center items-center w-1/2;
        @apply md:flex;
    }

    &__icon {
        @apply w-14;
    }

    &__title {
        @apply text-3xl font-black;
    }

    &__rankings {
        @apply w-full text-sm font-semibold flex flex-col flex-wrap items-center justify-center content-around h-full gap-x-3 gap-y-2;
        @apply md:w-1/2 md:text-lg lg:items-start;
    }
}
</style>