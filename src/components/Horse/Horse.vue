<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import { randomSpeed } from "../../utils/race"
import HorseGif from './HorseGif.vue';
import HorsePng from './HorsePng.vue'

const props = defineProps(["horse", "start"]);
const emits = defineEmits(["updateHorse", "updateLeaderboard"]);

const horseRef = ref(props.horse);  // horse clone, sending it as emit (props, readonly)

const raceStart = computed(() => {
    if (props.start) {
        let running = setInterval(() => {
            if (horseRef.value.pos <= 100) {
                horseRef.value.pos = horseRef.value.pos + randomSpeed(0.5, 6);    // horse positions change depending on the random speed value
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
        return true;
    }
});

raceStart;

</script>

<template>
    <!-- :style moves the horse -->
    <template v-if="raceStart">
        <HorseGif
          class="gif"
          :style="{ left: `${props.horse.pos}%` }"
          :img="horse.img">
          </HorseGif>
    </template>
    <template v-else>
        <HorsePng
        class="gif"
        :img="horse.img">
        </HorsePng>
    </template>


</template>

<style scoped>
.gif {
    @apply absolute;
}
</style>