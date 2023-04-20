<template>
  <div>
    <h3>{{ store.name }}</h3>
    <router-link to="/login">login</router-link>
    <router-link to="/main">main</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useNameStore } from "./store"

const store = useNameStore()
</script>

<style scoped></style>
