<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PublicLayout from '@/layouts/PublicLayout.vue'

const route = useRoute()

// Determina qual layout usar baseado na meta da rota
const currentLayout = computed(() => {
  return route.meta.layout === 'public' ? PublicLayout : DefaultLayout
})
</script>

<template>
  <component :is="currentLayout">
    <RouterView />
  </component>
</template>

<style>
/* Estilos globais */
:root {
  --primary-color: #42b883;
  --secondary-color: #35495e;
  --text-color: #2c3e50;
  --bg-color: #f5f5f5;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--bg-color);
}

.app {
  max-width: 800px;
  max-height: 100vh;
  margin: 0 auto;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 2rem;
}

h1 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.subtitle {
  color: var(--secondary-color);
  font-size: 1.1rem;
}

main {
  /* background: white; */
  padding: 2rem;
  border-radius: 8px;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */
}

.info {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 6px;
  border-left: 4px solid var(--primary-color);
}

.info h2 {
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.info ul {
  padding-left: 1.5rem;
}

.info li {
  margin-bottom: 0.5rem;
}

code {
  background-color: #f0f0f0;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9em;
}

footer {
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
  color: #666;
  font-size: 0.9rem;
}

.tip {
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #fff3cd;
  border-left: 4px solid #ffc107;
  border-radius: 4px;
}

.tip h3 {
  color: #856404;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.tip p {
  color: #856404;
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.tip p:last-child {
  margin-bottom: 0;
}
</style>
