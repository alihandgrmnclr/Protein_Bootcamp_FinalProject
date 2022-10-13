<script setup>
import Race from './components/Race.vue';
import Bet from './components/Bet.vue';
import Results from './components/Results.vue';


</script>

<template>
  
  <Bet></Bet>
  <Results></Results>
  <Race></Race>

</template>

<style scoped>



.track {
  margin-top: 20px;
}

.horse {
  display: flex;
  height: 75px;
}

.finish {
  @apply absolute right-0 w-2 h-[102px] bg-white mr-10
}

.line-wrapper {
  background-color: rgba(37, 133, 32, 0.753);
  border: 1px;
  border-bottom: solid;
}
</style>
