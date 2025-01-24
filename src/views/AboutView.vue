<template>
    <div class="text-center">
      <div>
        <h4>{{ counterData.counterTitle }}:</h4>
        <input class="form-control" v-model="counterData.counterTitle" type="text" placeholder="Edit Title" v-autofocus>
    </div>
    </div>
    </template>
    <script setup>
    import { vAutofocus } from '@/directives/autoFocus';
   import { reactive } from 'vue';
    const counterData = reactive({
    counter: 0,
    counterTitle: "Input autofocus",
    
})
    </script>
    