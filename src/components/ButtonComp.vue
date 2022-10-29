<script setup>

const props = defineProps(["text"]);

</script>

<template>

    <button class="btn">{{ props.text }}</button>
    
</template>

<style scoped>
.btn {
    @apply flex justify-center items-center text-white p-[10px] w-32 bg-btnprimary rounded-[10px];
}

</style>