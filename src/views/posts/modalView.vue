<template>
  <div id="main" class="text-center">
    <h1 class="text-center mt-4">Modals</h1>
    <button @click="showModal" class="btn btn-primary mt-2">Show modal</button>
    <!-- Teleport the modal content to the body -->
    <modalComponent v-if="isShow"  :title="title">
      
    </modalComponent>
  </div>
</template>

<script setup>
import { ref } from "vue";
import modalComponent from "@/components/modalComponent.vue";
const title = ref("My title");
const isShow = ref(false); // Default state is hidden
const showModal = () => {
  isShow.value = true;
};
const hideModal = () => {
  isShow.value = false;
};
</script>

