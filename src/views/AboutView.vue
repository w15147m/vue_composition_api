<template>
    <div class="text-center">
        <h1>Composition api Counter App</h1>
        <div class="d-flex gap-2 align-items-center align-content-center justify-content-center">
            <button @click="counterDecrement()" class="btn btn-primary">-</button>
            <span class="fs-1">{{counter}}</span>
            <button @click="counterIncrement()" class="btn btn-primary">+</button>
        </div>
    </div>
    </template>
    
    <script>
    export default {
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
    </script>
    