import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export type Theme = 'light' | 'dark' | 'auto'

/**
 * Store para gerenciar tema da aplicação
 * Persiste no localStorage e sincroniza com preferência do sistema
 */
export const useThemeStore = defineStore('theme', () => {
    const STORAGE_KEY = 'app_theme'

    // Estado
    const theme = ref<Theme>('light')
    const systemPrefersDark = ref(false)

    // Computed
    const isDark = computed(() => {
        if (theme.value === 'auto') {
            return systemPrefersDark.value
        }
        return theme.value === 'dark'
    })

    const themeIcon = computed(() => {
        if (theme.value === 'auto') return '🌓'
        return isDark.value ? '🌙' : '☀️'
    })

    /**
     * Aplica o tema no documento
     */
    function applyTheme() {
        const root = document.documentElement
        root.classList.toggle('dark', isDark.value)
    }

    /**
     * Define o tema
     */
    function setTheme(newTheme: Theme) {
        theme.value = newTheme
        localStorage.setItem(STORAGE_KEY, newTheme)
        applyTheme()
    }

    /**
     * Alterna entre light e dark
     */
    function toggleTheme() {
        if (theme.value === 'auto') {
            setTheme('light')
        } else {
            setTheme(isDark.value ? 'light' : 'dark')
        }
    }

    /**
     * Define tema como light
     */
    function setLight() {
        setTheme('light')
    }

    /**
     * Define tema como dark
     */
    function setDark() {
        setTheme('dark')
    }

    /**
     * Define tema como auto (segue sistema)
     */
    function setAuto() {
        setTheme('auto')
    }

    /**
     * Restaura tema do localStorage
     */
    function restoreTheme() {
        const saved = localStorage.getItem(STORAGE_KEY) as Theme
        if (saved && ['light', 'dark', 'auto'].includes(saved)) {
            theme.value = saved
        } else {
            theme.value = 'auto'
        }
        applyTheme()
    }

    /**
     * Inicializa observador de preferência do sistema
     */
    function initSystemPreferenceWatcher() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

        // Define valor inicial
        systemPrefersDark.value = mediaQuery.matches

        // Observa mudanças
        const handler = (e: MediaQueryListEvent) => {
            systemPrefersDark.value = e.matches
            if (theme.value === 'auto') {
                applyTheme()
            }
        }

        mediaQuery.addEventListener('change', handler)

        // Retorna função de cleanup
        return () => mediaQuery.removeEventListener('change', handler)
    }

    return {
        // State
        theme,
        systemPrefersDark,

        // Computed
        isDark,
        themeIcon,

        // Actions
        setTheme,
        toggleTheme,
        setLight,
        setDark,
        setAuto,
        restoreTheme,
        initSystemPreferenceWatcher,
    }
})
