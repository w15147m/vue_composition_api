<template>
<div class="text-center">
    <h1>{{ counterData.counterTitle }}:</h1>
    <div class="d-flex gap-2 align-items-center align-content-center justify-content-center">
        <button @click="counterDecrement()" class="btn btn-primary">-</button>
        <span class="fs-1">{{counterData.counter}}</span>
        <button @click="counterIncrement()" class="btn btn-primary">+</button>
    </div>
    <div>
        <h4>Edit Title:</h4>
        <input class="form-control" v-model="counterData.counterTitle" type="text" placeholder="Edit Title">
    </div>
</div>
</template>

<script setup>
import {
    reactive,
} from 'vue';

const counterData = reactive({
    counter: 0,
    counterTitle: "My counter"
})

const counterIncrement = () => {
   counterData.counter++
};

const counterDecrement = () => {
   counterData.counter--
}
</script>


