<script setup lang="ts">
import CounterDisplay from '@/components/CounterDisplay.vue'
</script>

<template>
  <div class="home-view">
    <section class="hero">
      <h1>🎯 Bem-vindo ao seu MVP</h1>
      <p class="subtitle">Projeto Vue 3 + TypeScript configurado e pronto para crescer</p>
    </section>

    <section class="demo-section">
      <h2>Demonstração: Contador</h2>
      <CounterDisplay :initial-count="5" :step="2" />
    </section>

    <section class="features">
      <h2>✨ Recursos Configurados</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <span class="icon">🗂️</span>
          <h3>Estrutura Organizada</h3>
          <p>Pastas bem definidas para componentes, views, stores e utils</p>
        </div>
        <div class="feature-card">
          <span class="icon">🧭</span>
          <h3>Vue Router</h3>
          <p>Navegação configurada e pronta para novas rotas</p>
        </div>
        <div class="feature-card">
          <span class="icon">🗃️</span>
          <h3>Pinia Store</h3>
          <p>Gerenciamento de estado global configurado</p>
        </div>
        <div class="feature-card">
          <span class="icon">🔧</span>
          <h3>TypeScript</h3>
          <p>Tipagem completa com tipos globais definidos</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  padding: 3rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero .subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.demo-section {
  margin-bottom: 3rem;
}

.demo-section h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.features {
  margin-top: 3rem;
}

.features h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.feature-card .icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.feature-card p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
}
</style>
