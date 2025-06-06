<script setup lang="ts">
import { Menubar } from 'primevue';

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('has-dark-mode');
}
</script>

<template>
  <Menubar>
    <template #start>
        <h1>Guid Generator</h1>
    </template>
    <template #end>
      <Button @click="toggleDarkMode()">Dark mode</Button>
    </template>
  </Menubar>
</template>
