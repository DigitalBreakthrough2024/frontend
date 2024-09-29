<script setup>
import { ref, provide, reactive, onMounted } from "vue";
import axios from "axios";
</script>

<template>
  <suspense><router-view></router-view> </suspense>
</template>

<style scoped></style>
