/**
 * Tipos TypeScript globais da aplicação
 */

// Tipos de resposta da API
export interface ApiResponse<T = unknown> {
    data: T
    message?: string
    success: boolean
    error?: string
}

export interface PaginatedResponse<T> {
    data: T[]
    total: number
    page: number
    perPage: number
    totalPages: number
}

// Tipos de formulário
export interface FormField {
    name: string
    label: string
    type: 'text' | 'email' | 'password' | 'number' | 'textarea' | 'select'
    value: string | number | boolean | null
    placeholder?: string
    required?: boolean
    disabled?: boolean
    options?: SelectOption[]
}

export interface SelectOption {
    label: string
    value: string | number
}

// Tipos de validação
export interface ValidationRule {
    required?: boolean
    minLength?: number
    maxLength?: number
    pattern?: RegExp
    custom?: (value: unknown) => boolean | string
}

export interface ValidationError {
    field: string
    message: string
}

// Tipos de notificação
export type NotificationType = 'success' | 'error' | 'warning' | 'info'

export interface Notification {
    id: string
    type: NotificationType
    title: string
    message: string
    duration?: number
}

// Tipos de navegação
export interface BreadcrumbItem {
    label: string
    to?: string
    active?: boolean
}

// Tipos de tabela
export interface TableColumn {
    key: string
    label: string
    sortable?: boolean
    width?: string
    align?: 'left' | 'center' | 'right'
}

export interface TableRow {
    [key: string]: string | number | boolean | null | undefined
}

// Tipos de modal
export interface ModalOptions {
    title: string
    content: string
    confirmText?: string
    cancelText?: string
    onConfirm?: () => void
    onCancel?: () => void
}

// Tipos de loading
export interface LoadingState {
    isLoading: boolean
    message?: string
}

// Tipos de erro
export interface AppError {
    code: string
    message: string
    details?: unknown
}
