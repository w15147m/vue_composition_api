<template>
<div class="text-center">
    <div>
        <h4 ref="appTitle">{{ counterData.counterTitle }}:</h4>
        <input class="form-control" v-model="counterData.counterTitle" type="text" placeholder="Edit Title" v-autofocus>
    </div>
</div>
</template>

    
<script setup>
import {
    vAutofocus
} from '@/directives/autoFocus';
import { watch } from 'vue';
import {
    reactive,
    ref
} from 'vue';
const counterData = reactive({
    counter: 0,
    counterTitle: "Input autofocus",
});
const appTitle = ref(null);
watch(() => appTitle.value?.offsetWidth, (newValue, oldValue) => {
  console.log(oldValue);
  console.log(newValue);
})
</script>
