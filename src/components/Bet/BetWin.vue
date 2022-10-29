<script setup>
import { betX, getBet } from '../../utils/wallet';

const props = defineProps(["betresult"]);

</script>

<template>

  <div class="betwin">
    <div class="betwin__wrapper">
      <div class="betwin__description">
        <template v-if="props.betresult">
          <p>CONGRATULATIONS</p>
          <p>YOU WON <b>{{ getBet().betAmount * betX }}$</b></p>
        </template>
        <template v-else>
          <p>YOU LOSE!</p>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.betwin {
  @apply absolute left-0 right-0 text-white z-20;

  &__wrapper {
    @apply flex justify-center items-center w-full mt-[40vh];

  }

  &__description {
    @apply flex flex-col items-center justify-center w-[300px] h-[150px] rounded-lg bg-bgsecondary text-xl;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
}
</style>