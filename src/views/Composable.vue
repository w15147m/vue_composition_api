<template>
<div class="text-center mt-4 ">
    <h1>Composable</h1>
    <h3 class="bg-black text-white p-2 rounded">Full name: {{ name }} {{ lastName }} </h3>
</div>
</template>

<script setup>
import { useFullName } from '@/use/fullName';
 const { name, lastName } = useFullName();
</script>

<style lang="scss" scoped>

</style>
