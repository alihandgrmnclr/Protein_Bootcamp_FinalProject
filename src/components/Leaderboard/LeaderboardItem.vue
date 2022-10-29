<script setup>
import { computed } from 'vue';
import { getFinishTime } from "../../utils/race"

const props = defineProps(["horse", "rank", "leaderboard", "raceFinished"]);

const rankClasses = computed(() => {    // class name matching with the ranking
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
        <p :class="rankClasses">{{ props.rank + 1 }}-</p>
        <p class="leaderboard__profile__horse">{{ props.horse.name }}({{ props.horse.id }})</p>
        <template v-if="props.raceFinished">
            <p class="leaderboard__profile__seconds">{{ getFinishTime(props.horse.start, props.horse.finish) }}sn</p>
        </template>
    </div>

</template>

<style lang="scss" scoped>
.leaderboard__profile {
    @apply flex w-[45%] items-center justify-between;
    @apply sm:w-[250px];

    &__horse {
        @apply flex flex-1 justify-center items-center;
    }

    &__seconds {
        @apply text-right;
    }
}

.rank-first {
    @apply flex justify-center items-center text-orange-600 text-2xl font-bold py-2;
    @apply sm:text-2xl;
}

.rank-second {
    @apply flex justify-center items-center text-yellow-500 text-2xl font-bold py-2;
    @apply sm:text-2xl;
}

.rank-third {
    @apply flex justify-center items-center text-purple-900 text-2xl font-bold py-2;
    @apply sm:text-2xl;
}
</style>