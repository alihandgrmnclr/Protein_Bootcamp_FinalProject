<script setup>
import { ref, onMounted } from 'vue';
import { randomSpeed } from "../service/service"
import Gif from './Gif.vue';

const props = defineProps(["horse", "countdown"]);
const emits = defineEmits(["updateHorse"]);
const horseRef = ref(props.horse);  // prop olanı değiştirmeyip kopyasında işlem yapıp emit olarak yolluyoruz


onMounted(() => {

    let running = setInterval(() => {
        horseRef.value.pos = horseRef.value.pos + randomSpeed();
        emits("updateHorse", horseRef.value); // horseref'in pozisyonunu değiştirip obje olarak yolluyoruz
        if (props.horse.pos >= 95) {
            console.log(horseRef.value.id);
            idle();
        }
    }, 50)
    let idle = () => {
        clearInterval(running);
    }
});

</script>

<template>
    <Gif class="gif" :style="{left:`${props.horse.pos}%`}" :img="horse.img"></Gif>
</template>

<style scoped>
.gif {
    @apply absolute;
}
</style>