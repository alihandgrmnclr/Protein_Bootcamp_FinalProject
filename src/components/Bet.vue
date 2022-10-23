<script setup>
import { ref } from "vue"
import { betX, getLocalWallet, saveBet, saveLocalWallet, setDefault } from "../service/service"
const props = defineProps(["horses", "cash", "bet"])

const selectedHorse = ref("");
const betAmount = ref(1);

// bahis tutarı 1'den küçük olamaz bakiyeden büyük olamaz
const checkAmount = () => {
    if (betAmount.value > props.cash) {
        betAmount.value = props.cash;
    } else if (betAmount.value < 1) {
        betAmount.value = 1;
    }
}

const emit = defineEmits(["submitBet"])

const setDefaultValues = () => {
    setDefault();
    window.location.reload();
}

const submitCoupon = () => {
    emit("submitBet", betAmount.value, selectedHorse.value);
    const cash = getLocalWallet() - betAmount.value;
    saveLocalWallet(cash);
    saveBet(betAmount.value, selectedHorse.value);
}

</script>

<template>
    <div class="bet">
        <div class="bet__select">
            <h1 class="bet-title">Bir at seciniz</h1>
            <ul class="bet-horse-wrapper">
                <li class="bet-horse" v-for="horse in horses" :key="horse.id"><label
                        :for="horse.id">{{horse.name}}</label>
                    <span> <input type="radio" :id="horse.id" name="horse" :value="horse.name"
                            v-model="selectedHorse"></span>
                </li>
            </ul>
        </div>
        <div class="bet__checkout">
            <div class="bet-cash">
                <h1 class="title">Bakiyeniz</h1>
                <p class="balance">{{props.cash}}₺</p>
            </div>
            <div class="hr">
                <hr>
            </div>
            <div class="bet-coupon">
                <p>Seçilen At: <span class="amounts">{{selectedHorse}}</span></p>
                <span>Bahis Tutarı: <input class="bet-amount" type="number" v-model="betAmount"
                        @input="checkAmount"></span>
                <p>Oran: <span class="amounts">{{betX}}x</span></p>
                <p>Tahmini Kazanç: <span class="amounts">{{betAmount*10}}₺</span> </p>
            </div>
            <template v-if="selectedHorse.length>1">
                <div class="submit">
                    <button class="submit__btn" @click="submitCoupon">Onayla</button>
                </div>
            </template>
        </div>
    </div>
    <template v-if="props.cash">
        <div class="restart">
            <div class="restart-btn-wrapper">
                <button class="restart-btn" @click="setDefaultValues"><img class="restart-icon"
                        src="https://cdn-icons-png.flaticon.com/512/5565/5565918.png" alt=""></button>
            </div>
            <div class="restart-description">
                <span class="restart-game">Oyunu baştan başlat. Bakiyeniz 100₺'ye döner ve ilerlemeniz sıfırlanır</span>
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

            .bet-coupon {}
        }

        .amounts {
            @apply font-black;
        }

        .submit {
            @apply flex justify-center bg-btnprimary text-white rounded-[10px];

            &__btn {
                @apply text-white p-[10px] w-full;
            }
        }
    }

    .hr {
        @apply bg-black w-full;
    }
}

.restart {
    @apply flex flex-col items-center justify-center absolute bottom-0 text-white bg-btnprimary p-5 h-[70px];
    
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