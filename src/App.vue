<script setup>
import { onMounted, ref } from "vue"
import { getLocalWallet, saveLocalWallet, horseData } from "./service/service"
import Race from './components/Race.vue';
import Bet from './components/Bet.vue';

const horses = ref(horseData()); // ATLAR BURDA
const bet = ref(false);
const cash = ref(null);

onMounted(() => {
  const walletData = getLocalWallet() || false; // walletData null gelirse false olarak alıyoruz
  // console.log(walletData); false
  checkWallet(walletData);
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

const setBet = () => {
  bet.value = true;
}

</script>

<template>
  <img src="" alt="">
  <template v-if="!bet">
    <div class="bet-app">
      <Bet :horses="horses" :cash="cash" @submitBet="setBet">
      </Bet>
    </div>
  </template>
  <template v-else>
      <Race :horses="horses" @updateHorse="updateHorseHandler"></Race>
  </template>
</template>

<style scoped>
.bet-app {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
