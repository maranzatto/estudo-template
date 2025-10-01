/**
 * DEPRECATED: Use useTheme() ou useThemeStore() diretamente
 *
 * Este arquivo foi mantido apenas para referência.
 * A funcionalidade foi movida para:
 * - src/stores/theme.ts (Store Pinia)
 * - src/composables/useTheme.ts (Wrapper do composable)
 */

import { useTheme } from './useTheme'

/**
 * @deprecated Use useTheme() ao invés
 */
export function useThemeManager() {
    console.warn('useThemeManager está deprecated. Use useTheme() ao invés.')
    return useTheme()
}
