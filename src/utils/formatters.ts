/**
 * Funções utilitárias para formatação de dados
 */

/**
 * Formata um número como moeda brasileira
 * @param value - Valor numérico
 * @returns String formatada como R$ 1.234,56
 */
export function formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value)
}

/**
 * Formata uma data no padrão brasileiro
 * @param date - Data a ser formatada
 * @param includeTime - Incluir hora?
 * @returns String formatada como DD/MM/YYYY ou DD/MM/YYYY HH:mm
 */
export function formatDate(date: Date | string, includeTime = false): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date

    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }

    if (includeTime) {
        options.hour = '2-digit'
        options.minute = '2-digit'
    }

    return new Intl.DateTimeFormat('pt-BR', options).format(dateObj)
}

/**
 * Formata um CPF
 * @param cpf - CPF sem formatação
 * @returns String formatada como 123.456.789-00
 */
export function formatCPF(cpf: string): string {
    const cleaned = cpf.replace(/\D/g, '')
    return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

/**
 * Formata um CNPJ
 * @param cnpj - CNPJ sem formatação
 * @returns String formatada como 12.345.678/0001-00
 */
export function formatCNPJ(cnpj: string): string {
    const cleaned = cnpj.replace(/\D/g, '')
    return cleaned.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
}

/**
 * Formata um telefone
 * @param phone - Telefone sem formatação
 * @returns String formatada como (11) 98765-4321
 */
export function formatPhone(phone: string): string {
    const cleaned = phone.replace(/\D/g, '')

    if (cleaned.length === 11) {
        return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
    } else if (cleaned.length === 10) {
        return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
    }

    return phone
}

/**
 * Formata um CEP
 * @param cep - CEP sem formatação
 * @returns String formatada como 12345-678
 */
export function formatCEP(cep: string): string {
    const cleaned = cep.replace(/\D/g, '')
    return cleaned.replace(/(\d{5})(\d{3})/, '$1-$2')
}

/**
 * Formata um número com separador de milhares
 * @param value - Valor numérico
 * @returns String formatada como 1.234.567
 */
export function formatNumber(value: number): string {
    return new Intl.NumberFormat('pt-BR').format(value)
}

/**
 * Formata bytes em formato legível
 * @param bytes - Tamanho em bytes
 * @returns String formatada como 1.5 MB
 */
export function formatBytes(bytes: number): string {
    if (bytes === 0) return '0 Bytes'

    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i]
}

/**
 * Trunca um texto com reticências
 * @param text - Texto a ser truncado
 * @param maxLength - Tamanho máximo
 * @returns Texto truncado
 */
export function truncate(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + '...'
}

/**
 * Capitaliza a primeira letra de cada palavra
 * @param text - Texto a ser capitalizado
 * @returns Texto capitalizado
 */
export function capitalize(text: string): string {
    return text
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}
