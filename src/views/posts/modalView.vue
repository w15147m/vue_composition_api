<template>
<div class=" text-center">
    <h1 class="text-center mt-4">Modals</h1>
    <button @click="showModal()" class="btn btn-primary mt-2">Show modal</button>
    <p v-if="isShow" class=" bg-gradient rounded shadow m-4 p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ea minus nesciunt sequi dignissimos beatae cumque debitis facilis iure atque ratione soluta impedit optio mollitia laudantium, accusamus fugit rerum excepturi?</p>
    <button @click="hideModal()" class="btn btn-primary mt-2">hide modal</button>
</div>
</template>

<script setup>
import { ref } from 'vue';


const isShow = ref(true);
const showModal = () => {
    isShow.value = true;
}
const hideModal = () => {
    isShow.value = false;
}

</script>

<style>
.modal {
    background: beige;
    padding: 10px;
}
</style>
