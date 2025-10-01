<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

// Estado do formulário
const username = ref('')
const password = ref('')
const error = ref('')
const isLoading = ref(false)

// Função de login
async function handleLogin() {
    error.value = ''

    // Validação básica
    if (!username.value || !password.value) {
        error.value = 'Por favor, preencha todos os campos'
        return
    }

    isLoading.value = true

    // Simula delay de API
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Verifica credenciais (admin / 1234)
    if (username.value === 'admin' && password.value === '1234') {
        // Login bem-sucedido
        userStore.login(
            {
                id: 1,
                name: 'Administrador',
                email: 'admin@mvp.com',
                avatar: '👤',
            },
            'fake-jwt-token-123',
        )

        // Redireciona para a página que tentou acessar ou dashboard
        const redirect = router.currentRoute.value.query.redirect as string
        router.push(redirect || '/dashboard')
    } else {
        // Credenciais inválidas
        error.value = 'Usuário ou senha incorretos'
        password.value = ''
    }

    isLoading.value = false
}

// Permite login com Enter
function handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
        handleLogin()
    }
}
</script>

<template>
    <div class="login-container">
        <div class="login-wrapper">
            <div class="card animate-slide-up">
                <div class="login-header">
                    <h1 class="login-title">🔐 Login</h1>
                    <p class="login-subtitle">Bem-vindo ao Meu MVP</p>
                </div>

                <form @submit.prevent="handleLogin" class="login-form">
                    <div>
                        <label for="username" class="label"> Usuário </label>
                        <input
                            id="username"
                            v-model="username"
                            type="text"
                            class="input"
                            placeholder="Digite seu usuário"
                            :disabled="isLoading"
                            @keypress="handleKeyPress"
                            autocomplete="username"
                        />
                    </div>

                    <div>
                        <label for="password" class="label"> Senha </label>
                        <input
                            id="password"
                            v-model="password"
                            type="password"
                            class="input"
                            placeholder="Digite sua senha"
                            :disabled="isLoading"
                            @keypress="handleKeyPress"
                            autocomplete="current-password"
                        />
                    </div>

                    <div v-if="error" class="alert alert-error">⚠️ {{ error }}</div>

                    <button type="submit" class="btn btn-primary btn-full" :disabled="isLoading">
                        <span v-if="!isLoading">Entrar</span>
                        <span v-else class="loading-spinner">
                            <svg
                                class="spinner-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    class="spinner-circle"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    stroke-width="4"
                                ></circle>
                                <path
                                    class="spinner-fill"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            Entrando...
                        </span>
                    </button>
                </form>

                <div class="credentials-box">
                    <p class="credentials-title">🔑 Credenciais de teste:</p>
                    <p class="credentials-item"><strong>Usuário:</strong> admin</p>
                    <p class="credentials-item"><strong>Senha:</strong> 1234</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.login-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login-wrapper {
    width: 100%;
    max-width: 920px;
}

.card {
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow:
        0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
    background-color: white;
}

:global(.dark) .card {
    background-color: rgb(31 41 55);
}

.login-header {
    text-align: center;
    margin-bottom: 1.5rem;
}

.login-title {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
    color: rgb(17 24 39);
    margin-bottom: 0.5rem;
}

:global(.dark) .login-title {
    color: white;
}

.login-subtitle {
    color: rgb(75 85 99);
}

:global(.dark) .login-subtitle {
    color: rgb(156 163 175);
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.btn-full {
    width: 100%;
}

.loading-spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.spinner-icon {
    animation: spin 1s linear infinite;
    height: 1.25rem;
    width: 1.25rem;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.spinner-circle {
    opacity: 0.25;
}

.spinner-fill {
    opacity: 0.75;
}

.credentials-box {
    margin-top: 1.5rem;
    padding: 1rem;
    background-color: rgb(239 246 255);
    border-radius: 0.5rem;
    border-left-width: 4px;
    border-color: rgb(59 130 246);
}

:global(.dark) .credentials-box {
    background-color: rgb(30 58 138 / 0.2);
}

.credentials-title {
    font-weight: 600;
    color: rgb(30 58 138);
    margin-bottom: 0.5rem;
}

:global(.dark) .credentials-title {
    color: rgb(147 197 253);
}

.credentials-item {
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgb(30 64 175);
}

:global(.dark) .credentials-item {
    color: rgb(147 197 253);
}
</style>
