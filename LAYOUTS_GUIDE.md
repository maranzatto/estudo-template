# 🎨 Guia de Layouts - Sistema de Templates

## 📋 Visão Geral

Sistema flexível de layouts que permite usar diferentes templates para diferentes tipos de páginas.

---

## 🗂️ Layouts Disponíveis

### 1. **DefaultLayout** (Padrão)
**Arquivo**: `src/layouts/DefaultLayout.vue`

**Características**:
- ✅ Header com navegação
- ✅ Menu de usuário
- ✅ Botão de logout
- ✅ Footer completo
- ✅ Fundo padrão

**Usado em**:
- Páginas autenticadas
- Dashboard
- Páginas internas do sistema

**Preview**:
```
┌─────────────────────────────────────┐
│  Header (Logo + Nav + User Menu)   │
├─────────────────────────────────────┤
│                                     │
│         Conteúdo da Página          │
│                                     │
├─────────────────────────────────────┤
│            Footer                   │
└─────────────────────────────────────┘
```

---

### 2. **PublicLayout** (Limpo)
**Arquivo**: `src/layouts/PublicLayout.vue`

**Características**:
- ✅ Design minimalista
- ✅ Fundo gradiente animado
- ✅ Footer simples
- ✅ Sem header/navegação
- ✅ Centralizado verticalmente

**Usado em**:
- Página de login
- Página de registro
- Recuperação de senha
- Landing pages

**Preview**:
```
┌─────────────────────────────────────┐
│                                     │
│                                     │
│      [Conteúdo Centralizado]       │
│                                     │
│                                     │
├─────────────────────────────────────┤
│       Footer Minimalista            │
└─────────────────────────────────────┘
```

---

## 🛠️ Como Usar

### Definir Layout em uma Rota

```typescript
// src/router/index.ts
{
  path: '/login',
  name: 'login',
  component: LoginView,
  meta: {
    title: 'Login',
    requiresAuth: false,
    layout: 'public' // ← Define o layout
  }
}
```

### Layouts Disponíveis

| Valor | Layout | Descrição |
|-------|--------|-----------|
| `'public'` | PublicLayout | Layout limpo para páginas públicas |
| `'default'` ou `undefined` | DefaultLayout | Layout padrão com header/footer |
| `'admin'` | AdminLayout | Layout para área administrativa (futuro) |

---

## 📝 Criar um Novo Layout

### Passo 1: Criar o Arquivo

```vue
<!-- src/layouts/AdminLayout.vue -->
<script setup lang="ts">
// Lógica do layout
</script>

<template>
  <div class="admin-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <!-- Menu lateral -->
    </aside>

    <!-- Conteúdo -->
    <div class="admin-content">
      <header class="admin-header">
        <!-- Header -->
      </header>
      
      <main class="admin-main">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Estilos do layout */
</style>
```

### Passo 2: Registrar no App.vue

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PublicLayout from '@/layouts/PublicLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue' // ← Importar

const route = useRoute()

const currentLayout = computed(() => {
  const layout = route.meta.layout
  
  if (layout === 'public') return PublicLayout
  if (layout === 'admin') return AdminLayout // ← Adicionar
  
  return DefaultLayout
})
</script>

<template>
  <component :is="currentLayout">
    <RouterView />
  </component>
</template>
```

### Passo 3: Usar em uma Rota

```typescript
{
  path: '/admin',
  name: 'admin',
  component: AdminView,
  meta: {
    layout: 'admin' // ← Usar novo layout
  }
}
```

---

## 🎨 Customização de Layouts

### Adicionar Props ao Layout

```vue
<!-- Layout com props -->
<script setup lang="ts">
interface Props {
  showSidebar?: boolean
  theme?: 'light' | 'dark'
}

const props = withDefaults(defineProps<Props>(), {
  showSidebar: true,
  theme: 'light'
})
</script>
```

### Passar Props via Router

```typescript
// Não é possível passar props diretamente via router
// Solução: Usar store ou provide/inject

// Opção 1: Store
const layoutStore = useLayoutStore()
layoutStore.setTheme('dark')

