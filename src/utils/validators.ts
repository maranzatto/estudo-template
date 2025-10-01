/**
 * Funções utilitárias para validação de dados
 */

/**
 * Valida se um email é válido
 * @param email - Email a ser validado
 * @returns true se válido
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

/**
 * Valida se um CPF é válido
 * @param cpf - CPF a ser validado (com ou sem formatação)
 * @returns true se válido
 */
export function isValidCPF(cpf: string): boolean {
    const cleaned = cpf.replace(/\D/g, '')

    if (cleaned.length !== 11) return false
    if (/^(\d)\1{10}$/.test(cleaned)) return false

    let sum = 0
    let remainder

    for (let i = 1; i <= 9; i++) {
        sum += parseInt(cleaned.substring(i - 1, i)) * (11 - i)
    }

    remainder = (sum * 10) % 11
    if (remainder === 10 || remainder === 11) remainder = 0
    if (remainder !== parseInt(cleaned.substring(9, 10))) return false

    sum = 0
    for (let i = 1; i <= 10; i++) {
        sum += parseInt(cleaned.substring(i - 1, i)) * (12 - i)
    }

    remainder = (sum * 10) % 11
    if (remainder === 10 || remainder === 11) remainder = 0
    if (remainder !== parseInt(cleaned.substring(10, 11))) return false

    return true
}

/**
 * Valida se um CNPJ é válido
 * @param cnpj - CNPJ a ser validado (com ou sem formatação)
 * @returns true se válido
 */
export function isValidCNPJ(cnpj: string): boolean {
    const cleaned = cnpj.replace(/\D/g, '')

    if (cleaned.length !== 14) return false
    if (/^(\d)\1{13}$/.test(cleaned)) return false

    let length = cleaned.length - 2
    let numbers = cleaned.substring(0, length)
    const digits = cleaned.substring(length)
    let sum = 0
    let pos = length - 7

    for (let i = length; i >= 1; i--) {
        sum += parseInt(numbers.charAt(length - i)) * pos--
        if (pos < 2) pos = 9
    }

    let result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
    if (result !== parseInt(digits.charAt(0))) return false

    length = length + 1
    numbers = cleaned.substring(0, length)
    sum = 0
    pos = length - 7

    for (let i = length; i >= 1; i--) {
        sum += parseInt(numbers.charAt(length - i)) * pos--
        if (pos < 2) pos = 9
    }

    result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
    if (result !== parseInt(digits.charAt(1))) return false

    return true
}

/**
 * Valida se um telefone brasileiro é válido
 * @param phone - Telefone a ser validado
 * @returns true se válido
 */
export function isValidPhone(phone: string): boolean {
    const cleaned = phone.replace(/\D/g, '')
    return cleaned.length === 10 || cleaned.length === 11
}

/**
 * Valida se um CEP é válido
 * @param cep - CEP a ser validado
 * @returns true se válido
 */
export function isValidCEP(cep: string): boolean {
    const cleaned = cep.replace(/\D/g, '')
    return cleaned.length === 8
}

/**
 * Valida se uma URL é válida
 * @param url - URL a ser validada
 * @returns true se válida
 */
export function isValidURL(url: string): boolean {
    try {
        new URL(url)
        return true
    } catch {
        return false
    }
}

/**
 * Valida se uma senha é forte
 * @param password - Senha a ser validada
 * @returns true se forte (mínimo 8 caracteres, 1 maiúscula, 1 minúscula, 1 número)
 */
export function isStrongPassword(password: string): boolean {
    const minLength = password.length >= 8
    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasNumber = /\d/.test(password)

    return minLength && hasUpperCase && hasLowerCase && hasNumber
}

/**
 * Valida se um campo não está vazio
 * @param value - Valor a ser validado
 * @returns true se não vazio
 */
export function isRequired(value: unknown): boolean {
    if (typeof value === 'string') {
        return value.trim().length > 0
    }
    return value !== null && value !== undefined
}

/**
 * Valida tamanho mínimo de string
 * @param value - String a ser validada
 * @param min - Tamanho mínimo
 * @returns true se válido
 */
export function minLength(value: string, min: number): boolean {
    return value.length >= min
}

/**
 * Valida tamanho máximo de string
 * @param value - String a ser validada
 * @param max - Tamanho máximo
 * @returns true se válido
 */
export function maxLength(value: string, max: number): boolean {
    return value.length <= max
}

/**
 * Valida se um número está dentro de um intervalo
 * @param value - Número a ser validado
 * @param min - Valor mínimo
 * @param max - Valor máximo
 * @returns true se válido
 */
export function inRange(value: number, min: number, max: number): boolean {
    return value >= min && value <= max
}
