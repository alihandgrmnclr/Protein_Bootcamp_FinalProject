<script setup>
import { ref } from 'vue';
import Results from './Results.vue';

const start = ref(false);
const positions = ref({
    pos1: 0,
    pos2: 0,
    pos3: 0,
    pos4: 0,
    pos5: 0,
    pos6: 0,
    pos7: 0,
    pos8: 0
})


const images = [
    {
        id: 1,
        link: "../../Images/Horses/H1.gif"
    },
    {
        id: 2,
        link: "../../Images/Horses/H2.gif"
    },
    {
        id: 3,
        link: "../../Images/Horses/H3.gif"
    },
    {
        id: 4,
        link: "../../Images/Horses/H4.gif"
    },
    {
        id: 5,
        link: "../../Images/Horses/H5.gif"
    },
    {
        id: 6,
        link: "../../Images/Horses/H6.gif"
    },
    {
        id: 7,
        link: "../../Images/Horses/H7.gif"
    },
    {
        id: 8,
        link: "../../Images/Horses/H8.gif"
    }

];

const randomSpeed = (min, max) => {
    return Math.floor((Math.random() * (max - min)) + min);
}

function raceStart() {
    

    let horse1 = document.querySelector("#horse-1");
    let horse2 = document.querySelector("#horse-2");
    let horse3 = document.querySelector("#horse-3");
    let horse4 = document.querySelector("#horse-4");
    let horse5 = document.querySelector("#horse-5");
    let horse6 = document.querySelector("#horse-6");
    let horse7 = document.querySelector("#horse-7");
    let horse8 = document.querySelector("#horse-8");

    
    // let running = setInterval(function () {
    //     position1 += randomSpeed(2, 8);
    //     position2 += randomSpeed(2, 8);
    //     position3 += randomSpeed(2, 8);
    //     position4 += randomSpeed(2, 8);
    //     position5 += randomSpeed(2, 8);
    //     position6 += randomSpeed(2, 8);
    //     position7 += randomSpeed(2, 8);
    //     position8 += randomSpeed(2, 8);
    //     horse1.style.left = position1 + "px";
    //     horse2.style.left = position2 + "px";
    //     horse3.style.left = position3 + "px";
    //     horse4.style.left = position4 + "px";
    //     horse5.style.left = position5 + "px";
    //     horse6.style.left = position6 + "px";
    //     horse7.style.left = position7 + "px";
    //     horse8.style.left = position8 + "px";
        
        
    //     if (position1 > 14400) {
    //         idle();
    //     }

    //     console.log(sumPosition);
    // }, 50)

    let running1 = setInterval(()=>{
        positions.value.pos1 += randomSpeed(2, 8);
        horse1.style.left = positions.value.pos1 + "px";

        if (positions.value.pos1 > 1820) {
            idle1();
        }
    },50)
    let idle1 = () => {
        clearInterval(running1);
    }

    let running2 = setInterval(()=>{
        positions.value.pos2 += randomSpeed(2, 8);
        horse2.style.left = positions.value.pos2 + "px";

        if (positions.value.pos2 > 1820) {
            idle2();
        }
    },50)
    let idle2 = () => {
        clearInterval(running2);
    }

    let running3 = setInterval(()=>{
        positions.value.pos3 += randomSpeed(2, 8);
        horse3.style.left = positions.value.pos3 + "px";

        if (positions.value.pos3 > 1820) {
            idle3();
        }
    },50)
    let idle3 = () => {
        clearInterval(running3);
    }

    let running4 = setInterval(()=>{
        positions.value.pos4 += randomSpeed(2, 8);
        horse4.style.left = positions.value.pos4 + "px";

        if (positions.value.pos4 > 1820) {
            idle4();
        }
    },50)
    let idle4 = () => {
        clearInterval(running4);
    }

    let running5 = setInterval(()=>{
        positions.value.pos5 += randomSpeed(2, 8);
        horse5.style.left = positions.value.pos5 + "px";

        if (positions.value.pos5 > 1820) {
            idle5();
        }
    },50)
    let idle5 = () => {
        clearInterval(running5);
    }

    let running6 = setInterval(()=>{
        positions.value.pos6 += randomSpeed(2, 8);
        horse6.style.left = positions.value.pos6 + "px";

        if (positions.value.pos6 > 1820) {
            idle6();
        }
    },50)
    let idle6 = () => {
        clearInterval(running6);
    }

    let running7 = setInterval(()=>{
        positions.value.pos7 += randomSpeed(2, 8);
        horse7.style.left = positions.value.pos7 + "px";

        if (positions.value.pos7 > 1820) {
            idle7();
        }
    },50)
    let idle7 = () => {
        clearInterval(running7);
    }

    let running8 = setInterval(()=>{
        positions.value.pos8 += randomSpeed(2, 8);
        horse8.style.left = positions.value.pos8 + "px";

        if (positions.value.pos8 > 1820) {
            idle8();
        }
    },50)
    let idle8 = () => {
        clearInterval(running8);
    }

    // let idle = () => {
    //     clearInterval(running);
    // }

}



</script>

<template>
    <button @click="raceStart">Başla</button>
    <template v-if="!start">
        <Results></Results>
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
    @apply absolute right-0 w-2 h-[102px] bg-white mr-20
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