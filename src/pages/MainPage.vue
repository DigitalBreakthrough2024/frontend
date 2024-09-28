<script setup>
import { inject } from 'vue'
import Header from '../components/Header.vue'
import MainVideos from '../components/MainVideos.vue'
</script>

<template>
  <Header />

  <main class="flex">
    <MainVideos />
  </main>
</template>
