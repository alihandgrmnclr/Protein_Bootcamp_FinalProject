<script setup>
import { reactive, ref } from 'vue';
import Results from './Results.vue';

const props = defineProps(["horses"]);

const start = ref(false);
const positions = reactive({
    pos1: 0,
    pos2: 0,
    pos3: 0,
    pos4: 0,
    pos5: 0,
    pos6: 0,
    pos7: 0,
    pos8: 0,
});

const leaderboard = reactive({
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
    seventh: "",
    eighth: "",
});


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

const restart = () => {
    window.location.reload();
};

function raceStart() {
    const finish = document.querySelector(".finish");
    const finishPosition = finish.offsetLeft;   //finish çizgisinin pozisyonu

    let horse1 = document.querySelector("#horse-1");    //her atın seçimi
    let horse2 = document.querySelector("#horse-2");
    let horse3 = document.querySelector("#horse-3");
    let horse4 = document.querySelector("#horse-4");
    let horse5 = document.querySelector("#horse-5");
    let horse6 = document.querySelector("#horse-6");
    let horse7 = document.querySelector("#horse-7");
    let horse8 = document.querySelector("#horse-8");

    let allListPosition = setInterval(() => {
        const horsePositions = [
            {
                name: "Gülbatur",
                pos: positions.pos1
            },
            {
                name: "Şahbatur",
                pos: positions.pos2
            },
            {
                name: "Bold Pilot",
                pos: positions.pos3
            },
            {
                name: "Black Lightning",
                pos: positions.pos4
            },
            {
                name: "Yadigar",
                pos: positions.pos5
            },
            {
                name: "Sipahi",
                pos: positions.pos6
            },
            {
                name: "Elkızı",
                pos: positions.pos7
            },
            {
                name: "Unicorn",
                pos: positions.pos8
            },
        ]
        const allPositions = horsePositions.map((item) => item);
        const sortedPositions = allPositions.sort(function (first, second) {
            return second.pos - first.pos;
        });
        leaderboard.first = sortedPositions[0];
        leaderboard.second = sortedPositions[1];
        leaderboard.third = sortedPositions[2];
        leaderboard.fourth = sortedPositions[3];
        leaderboard.fifth = sortedPositions[4];
        leaderboard.sixth = sortedPositions[5];
        leaderboard.seventh = sortedPositions[6];
        leaderboard.eighth = sortedPositions[7];
    }, 50)

    let running1 = setInterval(() => {  
        positions.pos1 += randomSpeed(2, 8);
        horse1.style.left = positions.pos1 + "px";
        if (positions.pos1 > finishPosition) {
            idle1();
        }
    }, 50)
    let idle1 = () => {
        clearInterval(running1);
    }

    let running2 = setInterval(() => {
        positions.pos2 += randomSpeed(2, 8);
        horse2.style.left = positions.pos2 + "px";
        if (positions.pos2 > finishPosition) {
            console.log("2");
            idle2();
        }
    }, 50)
    let idle2 = () => {
        clearInterval(running2);
    }

    let running3 = setInterval(() => {
        positions.pos3 += randomSpeed(2, 8);
        horse3.style.left = positions.pos3 + "px";
        if (positions.pos3 > finishPosition) {
            console.log("3");
            idle3();
        }
    }, 50)
    let idle3 = () => {
        clearInterval(running3);
    }

    let running4 = setInterval(() => {
        positions.pos4 += randomSpeed(2, 8);
        horse4.style.left = positions.pos4 + "px";
        if (positions.pos4 > finishPosition) {
            console.log("4");
            idle4();
        }
    }, 50)
    let idle4 = () => {
        clearInterval(running4);
    }

    let running5 = setInterval(() => {
        positions.pos5 += randomSpeed(2, 8);
        horse5.style.left = positions.pos5 + "px";
        if (positions.pos5 > finishPosition) {
            console.log("5");
            idle5();
        }
    }, 50)
    let idle5 = () => {
        clearInterval(running5);
    }

    let running6 = setInterval(() => {
        positions.pos6 += randomSpeed(2, 8);
        horse6.style.left = positions.pos6 + "px";
        if (positions.pos6 > finishPosition) {
            console.log("6");
            idle6();
        }
    }, 50)
    let idle6 = () => {
        clearInterval(running6);
    }

    let running7 = setInterval(() => {
        positions.pos7 += randomSpeed(2, 8);
        horse7.style.left = positions.pos7 + "px";
        if (positions.pos7 > finishPosition) {
            console.log("7");
            idle7();
        }
    }, 50)
    let idle7 = () => {
        clearInterval(running7);
    }

    let running8 = setInterval(() => {
        positions.pos8 += randomSpeed(2, 8);
        horse8.style.left = positions.pos8 + "px";
        if (positions.pos8 > finishPosition) {
            console.log("8");
            idle8();
        }
    }, 50)
    let idle8 = () => {
        clearInterval(running8);
    }

}

</script>

<template>
    <template v-if="!start">
        <div class="results">
            <Results :horses="props.horses" :results="leaderboard"></Results>
        </div>
        <div class="track">
            <div v-for="horse in images" :key="horse.id">
                <div class="finish"></div>
                <div class="line-wrapper">
                    {{horse.id}} <img class="horse" :src="horse.link" :id="'horse-'+horse.id">
                </div>
            </div>
        </div>
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
    border-bottom: solid;
    border-color: rgba(240, 248, 255, 0.214);
}

.results {
    @apply flex justify-end;
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