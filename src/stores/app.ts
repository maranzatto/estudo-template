import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/**
 * Store principal da aplicação
 * Gerencia estado global como tema, configurações, etc.
 */
export const useAppStore = defineStore('app', () => {
    // Estado
    const appName = ref('Meu MVP')
    const version = ref('1.0.0')
    const isLoading = ref(false)
    const theme = ref<'light' | 'dark'>('light')

    // Computed
    const isDarkMode = computed(() => theme.value === 'dark')
    const appInfo = computed(() => `${appName.value} v${version.value}`)

    // Actions
    function toggleTheme() {
        theme.value = theme.value === 'light' ? 'dark' : 'light'
    }

    function setLoading(loading: boolean) {
        isLoading.value = loading
    }

    function setTheme(newTheme: 'light' | 'dark') {
        theme.value = newTheme
    }

    return {
        // State
        appName,
        version,
        isLoading,
        theme,

        // Computed
        isDarkMode,
        appInfo,

        // Actions
        toggleTheme,
        setLoading,
        setTheme,
    }
})
