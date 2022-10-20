<script setup>
import { ref } from 'vue';
import Results from './Results.vue';
import Horse from './Horse.vue';
const props = defineProps(["horses"]);
const emits = defineEmits(["updateHorse"]);
const start = ref(false);

const countDownShow = ref(false);
const countDownTimer = ref(3);

const delay = (ms) => { // 3 saniyelik bir countdown
    countDownShow.value = true;
    const countDown = setInterval(() => {
        if (countDownTimer.value <= 1) {
            clearInterval(countDown);
            countDownShow.value = false;
        }
        countDownTimer.value--;
    }, 1000);
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

const restart = () => {
    window.location.reload();
};

async function raceStart() {
    await delay(4000);  // delay fonksiyonu bitmeden yarış başlamıyor
}

const updateHorseHandler = (horse) => { // @updateHorse çalıştığında yakalıyoruz
    emits("updateHorse", horse); // yukarı gönderiyoruz (app)
}

</script>

<template>
    <template v-if="!start">
        <div class="results">
            <Results :horses="props.horses"></Results>
        </div>
        <template v-if="countDownTimer<1">
            <div class="track">
                <div v-for="horse in props.horses" :key="horse.id">
                    <div class="finish"></div>
                    <div class="line-wrapper">
                        {{horse.id}} <Horse @updateHorse="updateHorseHandler" :horse="horse"
                            :countdown="countDownTimer"></Horse>
                    </div>
                </div>
            </div>
        </template>
        <template v-if="countDownShow">
            <p class="countdown-timer">{{countDownTimer}}</p>
        </template>
        <div class="race-settings">
            <button class="start-btn" @click="raceStart">Başla</button>
            <button class="restart-btn" @click="restart"><img class="restart-icon"
                    src="https://cdn-icons-png.flaticon.com/512/5565/5565918.png" alt=""></button>
        </div>
    </template>
</template>

<style scoped>
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
    @apply mt-5;
    background-image: url(/Images/Pitch/Çim.png);
}

.horse {
    @apply flex h-12 relative;

}

.race-settings {
    @apply flex justify-center items-center mt-5 gap-3;
}

.finish {
    @apply absolute right-0 w-2 h-[75px] bg-white mr-20
}

.line-wrapper {
    @apply relative;
    border-bottom: solid;
    border-color: rgba(240, 248, 255, 0.214);
}

.results {
    @apply flex justify-end;
}
</style>