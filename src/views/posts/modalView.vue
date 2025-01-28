<template>
  <div id="main" class="text-center">
    <h1 class="text-center mt-4">Modals</h1>
    <button @click="showModal" class="btn btn-primary mt-2">Show modal</button>
    <!-- Teleport the modal content to the body -->
    <modalComponent >
      <div class="modal-overlay" v-if="isShow" @click.self="hideModal">
        <div class="text-dark modal-content bg-gradient rounded shadow m-4 p-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ea minus nesciunt sequi dignissimos beatae cumque debitis facilis iure atque ratione soluta impedit optio mollitia laudantium, accusamus fugit.</p>
            <button @click="hideModal" class="btn btn-primary mt-2">Hide modal</button>
        </div>
    </div>
    </modalComponent>
  </div>
</template>

<script setup>
import { ref } from "vue";
import modalComponent from "@/components/modalComponent.vue";

const isShow = ref(false); // Default state is hidden
const showModal = () => {
  isShow.value = true;
};
const hideModal = () => {
  isShow.value = false;
};
</script>

