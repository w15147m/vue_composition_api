<template>
<div class="text-center">
    <h1>option api Counter App</h1>
    <div class="d-flex gap-2 align-items-center align-content-center justify-content-center">
        <button @click="counterDecrement()" class="btn btn-primary">-</button>
        <span class="fs-1">{{counter}}</span>
        <button @click="counterIncrement()" class="btn btn-primary">+</button>
    </div>
</div>
</template>

<script setup>
import {
    ref
} from 'vue';
// //*********composition api with setup script */ 
const counter = ref(0);

const counterIncrement = () => {
    counter.value++
};

const counterDecrement = () => {
    counter.value--
}
</script>

      
<!-- 
        export default {
            // //*********composition api api */ 
            setup() {
                const counter = ref(0);

                const counterIncrement = () => {
                    counter.value++
                };

                const counterDecrement = () => {
                    counter.value--
                }

                return {
                    counter,
                    counterIncrement,
                    counterDecrement
                }
            } **
            **
            ** ** * options api * / 
            data() {
                return {
                    counter: 0,

                }

            },
            methods: {
                counterIncrement() {
                    this.counter++
                },
                counterDecrement() {
                    this.counter--
                }
            }

        } 
         -->
