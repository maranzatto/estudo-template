<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

function goToLogin() {
    router.push('/login')
}

function goToDashboard() {
    if (userStore.isAuthenticated) {
        router.push('/dashboard')
    } else {
        router.push('/login')
    }
}
</script>

<template>
    <div class="landing-page">
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-content">
                <h1 class="hero-title">🚀 Bem-vindo ao Meu MVP</h1>
                <p class="hero-subtitle">
                    Projeto Vue 3 + TypeScript configurado e pronto para crescer
                </p>
                <p class="hero-description">
                    Uma aplicação moderna com autenticação, dark mode e arquitetura escalável
                </p>

                <div class="hero-buttons">
                    <button @click="goToDashboard" class="btn btn-primary btn-lg">
                        Acessar Dashboard
                    </button>
                    <button @click="goToLogin" class="btn btn-outline btn-lg">Fazer Login</button>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="features">
            <div class="container">
                <h2 class="section-title">✨ Funcionalidades</h2>

                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">🔐</div>
                        <h3>Autenticação</h3>
                        <p>
                            Sistema completo de login com proteção de rotas e persistência de sessão
                        </p>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon">🌓</div>
                        <h3>Dark Mode</h3>
                        <p>
                            Tema claro e escuro com sincronização automática com o sistema
                            operacional
                        </p>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon">⚡</div>
                        <h3>Vue 3 + TypeScript</h3>
                        <p>Tecnologias modernas com type-safety e performance otimizada</p>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon">🎨</div>
                        <h3>Design Responsivo</h3>
                        <p>Interface adaptável para todos os dispositivos e tamanhos de tela</p>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon">📦</div>
                        <h3>Pinia Store</h3>
                        <p>Gerenciamento de estado moderno e intuitivo com Pinia</p>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon">🛣️</div>
                        <h3>Vue Router</h3>
                        <p>Navegação SPA com rotas protegidas e lazy loading</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Tech Stack Section -->
        <section class="tech-stack">
            <div class="container">
                <h2 class="section-title">🛠️ Tecnologias</h2>

                <div class="tech-list">
                    <div class="tech-item">Vue 3</div>
                    <div class="tech-item">TypeScript</div>
                    <div class="tech-item">Vite</div>
                    <div class="tech-item">Pinia</div>
                    <div class="tech-item">Vue Router</div>
                    <div class="tech-item">CSS3</div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="cta">
            <div class="cta-content">
                <h2>Pronto para começar?</h2>
                <p>Faça login e explore todas as funcionalidades</p>
                <button @click="goToLogin" class="btn btn-primary btn-lg">Começar Agora</button>
            </div>
        </section>

        <!-- Footer -->
        <footer class="landing-footer">
            <p>&copy; 2025 Meu MVP - Todos os direitos reservados</p>
        </footer>
    </div>
</template>

<style scoped>
.landing-page {
    min-height: 100vh;
    width: 100%;
    background: var(--bg-secondary);
}

/* Hero Section */
.hero {
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
    padding: 2rem;
}

.hero-content {
    max-width: 800px;
}

.hero-title {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
    animation: slideUp 0.6s ease-out;
}

.hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    opacity: 0.95;
    animation: slideUp 0.6s ease-out 0.1s backwards;
}

.hero-description {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    animation: slideUp 0.6s ease-out 0.2s backwards;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    animation: slideUp 0.6s ease-out 0.3s backwards;
}

.btn-lg {
    padding: 0.875rem 2rem;
    font-size: 1.1rem;
}

/* Features Section */
.features {
    padding: 4rem 2rem;
    background: var(--bg-primary);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--text-primary);
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.feature-card {
    background: var(--bg-secondary);
    padding: 2rem;
    border-radius: var(--radius-lg);
    text-align: center;
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.feature-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.feature-card h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
}

.feature-card p {
    color: var(--text-secondary);
    line-height: 1.6;
}

/* Tech Stack Section */
.tech-stack {
    padding: 4rem 2rem;
    background: var(--bg-secondary);
}

.tech-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}

.tech-item {
    background: var(--bg-primary);
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    font-weight: 600;
    color: var(--text-primary);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* CTA Section */
.cta {
    padding: 4rem 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
}

.cta-content h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.cta-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.95;
}

/* Footer */
.landing-footer {
    background: var(--bg-primary);
    padding: 2rem;
    text-align: center;
    color: var(--text-secondary);
    border-top: 1px solid var(--border-color);
}

/* Animations */
@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2rem;
    }

    .hero-subtitle {
        font-size: 1.2rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .features-grid {
        grid-template-columns: 1fr;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .btn-lg {
        width: 100%;
    }
}
</style>
