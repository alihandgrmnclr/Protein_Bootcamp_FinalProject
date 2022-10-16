<script setup>
const props = defineProps([]);

</script>

<template>
    <div class="wrapper">
        <img class="leaderboard-icon" src="https://cdn-icons-png.flaticon.com/512/744/744974.png" alt="">
        <h1>Liderlik Tablosu</h1>
        <div class="rankings">
            <ul>
                <li>1-</li>
                <li>2-</li>
                <li>3-</li>
                <li>4-</li>
                <li>5-</li>
                <li>6-</li>
                <li>7-</li>
                <li>8-</li>
            </ul>
        </div>
    </div>

</template>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.leaderboard-icon {
    width: 64px;
}
</style>