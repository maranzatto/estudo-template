/**
 * Constantes da aplicação
 * Centralize valores fixos aqui para facilitar manutenção
 */

// Informações da aplicação
export const APP_NAME: string = 'Meu MVP'
export const APP_VERSION: string = '1.0.0'
export const APP_DESCRIPTION: string = 'Aplicação Vue 3 + TypeScript'

// URLs da API
export const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'
export const API_TIMEOUT: number = 30000 // 30 segundos

// Configurações de paginação
export const DEFAULT_PAGE_SIZE: number = 10
export const PAGE_SIZE_OPTIONS: readonly number[] = [10, 25, 50, 100] as const

// Configurações de data
export const DATE_FORMAT: string = 'DD/MM/YYYY'
export const DATETIME_FORMAT: string = 'DD/MM/YYYY HH:mm'
export const TIME_FORMAT: string = 'HH:mm'

// Configurações de validação
export const MIN_PASSWORD_LENGTH: number = 8
export const MAX_PASSWORD_LENGTH: number = 50
export const MIN_USERNAME_LENGTH: number = 3
export const MAX_USERNAME_LENGTH: number = 30

// Configurações de upload
export const MAX_FILE_SIZE: number = 5 * 1024 * 1024 // 5MB
export const ALLOWED_IMAGE_TYPES: readonly string[] = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
] as const
export const ALLOWED_DOCUMENT_TYPES: readonly string[] = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
] as const

// Mensagens padrão
export const MESSAGES = {
    SUCCESS: {
        SAVE: 'Dados salvos com sucesso!',
        DELETE: 'Item excluído com sucesso!',
        UPDATE: 'Dados atualizados com sucesso!',
        CREATE: 'Item criado com sucesso!',
    },
    ERROR: {
        GENERIC: 'Ocorreu um erro. Tente novamente.',
        NETWORK: 'Erro de conexão. Verifique sua internet.',
        NOT_FOUND: 'Item não encontrado.',
        UNAUTHORIZED: 'Você não tem permissão para esta ação.',
        VALIDATION: 'Verifique os campos do formulário.',
    },
    CONFIRM: {
        DELETE: 'Tem certeza que deseja excluir?',
        CANCEL: 'Tem certeza que deseja cancelar?',
        LEAVE: 'Você tem alterações não salvas. Deseja sair mesmo assim?',
    },
} as const

// Status HTTP
export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
}

// Cores do tema
export const COLORS = {
    PRIMARY: '#42b883',
    SECONDARY: '#35495e',
    SUCCESS: '#4caf50',
    ERROR: '#f44336',
    WARNING: '#ff9800',
    INFO: '#2196f3',
}

// Breakpoints responsivos
export const BREAKPOINTS = {
    XS: 0,
    SM: 576,
    MD: 768,
    LG: 992,
    XL: 1200,
    XXL: 1400,
}

// Duração de animações (ms)
export const ANIMATION_DURATION = {
    FAST: 150,
    NORMAL: 300,
    SLOW: 500,
}

// Configurações de localStorage
export const STORAGE_KEYS = {
    TOKEN: 'auth_token',
    USER: 'user_data',
    THEME: 'app_theme',
    LANGUAGE: 'app_language',
}

// Regex patterns
export const PATTERNS = {
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE: /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/,
    CPF: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    CNPJ: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
    CEP: /^\d{5}-?\d{3}$/,
    URL: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
}
