<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import { randomSpeed } from "../../utils/race"
import Gif from './HorseGif.vue';

const props = defineProps(["horse", "start"]);
const emits = defineEmits(["updateHorse", "updateLeaderboard"]);

const horseRef = ref(props.horse);  // horse clone, sending it as emit (props, readonly)

const raceStart = computed(() => {
    if (props.start) {
        let running = setInterval(() => {
            if (horseRef.value.pos <= 100) {
                horseRef.value.pos = horseRef.value.pos + randomSpeed(1, 4);    // horse positions change depending on the random speed value
                emits("updateHorse", horseRef.value);
            } else {
                horseRef.value.finish = Date.now();
                emits("updateLeaderboard", horseRef.value);
                idle();
            }
        }, 50)

        let idle = () => {
            clearInterval(running);
        }
    }
});

</script>

<template>
    {{raceStart}}
    <!-- :style moves the horse -->
    <Gif
      class="gif"
      :style="{ left: `${props.horse.pos}%` }"
      :img="horse.img">
    </Gif>
</template>

<style scoped>
.gif {
    @apply absolute;
}
</style>