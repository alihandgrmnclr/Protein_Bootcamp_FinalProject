<script setup>
import { computed } from 'vue';
import { getLeaderboard } from '../service/service';


const props = defineProps(["horse", "rank"]);

const rankClasses = computed(() => {    // eşleşen class'ları verdim
    return {
        "rank-first": props.rank == 0,
        "rank-second": props.rank == 1,
        "rank-third": props.rank == 2,
        "rank": props.rank > 2,
    }
});

</script>

<template>
    <div class="leaderboard__profile">
        <template v-if="getLeaderboard().length<7">
            <span :class="rankClasses">{{props.rank+1}}-</span>
            <span>{{props.horse.name}}({{props.horse.id}})</span>
            <span class="time"> {{(props.horse.pos).toFixed(1)}}
                <span v-if="props.horse.pos" class="seconds">m</span>
            </span>
        </template>
        <template v-else>
            <span :class="rankClasses">-</span>
            <span>{{getLeaderboard()[0]}}</span>
        </template>
    </div>
</template>

<style>
.leaderboard__profile {
    @apply flex w-full items-center justify-between;
}

.rank-first {
    @apply text-orange-600 text-2xl font-bold py-2;
}

.rank-second {
    @apply text-yellow-500 text-2xl font-bold py-2;
}

.rank-third {
    @apply text-purple-900 text-2xl font-bold py-2;
}

.time {
    @apply text-black text-sm ml-4;
}

.seconds {
    @apply text-sm;
}
</style>