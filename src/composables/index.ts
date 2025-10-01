/**
 * Arquivo de índice para exportar todos os composables
 *
 * Isso permite importar múltiplos composables de uma vez:
 * import { useCounter, useTheme } from '@/composables'
 */

export { useCounter } from './useCounter'
export { useTheme } from './useTheme'

// Deprecated - use useTheme() ao invés
export { useThemeManager } from './useThemeManager'
