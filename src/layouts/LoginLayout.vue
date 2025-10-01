<script setup lang="ts">
// Layout para login - Com fundo gradiente e footer
// Usado para: Login, registro, recuperação de senha
</script>

<template>
    <div class="login-layout">
        <!-- Conteúdo Principal -->
        <main class="login-main">
            <slot />
        </main>

        <!-- Footer Minimalista -->
        <footer class="login-footer">
            <p>&copy; 2025 Meu MVP - Todos os direitos reservados</p>
        </footer>
    </div>
</template>

<style scoped>
.login-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    position: relative;
    overflow: hidden;
}

/* Efeito de fundo animado */
.login-layout::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: moveBackground 20s linear infinite;
    pointer-events: none;
}

@keyframes moveBackground {
    0% {
        transform: translate(0, 0);
    }

    100% {
        transform: translate(50px, 50px);
    }
}

.login-main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    position: relative;
    z-index: 1;
}

.login-footer {
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    color: white;
    padding: 1rem;
    text-align: center;
    position: relative;
    z-index: 1;
}

.login-footer p {
    margin: 0;
    font-size: 0.85rem;
    opacity: 0.9;
}

/* Responsividade */
@media (max-width: 768px) {
    .login-main {
        padding: 1rem;
    }
}
</style>
