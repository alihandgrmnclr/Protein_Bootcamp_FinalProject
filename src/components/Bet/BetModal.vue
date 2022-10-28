<script setup>
import { clickSound } from '../../utils/sounds';
import ButtonComp from '../ButtonComp.vue';


const props = defineProps(["isModalDisplay", "bet", "selected"]);
const emits = defineEmits(["accepted"]);

const acceptBet = () => {
  emits("accepted", true);
};
const declineBet = () => {
  emits("accepted", false)
};


</script>

<template>
  <Teleport to="#modal">
    <template v-if="props.isModalDisplay">
      <div class="alert">
        <div class="alert__wrapper">
          <div class="alert__description">
            <p>Bet Amount: <b>{{ props.bet }}$</b></p>
            <p>Selected Horse: <b>{{ props.selected }}</b> </p>
            <p>Do you agree to accept bet?</p>
          </div>
          <div class="alert__buttons">
            <ButtonComp @click="acceptBet(), clickSound()" :text="'Accept'"></ButtonComp>
            <ButtonComp @click="declineBet(), clickSound()" :text="'Decline'"></ButtonComp>
          </div>
        </div>
      </div>
    </template>
  </Teleport>
</template>

<style lang="scss" scoped>
.alert {
  @apply absolute left-0 right-0 ml-auto mr-auto mt-[40vh] w-[350px] h-[200px] bg-zinc-300;

  &__wrapper {
    @apply flex flex-col items-center justify-center h-full w-full;
  }

  &__description {
    @apply flex flex-col items-center justify-center;
  }

  &__buttons {
    @apply flex justify-center items-center gap-4 mt-4;
  }
}
</style>