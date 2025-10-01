/**
 * Configurações centralizadas da aplicação
 */

export * from './constants'

// Configuração do ambiente
export const isDevelopment = import.meta.env.DEV
export const isProduction = import.meta.env.PROD

// Configuração da API
export const apiConfig = {
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
}

// Configuração de features (feature flags)
export const features = {
    enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    enableDebug: import.meta.env.DEV,
    enableMockData: import.meta.env.VITE_ENABLE_MOCK === 'true',
}
