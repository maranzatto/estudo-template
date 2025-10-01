/**
 * Arquivo de índice da API
 * Centralize todas as chamadas de API aqui
 */

export { apiClient } from './client'

// Exemplo de endpoints organizados por módulo
// Descomente e adapte conforme sua necessidade

/*
// Módulo de autenticação
export const authApi = {
  login: (credentials: { email: string; password: string }) =>
    apiClient.post('/auth/login', credentials),
  
  register: (userData: any) =>
    apiClient.post('/auth/register', userData),
  
  logout: () =>
    apiClient.post('/auth/logout'),
  
  me: () =>
    apiClient.get('/auth/me')
}

// Módulo de usuários
export const usersApi = {
  getAll: (params?: any) =>
    apiClient.get('/users', params),
  
  getById: (id: number) =>
    apiClient.get(`/users/${id}`),
  
  create: (userData: any) =>
    apiClient.post('/users', userData),
  
  update: (id: number, userData: any) =>
    apiClient.put(`/users/${id}`, userData),
  
  delete: (id: number) =>
    apiClient.delete(`/users/${id}`)
}
*/
