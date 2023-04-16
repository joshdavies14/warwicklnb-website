<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
    <header>
        <Navbar></Navbar>
    </header>
    <main class="pb-4">
        <RouterView></RouterView>
    </main>
    <div class="container">
        <Footer></Footer>
    </div>
</template>