// Opção 2: Provide/Inject
provide('layoutConfig', {
  showSidebar: true,
  theme: 'dark'
})
```

---

## 🔄 Trocar Layout Dinamicamente

### Opção 1: Via Meta da Rota (Recomendado)

```typescript
// Definir na rota
meta: {
  layout: 'public'
}
```

### Opção 2: Via Store

```typescript
// src/stores/layout.ts
export const useLayoutStore = defineStore('layout', () => {
  const currentLayout = ref<'default' | 'public' | 'admin'>('default')
  
  function setLayout(layout: 'default' | 'public' | 'admin') {
    currentLayout.value = layout
  }
  
  return { currentLayout, setLayout }
})

// Usar no componente
const layoutStore = useLayoutStore()
layoutStore.setLayout('public')
```

### Opção 3: Via Query Param

```typescript
// App.vue
const currentLayout = computed(() => {
  const queryLayout = route.query.layout as string
  if (queryLayout === 'public') return PublicLayout
  
  return route.meta.layout === 'public' ? PublicLayout : DefaultLayout
})

// URL: /pagina?layout=public
```

---

## 📱 Layouts Responsivos

### Mobile-First Approach

```vue
<style scoped>
/* Mobile (padrão) */
.layout {
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .layout {
    padding: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .layout {
    padding: 3rem;
  }
}
</style>
```

### Layout Condicional por Dispositivo

```vue
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isMobile = ref(false)

function checkMobile() {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<template>
  <div :class="{ 'mobile-layout': isMobile, 'desktop-layout': !isMobile }">
    <slot />
  </div>
</template>
```

---

## 🎯 Casos de Uso

### 1. Página de Login (PublicLayout)
```typescript
{
  path: '/login',
  meta: { layout: 'public' }
}
```

### 2. Dashboard (DefaultLayout)
```typescript
{
  path: '/dashboard',
  meta: { layout: 'default' } // ou omitir (padrão)
}
```

### 3. Área Admin (AdminLayout)
```typescript
{
  path: '/admin',
  meta: { layout: 'admin' }
}
```

### 4. Landing Page (PublicLayout)
```typescript
{
  path: '/landing',
  meta: { layout: 'public' }
}
```

### 5. Impressão (PrintLayout)
```typescript
{
  path: '/relatorio/print',
  meta: { layout: 'print' }
}
```

---

## 🔧 Troubleshooting

### Problema: Layout não muda
**Causa**: Meta da rota não está definida  
**Solução**: Adicione `layout: 'public'` no meta da rota

### Problema: Estilos conflitando
**Causa**: Estilos globais sobrescrevendo layout  
**Solução**: Use `scoped` nos estilos do layout

### Problema: Layout pisca ao navegar
**Causa**: Componente sendo recriado  
**Solução**: Use `keep-alive` no RouterView

```vue
<component :is="currentLayout">
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</component>
```

---

## 🎨 Exemplos de Layouts

### Minimal Layout (Sem nada)
```vue
<template>
  <div class="minimal-layout">
    <slot />
  </div>
</template>

<style scoped>
.minimal-layout {
  min-height: 100vh;
  background: white;
}
</style>
```

### Print Layout (Para impressão)
```vue
<template>
  <div class="print-layout">
    <slot />
  </div>
</template>

<style scoped>
@media print {
  .print-layout {
    /* Estilos específicos para impressão */
  }
}
</style>
```

### Fullscreen Layout (Tela cheia)
```vue
<template>
  <div class="fullscreen-layout">
    <slot />
  </div>
</template>

<style scoped>
.fullscreen-layout {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
}
</style>
```

---

## 📚 Boas Práticas

### ✅ Faça
- Use layouts para estrutura comum
- Mantenha layouts simples e focados
- Use `scoped` nos estilos
- Documente o propósito de cada layout
- Teste responsividade

### ❌ Evite
- Lógica de negócio nos layouts
- Layouts muito complexos
- Estilos globais que afetam todos os layouts
- Muitos layouts diferentes (mantenha 2-4)

---

## 🚀 Próximos Passos

1. **Criar AdminLayout**
   - Sidebar com menu
   - Header com breadcrumbs
   - Área de conteúdo principal

2. **Adicionar Transições**
   - Animações entre layouts
   - Fade in/out suave

3. **Temas Dinâmicos**
   - Light/Dark mode
   - Cores customizáveis

4. **Layout Builder**
   - Ferramenta visual para criar layouts
   - Drag and drop de componentes

---

**Data de Implementação**: 2025-09-30  
**Status**: ✅ Sistema de layouts flexível implementado
