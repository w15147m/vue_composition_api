<template>
<teleport to="body">
    <div v-if="modelValue" class="modal-overlay" @click.self="hideModal">
        <div class="text-dark modal-content bg-gradient rounded shadow m-4 p-4">
            <h2>{{ title }}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ea minus nesciunt sequi dignissimos beatae cumque debitis facilis iure atque ratione soluta impedit optio mollitia laudantium, accusamus fugit.</p>
            <button @click="clickHandler()" class="btn btn-primary mt-2">Hide modal</button>
        </div>
    </div>
</teleport>
</template>

<script setup>
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: "there is no title"
    }

});
const emit = defineEmits(['update:modelValue']);

const clickHandler = () => {
    emit('update:modelValue', false);
}
</script>

<style>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 500px;
    text-align: center;
}
</style>
