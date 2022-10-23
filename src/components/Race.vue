<script setup>
import { ref } from 'vue';
import Results from './Leaderboard/Leaderboard.vue';
import Horse from './Horse/Horse.vue';
import { betX, getBet } from '../utils/wallet';
import { countDownSound } from '../utils/sounds';

const props = defineProps(["horses", "bet"]);
const emits = defineEmits(["updateHorse", "updateLeaderboard"]);

const horseRef = ref(props.horses);
const start = ref(false);
const isFinished = ref(false);
const isCountDown = ref(false);
const countDownTimer = ref(3);
const finalLeaderboard = ref([]);
const startTime = ref(0);

const delay = (ms) => { // 3 saniyelik bir countdown
    isCountDown.value = true;
    const countDown = setInterval(() => {
        if (countDownTimer.value <= 1) {
            clearInterval(countDown);
            isCountDown.value = false;
        }
        countDownTimer.value--;
    }, 1000);
    return new Promise(resolve => { // ms kadar bekliyor
        setTimeout(resolve, ms);
    });
}

const restart = () => {
    window.location.reload();
};

async function raceStart() {
    await delay(3000);  // delay fonksiyonu bitmeden yarış başlamıyor
    start.value = true;
    startTime.value = new Date();
    horseRef.value.map((item) => item.start = startTime.value)
    console.log("horseref", horseRef.value);
}

const updateHorseHandler = (horse) => { // @updateHorse çalıştığında yakalıyoruz
    emits("updateHorse", horse); // yukarı gönderiyoruz (app)
}

const updateLeaderboardHandler = (horse) => {   // finish sonrası liderlik tablosu -> results'a yolluyorum
    finalLeaderboard.value.push(horse);
    isFinished.value = true; // restart butonu gözükmesi için
};

</script>

<template>
    <div class="results">
        <!-- <Results :horses="props.horses" :leaderboard="finalLeaderboard"></Results> -->
        <Results :horses="horseRef" :leaderboard="finalLeaderboard"></Results>
    </div>
    <template v-if="countDownTimer < 1">
        <div class="track">
            <div v-for="horse in props.horses" :key="horse.id">
                <div class="finish"></div>
                <div class="line-wrapper">
                    <p class="line-id">{{ horse.id }}</p>
                    <Horse @updateHorse="updateHorseHandler" @updateLeaderboard="updateLeaderboardHandler"
                        :horse="horse" :countdown="countDownTimer">
                    </Horse>
                </div>
            </div>
        </div>
    </template>
    <template v-else>
        <div class="empty">
            <div class="empty__track">
                <div class="empty__finish"></div>
            </div>
        </div>
    </template>
    <template v-if="isCountDown">
        <p class="countdown-timer">{{ countDownTimer }}</p>
    </template>
    <div class="race-settings">
        <template v-if="!start">
            <button class="start-btn" @click="raceStart(), countDownSound()">Başla</button>
        </template>
        <template v-if="isFinished">
            <button class="restart-btn" @click="restart"><img class="restart-icon"
                    src="https://cdn-icons-png.flaticon.com/512/5565/5565918.png" alt=""></button>
        </template>
        <div class="bet-options">
            <p class="bet-opt">Bahis Yapılan At: <span class="bet-select">{{ getBet().selectedHorse }}</span></p>
            <p class="bet-opt">Bahis Tutarı: <span class="bet-select">{{ getBet().betAmount }}₺</span></p>
            <p class="bet-opt">Olası Kazanç: <span class="bet-select">{{ getBet().betAmount * betX }}₺</span></p>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.start-btn,
.restart-btn {
    @apply bg-btnprimary text-white p-[5px] rounded-md;
}

.restart-icon {
    @apply w-6;
}

.countdown-timer {
    @apply absolute left-[50%] bottom-[50%] translate-y-[50%] text-[6rem];

}

.track {
    @apply mt-5 w-full h-[600px] bg-no-repeat bg-cover overflow-hidden;
    background-image: url(/Images/Pitch/Bushes.png);
}

.line-id {
    @apply flex text-white font-bold ml-2;
}

.empty {

    &__track {
        @apply w-full mt-5 h-[600px] bg-no-repeat bg-cover;
        background-image: url(/Images/Pitch/Bushes.png);
    }

    &__finish {
        @apply h-[600px] absolute right-0 w-2 bg-white mr-[5vw];
        background-image: url(https://i.pinimg.com/originals/9f/66/4e/9f664e48cb3436b6a664141f92c1baad.png);
        background-size: 60px;
    }
}

.horse {
    @apply flex h-12 relative;

}

.race-settings {
    @apply flex flex-col justify-center items-center mt-5 gap-3 h-[120px];
}

.finish {
    @apply absolute right-0 w-2 h-[75px] bg-white mr-[5vw];
    background-image: url(https://i.pinimg.com/originals/9f/66/4e/9f664e48cb3436b6a664141f92c1baad.png);
    background-size: 60px;
}

.line-wrapper {
    @apply relative;
    border-bottom: solid;
    // background: rgb(125, 196, 125);
    border-color: rgba(240, 248, 255, 0.214);
}

.results {
    @apply flex justify-end;
}

.bet-options {
    @apply flex flex-col items-center justify-center bg-bgprimary text-white w-full h-full;

    .bet-opt {
        @apply flex justify-between w-[250px];
    }

    .bet-select {
        @apply font-bold;
    }
}
</style>