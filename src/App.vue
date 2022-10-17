<script setup>
import { ref } from "vue"
import Race from './components/Race.vue';
import Bet from './components/Bet.vue';

const race = ref(false);
const balance = ref(100);

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
  <template v-if="!race">
    <div class="bet-app">
      <Bet :horses="horses" :balance="balance">
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
