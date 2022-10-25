<script setup>
import { ref } from 'vue';
import { randomSpeed } from "../../utils/race"
import Gif from './HorseGif.vue';

const props = defineProps(["horse", "countdown"]);
const emits = defineEmits(["updateHorse", "updateLeaderboard"]);

const horseRef = ref(props.horse);  // horse clone, sending it as emit (props, readonly)

let running = setInterval(() => {
    if (horseRef.value.pos <= 95) {
        horseRef.value.pos = horseRef.value.pos + randomSpeed();    // horse positions change depending on the random speed value
        emits("updateHorse", horseRef.value); 
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
    <!-- :style moves the horse -->
    <Gif
      class="gif"
      :style="{left:`${props.horse.pos}%`}"
      :img="horse.img">
    </Gif> 
</template>

<style scoped>
.gif {
    @apply absolute;
}
</style>