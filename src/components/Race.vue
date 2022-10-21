<script setup>
import { ref } from 'vue';
import Results from './Results.vue';
import Horse from './Horse.vue';
const props = defineProps(["horses", "bet"]);
const emits = defineEmits(["updateHorse", "updateLeaderboard"]);

const start = ref(false);
const isFinished = ref(false);
const countDownShow = ref(false);
const countDownTimer = ref(3);
const finalLeaderboard = ref([]);

const delay = (ms) => { // 3 saniyelik bir countdown
    countDownShow.value = true;
    const countDown = setInterval(() => {
        if (countDownTimer.value <= 1) {
            clearInterval(countDown);
            countDownShow.value = false;
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
        <Results :horses="props.horses" :leaderboard="finalLeaderboard"></Results>
    </div>
    <template v-if="countDownTimer<1">
        <div class="track">
            <div v-for="horse in props.horses" :key="horse.id">
                <div class="finish"></div>
                <div class="line-wrapper">
                    <p class="line-id">{{horse.id}}</p>
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
    <template v-if="countDownShow">
        <p class="countdown-timer">{{countDownTimer}}</p>
    </template>
    <div class="race-settings">
        <template v-if="!start">
            <button class="start-btn" @click="raceStart">Başla</button>
        </template>
        <template v-if="isFinished">
            <button class="restart-btn" @click="restart"><img class="restart-icon"
                    src="https://cdn-icons-png.flaticon.com/512/5565/5565918.png" alt=""></button>
        </template>
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
    @apply flex justify-center text-[36px];
}

.track {
    @apply mt-5 overflow-hidden;
    background-image: url(/Images/Pitch/Bushes.png);
    background-size: cover;
}

.line-id{
    @apply flex text-white font-bold ml-2;
}

.empty {

    &__track {
        @apply w-full mt-5 h-[600px];
        background-image: url(/Images/Pitch/Bushes.png);
    }

    &__finish {
        @apply h-[600px] absolute right-0 w-2 bg-white mr-20;
    }
}

.horse {
    @apply flex h-12 relative;

}

.race-settings {
    @apply flex justify-center items-center mt-5 gap-3;
}

.finish {
    @apply absolute right-0 w-2 h-[75px] bg-white mr-20;
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
</style>