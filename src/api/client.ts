/**
 * Cliente HTTP para comunicação com a API
 * Baseado em fetch nativo com funcionalidades extras
 */

import { apiConfig } from '@/config'
import type { ApiResponse } from '@/types'

// Tipo para as opções de requisição
interface RequestOptions extends RequestInit {
  params?: Record<string, string | number | boolean | null | undefined>
}

/**
 * Cliente HTTP customizado
 */
class ApiClient {
  private baseURL: string
  private timeout: number
  private defaultHeaders: Record<string, string>

  constructor() {
    this.baseURL = apiConfig.baseURL
    this.timeout = apiConfig.timeout
    this.defaultHeaders = apiConfig.headers
  }

  /**
   * Pega o token de autenticação do localStorage
   */
  private getAuthToken(): string | null {
    return localStorage.getItem('auth_token')
  }

  /**
   * Monta os headers da requisição
   */
  private buildHeaders(customHeaders?: Record<string, string>): Record<string, string> {
    const headers = { ...this.defaultHeaders, ...customHeaders }
    
    const token = this.getAuthToken()
    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }
    
    return headers
  }

  /**
   * Monta a URL com query params
   */
  private buildURL(endpoint: string, params?: Record<string, string | number | boolean | null | undefined>): string {
    const url = new URL(endpoint, this.baseURL)
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          url.searchParams.append(key, String(value))
        }
      })
    }
    
    return url.toString()
  }

  /**
   * Faz a requisição HTTP
   */
  private async request<T>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<ApiResponse<T>> {
    const { params, headers: customHeaders, ...fetchOptions } = options
    
    const url = this.buildURL(endpoint, params)
    const headers = this.buildHeaders(customHeaders as Record<string, string>)

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), this.timeout)

      const response = await fetch(url, {
        ...fetchOptions,
        headers,
        signal: controller.signal
      })

      clearTimeout(timeoutId)

      const data = await response.json()

      if (!response.ok) {
        throw {
          status: response.status,
          message: data.message || 'Erro na requisição',
          data
        }
      }

      return {
        data,
        success: true,
        message: data.message
      }
    } catch (error: unknown) {
      console.error('API Error:', error)
      
      return {
        data: null as T,
        success: false,
        error: error instanceof Error ? error.message : 'Erro ao conectar com o servidor'
      }
    }
  }

  /**
   * GET request
   */
  async get<T>(endpoint: string, params?: Record<string, string | number | boolean | null | undefined>): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'GET', params })
  }

  /**
   * POST request
   */
  async post<T>(endpoint: string, data?: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  /**
   * PUT request
   */
  async put<T>(endpoint: string, data?: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data)
    })
  }

  /**
   * PATCH request
   */
  async patch<T>(endpoint: string, data?: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data)
    })
  }

  /**
   * DELETE request
   */
  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' })
  }

  /**
   * Upload de arquivo
   */
  async upload<T>(endpoint: string, file: File, fieldName = 'file'): Promise<ApiResponse<T>> {
    const formData = new FormData()
    formData.append(fieldName, file)

    return this.request<T>(endpoint, {
      method: 'POST',
      body: formData,
      headers: {} // Remove Content-Type para o browser definir automaticamente
    })
  }
}

// Exporta uma instância única (singleton)
export const apiClient = new ApiClient()
