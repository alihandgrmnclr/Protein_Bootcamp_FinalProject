<script setup>
import { onMounted, ref } from "vue"
import { getLocalWallet, saveLocalWallet, saveBet, clearBet } from "./utils/wallet"
import { horseData } from "./utils/race"

import Race from './components/Race.vue';
import Bet from './components/Bet.vue';

const horses = ref(horseData()); // horse data yı ekliyorum
const bet = ref(false); // bet true olmadan, yarış ekranı gelmiyor
const cash = ref(getLocalWallet());

onMounted(() => {
  const walletData = getLocalWallet() || false; // walletData null gelirse false olarak alıyoruz
  checkWallet(walletData);
  clearBet();
});

function checkWallet(walletData) {
  cash.value = getLocalWallet();
  if (walletData) return;  // walletData true gelirse çalışmaması gerekiyor
  saveLocalWallet(100);  // walletData yoksa bakiye olarak girilen değeri ekliyorum
  cash.value = getLocalWallet();
}

const updateHorseHandler = (updatedHorseData) => {
  const horseIndex = horses.value.findIndex(horse => horse.id === updatedHorseData.id); //  gelen veriyi indexi ile eşleştirip, horses objesini güncelledik
  horses.value[horseIndex] = updatedHorseData;
}

const setBet = (betValue, betHorse) => {
  bet.value = true;
  saveBet(betValue, betHorse);
  return;
}

</script>

<template>
  <template v-if="!bet">
    <div class="bet-app">
      <Bet :horses="horses" :cash="cash" @submitBet="setBet"></Bet>
    </div>
  </template>
  <template v-else>
    <Race :horses="horses" @updateHorse="updateHorseHandler"></Race>
  </template>
</template>

<style scoped>
.bet-app {
  @apply flex justify-center items-center h-full;

}
</style>
