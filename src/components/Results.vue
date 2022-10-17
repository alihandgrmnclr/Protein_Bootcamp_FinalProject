<script setup>
import { onMounted } from 'vue';

const props = defineProps([]);

// DRAGGABLE
onMounted(() => {
    const wrapper = document.querySelector(".wrapper"); // parent element of draggable div
    const head = document.querySelector("#header"); // this is the draggable div

    function onDrag({ movementX, movementY }) {
        let getStyle = window.getComputedStyle(wrapper);
        let leftVal = parseInt(getStyle.left);
        let topVal = parseInt(getStyle.top);
        wrapper.style.left = `${leftVal + movementX}px`;
        wrapper.style.top = `${topVal + movementY}px`;
    }
    head.addEventListener("mousedown", () => {
        head.classList.add("active");
        head.addEventListener("mousemove", onDrag);
    });
    document.addEventListener("mouseup", () => {
        head.classList.remove("active");
        head.removeEventListener("mousemove", onDrag);
    });
})

</script>

<template>
    <div class="leaderboard wrapper">
        <div id="header">
            <div class="leaderboard__header">
                <img class="leaderboard__icon" src="https://cdn-icons-png.flaticon.com/512/744/744974.png" alt="">
                <h1 class="leaderboard__title">LIDERLIK TABLOSU</h1>
            </div>
        </div>
        <div class="leaderboard__rankings">
            <div class="leaderboard__profile">
                <span class="rank-first">1-</span> <span>Gülbatur</span> <span class="time">15.6<span
                        class="seconds">saniye</span></span>
            </div>
            <div class="leaderboard__profile">
                <span class="rank-second">2-</span> <span>Şahbatur</span> <span class="time">15.6<span
                        class="seconds">saniye</span></span>
            </div>
            <div class="leaderboard__profile">
                <span class="rank-third">3-</span> <span>Bold Pilot</span> <span class="time">15.6<span
                        class="seconds">saniye</span></span>
            </div>
            <div class="leaderboard__profile">
                <span class="rank">4-</span> <span>Black Lightning</span> <span class="time">15.6<span
                        class="seconds">saniye</span></span>
            </div>
            <div class="leaderboard__profile">
                <span class="rank">5-</span> <span>Mucit Tay</span> <span class="time">15.6<span
                        class="seconds">saniye</span></span>
            </div>
            <div class="leaderboard__profile">
                <span class="rank">6-</span> <span>Barbaros</span> <span class="time">15.6<span
                        class="seconds">saniye</span></span>
            </div>
            <div class="leaderboard__profile">
                <span class="rank">7-</span> <span>Manas</span> <span class="time">15.6<span
                        class="seconds">saniye</span></span>
            </div>
            <div class="leaderboard__profile">
                <span class="rank">8-</span> <span>Sipahi</span> <span class="time">15.6<span
                        class="seconds">saniye</span></span>
            </div>
        </div>

    </div>

</template>

<style lang="scss" scoped>
.leaderboard {
    opacity: .7;
    @apply flex flex-col justify-center items-center p-3 bg-gray-800 text-slate-50 w-96 rounded-xl absolute z-10 cursor-move;
    left: 30%;
    font-family: 'Source Sans Pro', sans-serif;

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
        @apply text-xl font-semibold;
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
        @apply text-purple-600 text-2xl font-bold;
    }

    .time {
        @apply text-green-600;
    }

    .seconds {
        @apply text-sm;
    }
}
</style>