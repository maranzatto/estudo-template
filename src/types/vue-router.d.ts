/**
 * Extensão de tipos do Vue Router
 * Permite adicionar propriedades customizadas ao meta das rotas
 */

import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // Título da página
    title?: string
    
    // Requer autenticação?
    requiresAuth?: boolean
    
    // Roles permitidas
    roles?: string[]
    
    // Layout customizado ('public' | 'default' | 'admin')
    layout?: 'public' | 'default' | 'admin' | string
    
    // Ícone da rota (para menus)
    icon?: string
    
    // Esconder no menu?
    hideInMenu?: boolean
  }
}
