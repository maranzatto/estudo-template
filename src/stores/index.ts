/**
 * Arquivo de índice para exportar todas as stores
 * Facilita a importação: import { useAppStore, useUserStore } from '@/stores'
 */

export { useCounterStore } from './counter'
export { useAppStore } from './app'
export { useUserStore } from './user'
export { useThemeStore } from './theme'

// Types
export type { User } from './user'
export type { Theme } from './theme'
