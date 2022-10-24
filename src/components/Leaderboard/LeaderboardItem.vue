<script setup>
import { computed } from 'vue';

const props = defineProps(["horse", "rank", "leaderboard","chronometer"]);

const rankClasses = computed(() => {    // eşleşen class'ları verdim
    return {
        "rank-first": props.rank == 0,
        "rank-second": props.rank == 1,
        "rank-third": props.rank == 2,
        "rank": props.rank > 2,
    }
});

const seconds = computed(() => {
console.log(props.chronometer);
});

</script>

<template>
    <div class="leaderboard__profile">
        <p :class="rankClasses">{{props.rank+1}}-</p>
        <p class="horse-name">{{props.horse.name}} <p class="horse-id">({{props.horse.id}})</p></p>
        <!-- <p class="time"> {{(props.horse.finish)}}
            <p v-if="props.horse.pos" class="seconds">{{seconds}}sn</p>
        </p> -->
    </div>

</template>

<style>
.leaderboard__profile {
    font-family: 'Pixel';
    @apply flex w-[45%] items-center justify-between;
    @apply sm:w-[200px];
}
.horse-name{
    @apply flex justify-center items-center;
}
.rank-first {
    @apply flex justify-center items-center text-orange-600 text-2xl font-bold py-2;
}

.rank-second {
    @apply flex justify-center items-center text-yellow-500 text-2xl font-bold py-2;
}

.rank-third {
    @apply flex justify-center items-center text-purple-900 text-2xl font-bold py-2;
}

.time {
    @apply flex justify-center items-center text-black text-sm ml-4;
}

.seconds {
    @apply flex justify-center items-center text-sm;
}

.horse-id{
    
}
</style>