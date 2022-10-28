<script setup>
import { ref } from "vue"
import { betX, getLocalWallet, saveBet, saveLocalWallet, setDefault } from "../../utils/wallet"
import { clickSound } from "../../utils/sounds"
import ButtonComp from "../ButtonComp.vue";
import BetModal from "../Bet/BetModal.vue";

const props = defineProps(["horses", "cash", "bet"])
const emit = defineEmits(["submitBet"])

const selectedHorse = ref("");
const betAmount = ref(1);
const isModalDisplay = ref(false);
const isBetAccepted = ref(false);

const checkAmount = () => { // checking the bet amount (depends on the cash)
    if (betAmount.value >= props.cash) {   
        betAmount.value = props.cash;
    } else if (betAmount.value < 1) {
        betAmount.value = getLocalWallet() - ( getLocalWallet() - 1 );
    } else if (!props.cash) {
        betAmount.value = 0;
    }
    return;
};

const setDefaultValues = () => {    // setting the default values
    setDefault(10);
    window.location.reload();
    return;
};

const isModalOpen = () =>{
    isModalDisplay.value = true;
    return;
};

const submitCoupon = (isAccepted) => {
    
    isModalDisplay.value = false;
    if (getLocalWallet() < 1) return alert("GAME OVER");
    if (!isAccepted) return; 
    
    emit("submitBet", betAmount.value, selectedHorse.value);
    
    const cash = getLocalWallet() - betAmount.value;
    saveLocalWallet(cash);
    saveBet(betAmount.value, selectedHorse.value);
    isBetAccepted.value = true;
    return;
}

</script>

<template>
    <BetModal
      :isModalDisplay="isModalDisplay"
      :bet="betAmount"
      :selected="selectedHorse"
      @accepted="submitCoupon"></BetModal>
    <div class="bet">
        <div class="bet__select">
            <h1 class="bet-title">Select a horse</h1>
            <ul class="bet-horse-wrapper">
                <li class="bet-horse" v-for="horse in horses" :key="horse.id">
                    <label :for="horse.id">{{ horse.name }}</label>
                    <span>
                        <input
                          type="radio"
                          :id="horse.id"
                          name="horse"
                          :value="horse.name"
                          v-model="selectedHorse">
                    </span>
                </li>
            </ul>
        </div>
        <div class="bet__checkout">
            <div class="bet-cash">
                <h1 class="title">Your Cash</h1>
                <p class="balance">{{ getLocalWallet() }}$</p>
            </div>
            <div class="hr">
                <hr>
            </div>
            <div class="bet-coupon">
                <p class="details">Selected Horse: <span class="amounts">{{ selectedHorse }}</span></p>
                <span>Bet Amount: <input
                  class="bet-amount"
                  type="number"
                  v-model="betAmount"
                  @focusout="checkAmount"
                  ></span>
                <p class="details">Bet Rate: <span class="amounts">{{ betX }}x</span></p>
                <p class="details">Claim Reward: <span class="amounts">{{ betAmount * 10 }}$</span> </p>
            </div>
            <template v-if="selectedHorse.length > 1">
                <div class="submit">
                      <ButtonComp
                        :text="'Accept'"
                        class="submit__btn"
                        @click="isModalOpen(), clickSound()"></ButtonComp>
                </div>
            </template>
        </div>
    </div>
    <template v-if="props.cash < 1 || !props.cash ">
        <div class="restart">
            <div class="restart-btn-wrapper">
                <button
                  class="restart-btn"
                  @click="setDefaultValues"><img
                  class="restart-icon"
                  src="https://cdn-icons-png.flaticon.com/512/5565/5565918.png"
                  alt="restart"></button>
            </div>
            <div class="restart-description">
                <span class="restart-game">Restart the game. Your balance will return to 10$ and your progress will be reset</span>
            </div>
        </div>
    </template>
</template>

<style lang="scss" scoped>
.bet {
    @apply flex flex-col sm:flex-row sm:w-[600px] gap-[5px] sm:h-[300px] items-center mb-20 sm:mb-1;
    box-shadow: 1rem 1rem 2rem hsl(0 0% 0% / 50%);

    &__select {
        @apply flex flex-col justify-center h-full w-[350px] font-semibold bg-bgprimary p-[10px];

        .bet-title {
            @apply text-[28px] text-white;
        }

        .bet-horse-wrapper {
            @apply flex flex-col items-center justify-center w-full;
        }

        .bet-horse {
            @apply flex justify-between w-full text-black border-b border-black;
        }
    }

    &__checkout {
        @apply flex flex-col h-full justify-center items-center bg-bgsecondary p-[10px] w-[350px] gap-[5px];

        .bet-amount {
            @apply w-[75px] rounded-[5px];
        }

        .bet-cash {
            @apply flex flex-col justify-center items-center;

            .title {
                @apply text-[36px] font-semibold text-white;
            }

            .balance {
                @apply text-[36px] font-semibold text-black;
            }

            .bet-coupon {
                @apply max-w-full max-h-full;
                
                
        }
        
        }
        .amounts {
            @apply font-black;
        }

        .submit {
            @apply flex justify-center;
            
        }
    }

    .hr {
        @apply bg-black w-full;
    }
}

.restart {
    @apply flex flex-col items-center justify-center absolute bottom-0 text-white bg-btnprimary p-5 h-[100px];

    .restart-btn-wrapper {
        .restart-btn {
            @apply text-white w-full;
        }

        .restart-icon {
            @apply w-4 hover:scale-150;
        }
    }
}
</style>