import { useThemeStore } from '@/stores/theme'

/**
 * Composable wrapper para a store de tema
 * Facilita o uso do tema em componentes
 *
 * @example
 * const { isDark, toggleTheme } = useTheme()
 */
export function useTheme() {
    const themeStore = useThemeStore()

    return {
        // Estado
        theme: themeStore.theme,
        isDark: themeStore.isDark,
        themeIcon: themeStore.themeIcon,

        // Métodos
        toggleTheme: themeStore.toggleTheme,
        setTheme: themeStore.setTheme,
        setLight: themeStore.setLight,
        setDark: themeStore.setDark,
        setAuto: themeStore.setAuto,
    }
}
