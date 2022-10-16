<script setup>
import { ref } from "vue"
const balance = ref(150);
const selectedHorse = ref();
const betPrice = ref();
const horseSelect = function () {
    console.log(selectedHorse.value);
}
const checkBetPrice = function () {
    console.log(betPrice.value);
    if (betPrice.value < 1) {
        betPrice.value = 1;
    } else if (betPrice.value > balance.value) {
        betPrice.value = 0;
        betPrice.value = balance.value;
    }
}

</script>

<template>
    <div class="input-wrapper">
        <div class="bet">
            <p>Bakiyeniz: {{balance}}₺</p>
            <div>
                Bir at seçiniz
                <select name="" id="" v-model="selectedHorse">
                    <option value="1">Horse 1</option>
                    <option value="2">Horse 2</option>
                    <option value="3">Horse 3</option>
                    <option value="4">Horse 4</option>
                    <option value="5">Horse 5</option>
                    <option value="6">Horse 6</option>
                    <option value="7">Horse 7</option>
                    <option value="8">Horse 8</option>
                </select>
            </div>
            <div>
                Bahis tutarı giriniz
                <input type="range" min="1" :max=balance @input="checkBetPrice" v-model="betPrice"
                    placeholder="Bet amount...">{{betPrice}}
            </div>
            <button @click="horseSelect">Onayla</button>
        </div>
    </div>
</template>

<style scoped>
select {
    background-color: aquamarine;
}

option {
    background-color: aquamarine;
}

input {
    border: solid 1px;
    color: black;
}

button {
    background-color: aqua;
    padding: 5px;
}
</style>