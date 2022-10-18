<script setup>
import { onMounted, ref } from "vue"
import { addCash } from "../service/service"
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

const submitCoupon = () => {
    emit("submitBet", true);
}

</script>

<template>
    <div class="bet">
        <div class="bet__select">
            <h1 class="bet-title">Bir at seçiniz</h1>
            <ul class="bet-horse-wrapper">
                <li class="bet-horse" v-for="horse in horses" :key="horse.id">{{horse.name}}
                    <span> <input type="radio" name="horse" :value="horse.name" v-model="selectedHorse"></span>
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
                <p>Oran: <span class="amounts">5.00</span></p>
                <p>Tahmini Kazanç: <span class="amounts">{{betAmount*5}}₺</span> </p>
            </div>
            <div class="submit">
                <button class="submit__btn" @click="submitCoupon">Onayla</button>
            </div>
        </div>
    </div>
    <template v-if="props.cash>2">
        <div class="addCash">
            <button class="addCash-btn">Bakiye Ekle 100₺</button>
        </div>
    </template>
</template>

<style lang="scss" scoped>
.bet {
    font-family: 'Courier New', Courier, monospace;
    @apply flex flex-row w-[600px] gap-[5px];
    box-shadow: 1rem 1rem 2rem hsl(0 0% 0% / 50%);

    &__select {
        @apply flex flex-col w-[350px] font-semibold bg-bgprimary p-[10px];

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
        @apply flex flex-col justify-center items-center bg-bgsecondary p-[10px] w-[350px] gap-[5px];

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

.addCash {
    @apply flex absolute bottom-0 bg-btnprimary;

    .addCash-btn {
        @apply text-white p-[10px];
    }
}
</style>