<template>
<h1>post page</h1>
<ul class="">
    <li v-for="link in links" :key="link.id">
        <router-link  :to="`post/details/${link.id}`"> {{ link.title }}</router-link>
    </li>
   
</ul>
</template>

<script setup>
import { ref } from 'vue';

const links = ref([{
        id: 1,
        title: 'post 1'
    },
    {
        id: 2,
        title: 'post 2'
    },
    {
        id: 3,
        title: 'post 3'
    },

]);
</script>

<style lang="scss" scoped>

</style>
