<script setup>
import { ref } from 'vue';
import { randomSpeed } from "../../utils/race"
import Gif from './HorseGif.vue';

const props = defineProps(["horse", "countdown"]);
const emits = defineEmits(["updateHorse", "updateLeaderboard"]);
const horseRef = ref(props.horse);  // prop olanı değiştirmeyip kopyasında işlem yapıp emit olarak yolluyoruz (props, readonly)

let running = setInterval(() => {
    if (horseRef.value.pos <= 95) {
        horseRef.value.pos = horseRef.value.pos + randomSpeed();
        emits("updateHorse", horseRef.value); // horseref'in pozisyonunu değiştirip obje olarak yolluyoruz
    }else {
        emits("updateLeaderboard", horseRef.value);
        idle();
    }
}, 50)

let idle = () => {
    clearInterval(running);
}

</script>

<template>
    <Gif class="gif" :style="{left:`${props.horse.pos}%`}" :img="horse.img"></Gif>
    <!-- atı hareket ettiren style burada -->
</template>

<style scoped>
.gif {
    @apply absolute;
}
</style>