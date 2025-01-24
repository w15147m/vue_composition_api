<template>
<h1>postDetails</h1>
<p>Display the content of post with ID of {{ $route.params.id }} here!</p>
<div class="d-flex flex-column">
    <button class="btn btn-info" @click="checkId()">
        Check Id
    </button>
    <button class="btn btn-primary mt-3">
        <router-link to="/posts" class="text-light"> ⟪:-Back</router-link>
    </button>
    <button class="btn btn-primary mt-3" @click="$router.push('/')">
         ⟪:-Back To Home
    </button>
</div>
</template>

<script setup>
import {
    useRoute,
    useRouter
} from 'vue-router';
const route = useRoute();
const router = useRouter();
const checkId = () => {
console.log('Display the content of post with ID:', route.params.id);

}
</script>

<style lang="scss" scoped>

</style>
