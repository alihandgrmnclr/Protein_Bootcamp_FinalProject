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
          <div class="alert__content">
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
      </div>
    </template>
  </Teleport>
</template>

<style lang="scss" scoped>
.alert {
  @apply absolute left-0 right-0 ml-auto mr-auto w-full h-full;
  background: rgba(89, 88, 88, 0.931);

  &__wrapper {
    @apply flex flex-col items-center justify-center h-full w-full;
  }

  &__content{
    @apply flex flex-col justify-center w-[300px] h-[250px] rounded-lg bg-bgsecondary;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  &__description {
    @apply flex flex-col items-center justify-center;
  }

  &__buttons {
    @apply flex justify-center items-center gap-4 mt-4;
  }
}
</style>