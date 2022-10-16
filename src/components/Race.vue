<script setup>
import { ref } from 'vue';
const start = ref(false);

const images = [
    {
        id: 1,
        link: "../../public/Images/HorsesH1.gif"
    },
    {
        id: 2,
        link: "../../public/Images/HorsesH2.gif"
    },
    {
        id: 3,
        link: "../../public/Images/HorsesH3.gif"
    },
    {
        id: 4,
        link: "../../public/Images/HorsesH4.gif"
    },
    {
        id: 5,
        link: "../../public/Images/HorsesH5.gif"
    },
    {
        id: 6,
        link: "../../public/Images/HorsesH6.gif"
    },
    {
        id: 7,
        link: "../../public/Images/HorsesH7.gif"
    },
    {
        id: 8,
        link: "../../public/Images/HorsesH8.gif"
    }

];

const randomSpeed = (min, max) => {
    return Math.floor((Math.random() * (max - min)) + min); //20-40 aralığında random hız
}



</script>

<template>

    <template v-if="start">

        <div class="track">
            <div v-for="horse in images" :key="horse.id">
                <div class="finish"></div>
                <div class="line-wrapper">
                    {{horse.id}} <img class="horse" :src="horse.link">
                </div>
            </div>
        </div>
    </template>
</template>

<style scoped>


.track {
  margin-top: 20px;
}

.horse {
  display: flex;
  height: 75px;
}

.finish {
  @apply absolute right-0 w-2 h-[102px] bg-white mr-10
}

.line-wrapper {
  background-color: rgba(37, 133, 32, 0.753);
  border: 1px;
  border-bottom: solid;
}

</style>