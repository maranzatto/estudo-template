/**
 * Funções utilitárias auxiliares
 */

/**
 * Gera um ID único
 * @returns String com ID único
 */
export function generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Delay assíncrono
 * @param ms - Milissegundos para esperar
 * @returns Promise que resolve após o delay
 */
export function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Debounce - executa função após um delay sem novas chamadas
 * @param fn - Função a ser executada
 * @param delay - Delay em milissegundos
 * @returns Função com debounce
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
    fn: T,
    delay: number,
): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout>

    return function (this: unknown, ...args: Parameters<T>) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => fn.apply(this, args), delay)
    }
}

/**
 * Throttle - limita execução de função a uma vez por intervalo
 * @param fn - Função a ser executada
 * @param limit - Intervalo mínimo em milissegundos
 * @returns Função com throttle
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
    fn: T,
    limit: number,
): (...args: Parameters<T>) => void {
    let inThrottle: boolean

    return function (this: unknown, ...args: Parameters<T>) {
        if (!inThrottle) {
            fn.apply(this, args)
            inThrottle = true
            setTimeout(() => (inThrottle = false), limit)
        }
    }
}

/**
 * Copia texto para a área de transferência
 * @param text - Texto a ser copiado
 * @returns Promise que resolve quando copiado
 */
export async function copyToClipboard(text: string): Promise<void> {
    try {
        await navigator.clipboard.writeText(text)
    } catch {
        // Fallback para navegadores antigos
        const textArea = document.createElement('textarea')
        textArea.value = text
        textArea.style.position = 'fixed'
        textArea.style.left = '-999999px'
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
    }
}

/**
 * Remove acentos de uma string
 * @param text - Texto com acentos
 * @returns Texto sem acentos
 */
export function removeAccents(text: string): string {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

/**
 * Gera slug a partir de um texto
 * @param text - Texto a ser convertido
 * @returns Slug (ex: "meu-texto-aqui")
 */
export function slugify(text: string): string {
    return removeAccents(text)
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '')
}

/**
 * Agrupa array de objetos por uma chave
 * @param array - Array a ser agrupado
 * @param key - Chave para agrupar
 * @returns Objeto com arrays agrupados
 */
export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
    return array.reduce(
        (result, item) => {
            const groupKey = String(item[key])
            if (!result[groupKey]) {
                result[groupKey] = []
            }
            result[groupKey].push(item)
            return result
        },
        {} as Record<string, T[]>,
    )
}

/**
 * Remove duplicatas de um array
 * @param array - Array com possíveis duplicatas
 * @returns Array sem duplicatas
 */
export function unique<T>(array: T[]): T[] {
    return [...new Set(array)]
}

/**
 * Embaralha um array
 * @param array - Array a ser embaralhado
 * @returns Novo array embaralhado
 */
export function shuffle<T>(array: T[]): T[] {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = newArray[i]
        const swapItem = newArray[j]
        if (temp !== undefined && swapItem !== undefined) {
            newArray[i] = swapItem
            newArray[j] = temp
        }
    }
    return newArray
}

/**
 * Pega um item aleatório do array
 * @param array - Array
 * @returns Item aleatório ou undefined se array vazio
 */
export function randomItem<T>(array: T[]): T | undefined {
    if (array.length === 0) return undefined
    return array[Math.floor(Math.random() * array.length)]
}

/**
 * Clona profundamente um objeto
 * @param obj - Objeto a ser clonado
 * @returns Cópia profunda do objeto
 */
export function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj))
}

/**
 * Verifica se dois objetos são iguais (comparação profunda)
 * @param obj1 - Primeiro objeto
 * @param obj2 - Segundo objeto
 * @returns true se iguais
 */
export function isEqual(obj1: unknown, obj2: unknown): boolean {
    return JSON.stringify(obj1) === JSON.stringify(obj2)
}

/**
 * Converte query string em objeto
 * @param queryString - Query string (ex: "?name=John&age=30")
 * @returns Objeto com os parâmetros
 */
export function parseQueryString(queryString: string): Record<string, string> {
    const params = new URLSearchParams(queryString)
    const result: Record<string, string> = {}

    params.forEach((value, key) => {
        result[key] = value
    })

    return result
}

/**
 * Converte objeto em query string
 * @param obj - Objeto com parâmetros
 * @returns Query string
 */
export function toQueryString(
    obj: Record<string, string | number | boolean | null | undefined>,
): string {
    const params = new URLSearchParams()

    Object.entries(obj).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
            params.append(key, String(value))
        }
    })

    return params.toString()
}
