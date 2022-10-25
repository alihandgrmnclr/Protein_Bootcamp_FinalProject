<script setup>
const props = defineProps(["img"]);

const imgPath = `../../Images/Horses/${props.img}.gif`

</script>

<template>
        <img class="horse" :src="imgPath" alt="gif">
</template>

<style scoped>
.horse{
    @apply w-[75px]
}
</style>