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
  await new Promise(resolve => setTimeout(resolve, 500))
  
  // Verifica credenciais (admin / 1234)
  if (username.value === 'admin' && password.value === '1234') {
    // Login bem-sucedido
    userStore.login(
      {
        id: 1,
        name: 'Administrador',
        email: 'admin@mvp.com',
        avatar: '👤'
      },
      'fake-jwt-token-123'
    )
    
    // Redireciona para a página que tentou acessar ou home
    const redirect = router.currentRoute.value.query.redirect as string
    router.push(redirect || '/')
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
  <div class="w-full flex items-center justify-center">
    <div class="w-full max-w-md">
      <!-- Card de Login -->
      <div class="card animate-slide-up">
        <!-- Header -->
        <div class="text-center mb-6">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            🔐 Login
          </h1>
          <p class="text-gray-600 dark:text-gray-400">
            Bem-vindo ao Meu MVP
          </p>
        </div>

        <!-- Formulário -->
        <form @submit.prevent="handleLogin" class="space-y-4">
          <!-- Campo de usuário -->
          <div>
            <label for="username" class="label">
              Usuário
            </label>
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

          <!-- Campo de senha -->
          <div>
            <label for="password" class="label">
              Senha
            </label>
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

          <!-- Mensagem de erro -->
          <div v-if="error" class="alert alert-error">
            ⚠️ {{ error }}
          </div>

          <!-- Botão de login -->
          <button 
            type="submit" 
            class="btn btn-primary w-full"
            :disabled="isLoading"
          >
            <span v-if="!isLoading">Entrar</span>
            <span v-else class="flex items-center justify-center gap-2">
              <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Entrando...
            </span>
          </button>
        </form>

        <!-- Informações de teste -->
        <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
          <p class="font-semibold text-blue-900 dark:text-blue-300 mb-2">
            🔑 Credenciais de teste:
          </p>
          <p class="text-sm text-blue-800 dark:text-blue-400">
            <strong>Usuário:</strong> admin
          </p>
          <p class="text-sm text-blue-800 dark:text-blue-400">
            <strong>Senha:</strong> 1234
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
