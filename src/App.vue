<script setup>
import { onMounted, ref } from "vue"
import { getLocalWallet, saveLocalWallet } from "./service/service"
import Race from './components/Race.vue';
import Bet from './components/Bet.vue';

const race = ref(false);
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


const setBet = () => {
  bet.value = true;
}

const horses = [
  {
    id: 1,
    name: "Gülbatur",
    img: "../public/Images/Horses/H1.gif"
  },
  {
    id: 2,
    name: "Şahbatur",
    img: "../public/Images/Horses/H2.gif"
  },
  {
    id: 3,
    name: "Bold Pilot",
    img: "../public/Images/Horses/H3.gif"
  },
  {
    id: 4,
    name: "Black Lightning",
    img: "../public/Images/Horses/H4.gif"
  },
  {
    id: 5,
    name: "Yadigar",
    img: "../public/Images/Horses/H5.gif"
  },
  {
    id: 6,
    name: "Sipahi",
    img: "../public/Images/Horses/H6.gif"
  },
  {
    id: 7,
    name: "Elkızı",
    img: "../public/Images/Horses/H7.gif"
  },
  {
    id: 8,
    name: "Unicorn",
    img: "../public/Images/Horses/H8.gif"
  }
]

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
    <Race></Race>
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
