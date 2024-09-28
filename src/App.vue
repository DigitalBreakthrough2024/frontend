<script setup>
import { ref, provide } from 'vue'

const isLeftShown = ref(false)

provide('main', { isLeftShown })
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
