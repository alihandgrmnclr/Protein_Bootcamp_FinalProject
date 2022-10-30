<script setup>
import { ref } from 'vue';
import Leaderboard from './Leaderboard/Leaderboard.vue';
import Horse from './Horse/Horse.vue';
import ButtonComp from './ButtonComp.vue';
import { betX, getBet } from '../utils/wallet';
import { clickSound, countDownSound } from '../utils/sounds';

const props = defineProps(["horses", "bet"]);
const emits = defineEmits(["updateHorse", "updateLeaderboard", "finishTime"]);

const horseRef = ref(props.horses);
const start = ref(false);
const showStart = ref(true);
const isFinished = ref(false);
const isCountDown = ref(false);
const countDownTimer = ref(3);
const finalLeaderboard = ref([]);
const startTime = ref(0);

const delay = (ms) => { // 3 seconds countDown
    showStart.value = false;
    isCountDown.value = true;
    const countDown = setInterval(() => {
        if (countDownTimer.value <= 1) {
            clearInterval(countDown);
            isCountDown.value = false;
        }
        countDownTimer.value--;
    }, 1000);
    return new Promise(resolve => { // waits till given seconds
        setTimeout(resolve, ms);
    });
}

const restart = () => {
    window.location.reload();
    return;
};

async function raceStart() {
    await delay(3000);  // race will not start before delay function
    start.value = true;
    startTime.value = Date.now();
    horseRef.value.map((item) => item.start = startTime.value)
    return;
}

const updateHorseHandler = (horse) => { // horse data is updated
    emits("updateHorse", horse);
    return;
}

const updateLeaderboardHandler = (horse) => {   // leaderboard after race end -> it goes to results
    finalLeaderboard.value.push(horse);
    if (finalLeaderboard.value.length > (horseRef.value.length) - 1) {
        isFinished.value = true; // for restart button
    }
    return;
};

</script>

<template>
    <div class="results">
        <Leaderboard :horses="horseRef" :leaderboard="finalLeaderboard"></Leaderboard>
    </div>
    <template v-if="countDownTimer < 1">
        <div class="track">
            <div v-for="horse in props.horses" :key="horse.id">
                <div class="track__start"></div>
                <div class="track__finish"></div>
                <div class="track__line">
                    <p class="track__line__info">{{ horse.id }}- <span>{{ horse.name }}</span> </p>
                    <Horse
                      @updateHorse="updateHorseHandler"
                      @updateLeaderboard="updateLeaderboardHandler"
                      :horse="horse"
                      :start="start">
                      </Horse>
                </div>
            </div>
        </div>
    </template>
    <template v-else>
        <div class="track">
            <div v-for="horse in props.horses" :key="horse.id">
                <div class="track__start"></div>
                <div class="track__finish"></div>
                <div class="track__line">
                    <p class="track__line__info">{{ horse.id }}- <span>{{ horse.name }}</span> </p>
                    <Horse
                      :start="start"
                      :horse="horse">
                      </Horse>
                </div>
            </div>
        </div>
    </template>
    <template v-if="isCountDown">
        <p class="countdown-timer">{{ countDownTimer }}</p>
    </template>
    <div class="race">
        <template v-if="showStart">
            <ButtonComp
              class="start_btn"
              @click="raceStart(), countDownSound()"
              :text="'Start'"></ButtonComp>
        </template>
        <template v-if="isFinished">
            <ButtonComp
              class="start_btn"
              @click="restart(), clickSound()"
              :text="'Restart'"></ButtonComp>
        </template>
        <div class="race__options">
            <p class="race__options__bet">Selected Horse: <span class="race__options__value">{{ getBet().selectedHorse }}</span></p>
            <p class="race__options__bet">Bet Amount: <span class="race__options__value">{{ getBet().betAmount }}$</span></p>
            <p class="race__options__bet">Reward Claim: <span class="race__options__value">{{ getBet().betAmount * betX }}$</span></p>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.results {
    // leaderboard 
    @apply flex justify-end;
}

.countdown-timer {
    @apply absolute left-[50%] bottom-[50%] translate-y-[50%] text-[6rem];
}

.track {
    @apply mt-5 w-full h-[600px] bg-no-repeat bg-cover overflow-hidden bg-bggreen;

    &__start {
        @apply absolute left-0 ml-[45px] h-[75px] w-1 bg-white opacity-30;
        @apply sm:ml-[75px];
    }

    &__finish {
        @apply absolute right-0 w-2 h-[75px] bg-white;
        background-image: url(/Images/Pitch/finish.png);
        background-size: 60px;
    }

    &__line {
        @apply relative flex items-center h-[75px];
        border-bottom: solid;
        border-color: rgba(240, 248, 255, 0.214);

        .track__line__info {
            @apply flex text-white font-bold ml-2 w-0 text-3xl opacity-50;
            @apply sm:ml-8;
            text-transform: uppercase;
            letter-spacing: 10px;
        }
    }
}

.race {
    @apply flex flex-col justify-center items-center mt-4 gap-3 h-[120px];

    &__options {
        @apply flex flex-col items-center justify-center bg-bgprimary text-white w-full h-full;
    }

    &__options__bet {
        @apply flex justify-between w-[250px];
    }

    &__options__value {
        @apply font-bold;
    }
}
</style>