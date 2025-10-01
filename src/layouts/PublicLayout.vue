<script setup lang="ts">
// Layout público - 100% conteúdo, sem header/footer
// Usado para: Landing page e outras páginas públicas
</script>

<template>
    <div class="public-layout">
        <!-- Conteúdo ocupa 100% da tela -->
        <slot />
    </div>
</template>

<style scoped>
.public-layout {
    min-height: 100vh;
    width: 100%;
    background: var(--bg-secondary);
}
</style>
