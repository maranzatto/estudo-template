<script setup lang="ts">
// Página About - exemplo de outra view
</script>

<template>
  <div class="about-view">
    <h1>📚 Sobre o Projeto</h1>
    
    <section class="content">
      <h2>Estrutura do Projeto</h2>
      <p>Este projeto foi configurado com as melhores práticas para Vue 3 + TypeScript:</p>
      
      <ul>
        <li><strong>Composition API</strong>: Sintaxe moderna e mais flexível</li>
        <li><strong>TypeScript</strong>: Tipagem estática para código mais seguro</li>
        <li><strong>Pinia</strong>: Gerenciamento de estado simples e eficiente</li>
        <li><strong>Vue Router</strong>: Navegação entre páginas</li>
        <li><strong>Composables</strong>: Lógica reutilizável</li>
      </ul>

      <h2>Próximos Passos</h2>
      <ol>
        <li>Adicione suas próprias views em <code>src/views/</code></li>
        <li>Crie componentes reutilizáveis em <code>src/components/</code></li>
        <li>Configure suas stores em <code>src/stores/</code></li>
        <li>Adicione utilitários em <code>src/utils/</code></li>
      </ol>
    </section>
  </div>
</template>

<style scoped>
.about-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
}

.content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #42b883;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

h2:first-child {
  margin-top: 0;
}

p {
  line-height: 1.6;
  color: #555;
  margin-bottom: 1rem;
}

ul, ol {
  padding-left: 2rem;
  line-height: 1.8;
  color: #555;
}

li {
  margin-bottom: 0.5rem;
}

code {
  background-color: #f0f0f0;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9em;
  color: #e83e8c;
}
</style>
