<script setup>
import { ref } from "vue"
import Race from './components/Race.vue';
import Bet from './components/Bet.vue';

const race = ref(false);

</script>

<template>

  <template v-if="!race">
    <div class="bet">
      <Bet></Bet>
    </div>
  </template>
  <template v-else>
    <Race></Race>
  </template>

</template>

<style scoped>

.bet{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
