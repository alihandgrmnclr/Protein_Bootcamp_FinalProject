<script setup>
import { ref } from 'vue';
const start = ref(false);

const images = [
    {
        id: 1,
        link: "../../public/Images/Horses/H1.gif"
    },
    {
        id: 2,
        link: "../../public/Images/Horses/H2.gif"
    },
    {
        id: 3,
        link: "../../public/Images/Horses/H3.gif"
    },
    {
        id: 4,
        link: "../../public/Images/Horses/H4.gif"
    },
    {
        id: 5,
        link: "../../public/Images/Horses/H5.gif"
    },
    {
        id: 6,
        link: "../../public/Images/Horses/H6.gif"
    },
    {
        id: 7,
        link: "../../public/Images/Horses/H7.gif"
    },
    {
        id: 8,
        link: "../../public/Images/Horses/H8.gif"
    }

];
var reqID;


const randomSpeed = (min, max) => {
    return Math.floor((Math.random() * (max - min)) + min);
}
// console.log(randomSpeed(20,40));

const raceStart = function () {
    let horse1 = document.querySelector("#horse-1");
    let horse2 = document.querySelector("#horse-2");
    let horse3 = document.querySelector("#horse-3");
    let horse4 = document.querySelector("#horse-4");
    let horse5 = document.querySelector("#horse-5");
    let horse6 = document.querySelector("#horse-6");
    let horse7 = document.querySelector("#horse-7");
    let horse8 = document.querySelector("#horse-8");

    let position1 = 0;
    let position2 = 0;
    let position3 = 0;
    let position4 = 0;
    let position5 = 0;
    let position6 = 0;
    let position7 = 0;
    let position8 = 0;

    let running = setInterval(function () {
        position1 += randomSpeed(2, 8);
        position2 += randomSpeed(2, 8);
        position3 += randomSpeed(2, 8);
        position4 += randomSpeed(2, 8);
        position5 += randomSpeed(2, 8);
        position6 += randomSpeed(2, 8);
        position7 += randomSpeed(2, 8);
        position8 += randomSpeed(2, 8);
        horse1.style.left = position1 + "px";
        horse2.style.left = position2 + "px";
        horse3.style.left = position3 + "px";
        horse4.style.left = position4 + "px";
        horse5.style.left = position5 + "px";
        horse6.style.left = position6 + "px";
        horse7.style.left = position7 + "px";
        horse8.style.left = position8 + "px";
      
        console.log(position1, position2, position3, position4, position5, position6, position7, position8);
    }, 50)
}

</script>

<template>
    <button @click="raceStart">Başla</button>
    <template v-if="!start">

        <div class="track">
            <div v-for="horse in images" :key="horse.id">
                <div class="finish"></div>
                <div class="line-wrapper">
                    {{horse.id}} <img class="horse" :src="horse.link" :id="'horse-'+horse.id">
                </div>
            </div>
        </div>
    </template>
</template>

<style scoped>
button {
    background-color: aquamarine;
    padding: 5px;
    border-radius: 5px;
}

.track {
    margin-top: 20px;
}

.horse {
    display: flex;
    height: 50px;
    position: relative;

}

.finish {
    @apply absolute right-0 w-2 h-[102px] bg-white mr-10
}

.line-wrapper {
    background-color: rgba(37, 133, 32, 0.753);
    border: 1px;
    border-bottom: solid;
}

/* .running-horse {
    animation-name: run;
    animation-duration: 1500ms;
}

@keyframes run {
    0% {
        transform: translateX(0px);
    }

    100% {
        transform: translateX(100vw);
    }
} */
</style>