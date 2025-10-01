import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/**
 * Interface para o usuário
 */
export interface User {
  id: number
  name: string
  email: string
  avatar?: string
}

/**
 * Store de usuário
 * Gerencia autenticação e dados do usuário logado
 */
export const useUserStore = defineStore('user', () => {
  // Estado
  const user = ref<User | null>(null)
  const isAuthenticated = ref(false)
  const token = ref<string | null>(null)

  // Computed
  const userName = computed(() => user.value?.name || 'Visitante')
  const userInitials = computed(() => {
    if (!user.value?.name) return '?'
    
    const names = user.value.name.split(' ').filter(n => n.length > 0)
    if (names.length === 0) return '?'
    
    const firstName = names[0]
    const firstInitial = firstName?.[0]
    if (!firstInitial) return '?'
    
    if (names.length > 1) {
      const lastName = names[names.length - 1]
      const lastInitial = lastName?.[0]
      if (lastInitial) {
        return `${firstInitial}${lastInitial}`.toUpperCase()
      }
    }
    
    return firstInitial.toUpperCase()
  })

  // Actions
  function login(userData: User, authToken: string) {
    user.value = userData
    token.value = authToken
    isAuthenticated.value = true
    
    // Salvar no localStorage (opcional)
    localStorage.setItem('user', JSON.stringify(userData))
    localStorage.setItem('token', authToken)
  }

  function logout() {
    user.value = null
    token.value = null
    isAuthenticated.value = false
    
    // Limpar localStorage
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  function updateUser(userData: Partial<User>) {
    if (user.value) {
      user.value = { ...user.value, ...userData }
      localStorage.setItem('user', JSON.stringify(user.value))
    }
  }

  // Tentar restaurar sessão do localStorage
  function restoreSession() {
    const savedUser = localStorage.getItem('user')
    const savedToken = localStorage.getItem('token')
    
    if (savedUser && savedToken) {
      user.value = JSON.parse(savedUser)
      token.value = savedToken
      isAuthenticated.value = true
    }
  }

  return {
    // State
    user,
    isAuthenticated,
    token,
    
    // Computed
    userName,
    userInitials,
    
    // Actions
    login,
    logout,
    updateUser,
    restoreSession
  }
})
