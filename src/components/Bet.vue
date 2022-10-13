<script setup>
import { ref } from "vue"
const balance = ref(100);
const selectedHorse = ref();

</script>

<template>
    <div class="input-wrapper">
        <div class="bet">
            <p>You currently have {{balance}}€</p>
            <select name="" id="" v-model="selectedHorse">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
            </select>
            <button @click="horseSelect">Seç</button>
        </div>
    </div>
</template>

<style scoped>

</style>