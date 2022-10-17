<script setup>
import { onMounted, ref } from "vue"
const props = defineProps(["horses", "balance"])

const selectedHorse = ref("");
const betAmount = ref(1);

// bahis tutarı 1'den küçük olamaz bakiyeden büyük olamaz
const checkAmount = () => {
    if (betAmount.value > props.balance) {
        betAmount.value = props.balance;
    } else if (betAmount.value < 1) {
        betAmount.value = 1;
    }
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
                <p class="balance">{{balance}}₺</p>
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
                <button class="submit__btn">Onayla</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bet {
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    flex-direction: row;
    width: 600px;
    gap: 5px;
    

    &__select {
        width: 350px;
        font-size: 20px;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        background-color: #7b584e;
        padding: 10px;

        .bet-title {
            font-size: 28px;
            color: white;

        }

        .bet-horse-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
        }

        .bet-horse {
            width: 100%;
            display: flex;
            justify-content: space-between;
            border-bottom: solid 1px;
            color: black;
        }
    }

    &__checkout {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #9b6753;
        padding: 10px;
        width: 350px;
        gap: 5px;

        .bet-amount {
            width: 75px;
            border-radius: 5px;
        }

        .bet-cash {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .title {
                font-size: 36px;
                font-weight: 600;
                color: white;
            }

            .balance {
                font-size: 36px;
                font-weight: 600;
                color: black;
            }

            .bet-coupon {}
        }
        .amounts {
            font-weight: 900;
        }

        .submit {
            display: flex;
            justify-content: center;
            background-color: #473e3a;
            color: white;
            border-radius: 10px;
            
            &__btn{
                padding: 10px;
                width: 100%;

            }
        }
    }

    .hr {
        background-color: black;
        width: 100%;
    }
}
</style>