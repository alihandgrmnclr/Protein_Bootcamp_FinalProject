<script setup>
import { computed } from '@vue/reactivity';
import { getBet, saveLocalWallet, betX } from "../service/service"
import LeaderboardItem from './LeaderboardItem.vue';

const props = defineProps(["horses", "results", "leaderboard"]);

const sortedHorses = computed(() => { // sort işlemini takip etmek için computed kullandık

    const isRaceFinished = props.horses.every((horse) => horse.pos >= 95) // tüm atlar 95'i geçti mi? bu bize t/f dönüyor

    if (isRaceFinished) {
        console.log(props.leaderboard[0].name);
        if (getBet().selectedHorse == props.leaderboard[0].name) {   // iddia kazanma durumu
            saveLocalWallet(getBet().betAmount * betX);
            console.log(`TEBRIKLER`);
        }
        return props.leaderboard;
    } else {    // anlık yarışı izliyoruz
        const sortedData = [...props.horses].sort((a, b) => {
            return b.pos - a.pos;
        });
        return sortedData;
    }
});
</script>

<template>
    <div class="leaderboard">
        Bahis Yapılan At: {{getBet().selectedHorse}} <br>
        Bahis Tutarı: {{getBet().betAmount}}₺ <br>
        Olası Kazanç: {{getBet().betAmount*betX}}₺
        <br>
        <div id="header">
            <div class="leaderboard__header">
                <img class="leaderboard__icon" src="https://cdn-icons-png.flaticon.com/512/744/744974.png" alt="">
                <h1 class="leaderboard__title">LIDERLIK TABLOSU</h1>
            </div>
        </div>

        <div class="leaderboard__rankings">
            <LeaderboardItem v-for="(horse,index) in sortedHorses" :horse="horse" :rank="index"
                :leaderboard="props.leaderboard"></LeaderboardItem>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.leaderboard {
    font-family: 'Source Sans Pro', sans-serif;
    @apply flex flex-wrap justify-around items-center p-3 bg-bgprimary text-slate-50 w-full h-[200px] rounded-xl;

    &__header {
        @apply flex flex-col justify-center items-center w-full;
    }

    &__icon {
        @apply w-14;
    }

    &__title {
        @apply text-3xl font-black;
    }

    &__rankings {
        @apply flex flex-col flex-wrap h-full gap-2 text-xl font-semibold gap-x-8;
    }

}
</style>