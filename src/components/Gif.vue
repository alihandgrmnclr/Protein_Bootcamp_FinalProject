<script setup>

const props = defineProps(["img"]);

const runningPath = `../../Images/Horses/${props.img}.gif`

</script>

<template>
        <img class="horse" :src="runningPath" alt="">
</template>

<style scoped>

.horse{
    @apply w-[75px]
}

</style>