<script setup>
import { onMounted } from 'vue';

const props = defineProps(["horses", "results"]);

// DRAGGABLE
// onMounted(() => {
//     const wrapper = document.querySelector(".wrapper"); // parent element of draggable div
//     const head = document.querySelector("#header"); // this is the draggable div

//     function onDrag({ movementX, movementY }) {
//         let getStyle = window.getComputedStyle(wrapper);
//         let leftVal = parseInt(getStyle.left);
//         let topVal = parseInt(getStyle.top);
//         wrapper.style.left = `${leftVal + movementX}px`;
//         wrapper.style.top = `${topVal + movementY}px`;
//     }
//     head.addEventListener("mousedown", () => {
//         head.classList.add("active");
//         head.addEventListener("mousemove", onDrag);
//     });
//     document.addEventListener("mouseup", () => {
//         head.classList.remove("active");
//         head.removeEventListener("mousemove", onDrag);
//     });
// })


</script>

<template>
    <div class="results-wrapper">
        <div class="leaderboard wrapper">
            <div id="header">
                <div class="leaderboard__header">
                    <img class="leaderboard__icon" src="https://cdn-icons-png.flaticon.com/512/744/744974.png" alt="">
                    <h1 class="leaderboard__title">LIDERLIK TABLOSU</h1>
                </div>
            </div>
            <div class="leaderboard__rankings">
                <div class="leaderboard__rankings-triple">
                    <div class="leaderboard__profile">
                        <span class="rank-first">1-</span> <span>{{props.results.first.name}}</span> <span
                            class="time">{{props.results.first.pos}} {{horses.id}}<span v-if="props.results.first.pos" class="seconds">m</span></span>
                    </div>
                    <div class="leaderboard__profile">
                        <span class="rank-second">2-</span> <span>{{props.results.second.name}}</span> <span
                            class="time">{{props.results.second.pos}}<span v-if="props.results.second.pos" class="seconds">m</span></span>
                    </div>
                    <div class="leaderboard__profile">
                        <span class="rank-third">3-</span> <span>{{props.results.third.name}}</span> <span
                            class="time">{{props.results.third.pos}}<span v-if="props.results.third.pos" class="seconds">m</span></span>
                    </div>
                </div>

                <!-- <div class="leaderboard__rankings-remains">
                    <div class="leaderboard__profile" v-for="horse in props.horses">
                        <span class="rank">{{horse.id}}</span> <span></span> <span
                            class="time">15.6<span class="seconds">m</span></span>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.results-wrapper {
    font-family: 'Source Sans Pro', sans-serif;
    @apply flex w-full mt-5;
}

.leaderboard {
    @apply flex flex-col flex-wrap justify-center items-center p-3 bg-bgprimary text-slate-50 w-[800px] h-[200px] rounded-xl;

    &__header {
        @apply flex flex-col justify-center items-center w-full;
    }

    &__icon {
        @apply w-14;
    }

    &__title {
        @apply text-3xl font-black;
    }

    &__rankings {
        @apply flex gap-4 text-xl font-semibold;
    }

    &__rankings-triple {
        @apply flex flex-col justify-center;
    }

    &__rankings-remains {
        @apply text-base;
    }

    &__profile {
        @apply flex w-full justify-between gap-3;
    }

    .rank-first {
        @apply text-orange-600 text-2xl font-bold;
    }

    .rank-second {
        @apply text-yellow-500 text-2xl font-bold;
    }

    .rank-third {
        @apply text-purple-900 text-2xl font-bold;
    }

    .time {
        @apply text-black;
    }

    .seconds {
        @apply text-sm;
    }
}
</style>