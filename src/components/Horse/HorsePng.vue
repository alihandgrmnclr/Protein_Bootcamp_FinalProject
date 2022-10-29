<script setup>
const props = defineProps(["img"]);

const imgPath = `/Images/HorsesPng/${props.img}.png`

</script>

<template>
    <img class="horse" :src="imgPath" alt="gif">
</template>

<style scoped>
.horse {
    @apply w-[45px];
    @apply sm:w-[75px];
}
</style>