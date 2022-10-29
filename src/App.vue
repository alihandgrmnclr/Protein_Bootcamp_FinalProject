<script setup>
import { onMounted, ref } from "vue"
import { getLocalWallet, saveBet, clearBet, saveLocalWallet, setWallet } from "./utils/wallet"
import { horseData } from "./utils/race"

import Race from './components/Race.vue';
import Bet from './components/Bet/Bet.vue';

const horses = ref(horseData()); // horse data here
const bet = ref(false); // if the bet value is true, the race screen loads 
const cash = ref(getLocalWallet());

onMounted(() => {
  const walletData = getLocalWallet() || false; // if walletData == null -> false
  checkWallet(walletData);
  clearBet();
  setWallet();
});

function checkWallet(walletData) {
  if (walletData) return;
  cash.value = saveLocalWallet(0);
}

const updateHorseHandler = (updatedHorseData) => {
  const horseIndex = horses.value.findIndex(horse => horse.id === updatedHorseData.id); // updating the data (matching the indexes)
  horses.value[horseIndex] = updatedHorseData;
}

const setBet = (betValue, betHorse) => {  // setting the bet
  bet.value = true;
  saveBet(betValue, betHorse);
  return;
}
</script>

<template>
  <template v-if="!bet">
    <div class="bet-app">
      <Bet
        :horses="horses"
        :cash="cash"
        @submitBet="setBet">
      </Bet>
    </div>
  </template>
  <template v-else>
    <Race
      :horses="horses"
      @updateHorse="updateHorseHandler">
    </Race>
  </template>
</template>

<style scoped>
.bet-app {
  @apply flex justify-center items-center h-full;

}
</style>
