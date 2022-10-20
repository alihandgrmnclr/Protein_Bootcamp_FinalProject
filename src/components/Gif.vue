<script setup>

const props = defineProps(["img"]);

const path = `../../Images/Horses/${props.img}.gif`

</script>

<template>
    <img class="horse" :src="path" alt="">
</template>

<style scoped>

.horse{
    @apply w-[75px]
}

</style>