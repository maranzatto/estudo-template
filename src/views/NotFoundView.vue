<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="not-found">
        <div class="content">
            <h1 class="error-code">404</h1>
            <h2>Página não encontrada</h2>
            <p>Desculpe, a página que você está procurando não existe.</p>
            <RouterLink to="/" class="btn-home"> 🏠 Voltar para Home </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.not-found {
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}

.content {
    text-align: center;
    max-width: 500px;
}

.error-code {
    font-size: 8rem;
    font-weight: bold;
    color: #42b883;
    margin: 0;
    line-height: 1;
}

h2 {
    color: #2c3e50;
    font-size: 2rem;
    margin: 1rem 0;
}

p {
    color: #666;
    font-size: 1.1rem;
    margin-bottom: 2rem;
}

.btn-home {
    display: inline-block;
    padding: 0.8rem 2rem;
    background-color: #42b883;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 600;
    transition: all 0.2s ease;
}

.btn-home:hover {
    background-color: #35a372;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(66, 184, 131, 0.3);
}
</style>
