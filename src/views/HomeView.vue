<template>
<div class="text-center">
    <h1>{{ counterData.counterTitle }}:</h1>
    <div class="d-flex gap-2 align-items-center align-content-center justify-content-center">
        <button @click="counterDecrement()" class="btn btn-primary">-</button>
        <span class="fs-1 px-5 rounded-4 border">{{counterData.counter}} <br> {{ oddOrEven }}</span>
        <button @click="counterIncrement()" class="btn btn-primary">+</button>
    </div>
    <div>
        <h4>Edit Title:</h4>
        <input class="form-control" v-model="counterData.counterTitle" type="text" placeholder="Edit Title">
    </div>
</div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, onUpdated, reactive, ref, watch, } from 'vue';
const counterData = reactive({
    counter: 0,
    counterTitle: "My counter"
})
const oddOrEven = ref("Odd");

onMounted(() => {
    counterData.counterTitle ="mounted";
    
});

onBeforeUnmount(()=>{
   counterData.counterTitle ="before unmount";
});

onUpdated(()=>{
  counterData.counterTitle ="updated";
    
});






watch(()=> counterData.counter, (newValue) => {
    if (newValue % 2 === 0) oddOrEven.value = "Even"
    else oddOrEven.value = "Odd"
})

const counterIncrement = () => {
   counterData.counter++
};

const counterDecrement = () => {
   counterData.counter--
}
</script>


