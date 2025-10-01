<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import ThemeToggle from '@/components/ThemeToggle.vue'

const router = useRouter()
const userStore = useUserStore()

// Função de logout
function handleLogout() {
  userStore.logout()
  router.push('/login')
}
</script>

<template>
  <div class="default-layout">
    <!-- Header/Navbar -->
    <header class="header">
      <div class="container">
        <div class="logo">
          <RouterLink to="/">🚀 Meu MVP</RouterLink>
        </div>

        <nav class="nav">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/about" class="nav-link">Sobre</RouterLink>

          <div class="user-menu">
            <ThemeToggle />
            <span class="user-name">{{ userStore.userName }}</span>
            <button @click="handleLogout" class="btn-logout">🚪 Sair</button>
          </div>
        </nav>
      </div>
    </header>

    <!-- Conteúdo Principal -->
    <main class="main-content">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 Meu MVP - Feito com ❤️ usando Vue 3 + TypeScript</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.default-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #2c3e50;
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  transition: opacity 0.2s ease;
}

.logo a:hover {
  opacity: 0.8;
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.router-link-active {
  background-color: #42b883;
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
  padding-left: 2rem;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}

.user-name {
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
}

.btn-logout {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-logout:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
}

.btn-logout:active {
  transform: scale(0.95);
}

.main-content {
  flex: 1;
  /* background-color: #f5f5f5; */
  padding: 2rem 0;
}

.footer {
  background-color: #2c3e50;
  color: white;
  padding: 1.5rem 0;
  text-align: center;
}

.footer p {
  margin: 0;
  opacity: 0.8;
}
</style>
