# 📖 Guia de Boas Práticas - Vue 3 + TypeScript

## 🎯 Objetivo

Este guia contém as melhores práticas para desenvolvimento com Vue 3, TypeScript e Composition API. Siga estas diretrizes para manter o código limpo, organizado e escalável.

---

## 📂 Organização de Arquivos

### ✅ Faça

- **Nomes descritivos**: Use nomes claros que descrevam o propósito do arquivo
- **PascalCase para componentes**: `UserProfile.vue`, `ProductCard.vue`
- **camelCase para utilitários**: `formatters.ts`, `validators.ts`
- **Um componente por arquivo**: Nunca coloque múltiplos componentes em um arquivo

```
✅ BOM
src/components/UserProfile.vue
src/composables/useAuth.ts
src/utils/formatters.ts

❌ RUIM
src/components/user.vue
src/composables/auth.ts
src/utils/utils.ts
```

### Estrutura de Pastas

```
src/
├── components/    # Componentes reutilizáveis (botões, cards, inputs)
├── views/         # Páginas/Telas da aplicação
├── layouts/       # Layouts (header, footer, sidebar)
├── composables/   # Lógica reutilizável
├── stores/        # Estado global (Pinia)
├── utils/         # Funções utilitárias puras
├── types/         # Tipos TypeScript
├── api/           # Comunicação com API
└── config/        # Configurações e constantes
```

---

## 🧩 Componentes

### Estrutura do Componente

```vue
<!-- 1. Template -->
<template>
  <div class="my-component">
    <!-- Conteúdo -->
  </div>
</template>

<!-- 2. Script -->
<script setup lang="ts">
// Ordem recomendada:
// 1. Imports
// 2. Props
// 3. Emits
// 4. Composables
// 5. Estado reativo
// 6. Computed
// 7. Watchers
// 8. Lifecycle hooks
// 9. Métodos
</script>

<!-- 3. Estilos -->
<style scoped>
/* Estilos isolados */
</style>
```

### Props

```typescript
// ✅ BOM - Com interface e defaults
interface Props {
  title: string
  count?: number
  items?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  count: 0,
  items: () => []
})

// ❌ RUIM - Sem tipagem
const props = defineProps(['title', 'count'])
```

### Emits

```typescript
// ✅ BOM - Com tipagem
interface Emits {
  (e: 'update', value: string): void
  (e: 'delete', id: number): void
}

const emit = defineEmits<Emits>()

// Uso
emit('update', 'novo valor')
emit('delete', 123)

// ❌ RUIM - Sem tipagem
const emit = defineEmits(['update', 'delete'])
```

### Estado Reativo

```typescript
// ✅ BOM - Com tipagem explícita
const count = ref<number>(0)
const user = ref<User | null>(null)
const items = ref<string[]>([])

// ✅ BOM - Reactive para objetos complexos
const form = reactive({
  name: '',
  email: '',
  age: 0
})

// ❌ RUIM - Sem tipagem
const count = ref(0) // TypeScript infere, mas seja explícito quando possível
```

### Computed Properties

```typescript
// ✅ BOM - Para valores derivados
const fullName = computed(() => `${firstName.value} ${lastName.value}`)
const hasItems = computed(() => items.value.length > 0)

// ❌ RUIM - Recalcular no template
<template>
  <p>{{ firstName + ' ' + lastName }}</p>
</template>
```

---

## 🔄 Composables

### Nomenclatura

- **Sempre comece com `use`**: `useAuth`, `useCounter`, `useFetch`
- **Seja descritivo**: `useProductFilters` melhor que `useFilters`

### Estrutura

```typescript
// ✅ BOM
export function useCounter(initialValue = 0) {
  // 1. Estado
  const count = ref(initialValue)
  
  // 2. Computed
  const isPositive = computed(() => count.value > 0)
  
  // 3. Métodos
  function increment() {
    count.value++
  }
  
  // 4. Retornar objeto
  return {
    count,
    isPositive,
    increment
  }
}

// ❌ RUIM - Retornar array (dificulta renomear)
export function useCounter() {
  const count = ref(0)
  const increment = () => count.value++
  return [count, increment] // ❌
}
```

### Quando Usar

```typescript
// ✅ Use composables para:
// - Lógica reutilizável entre componentes
// - Gerenciar estado complexo
// - Abstrair lógica de negócio
// - Integração com APIs externas

// ❌ NÃO use composables para:
// - Funções utilitárias simples sem estado
// - Lógica específica de um único componente
```

---

## 🗃️ Pinia Stores

### Estrutura

```typescript
// ✅ BOM - Setup Stores (recomendado)
export const useUserStore = defineStore('user', () => {
  // Estado
  const user = ref<User | null>(null)
  
  // Getters (computed)
  const isAuthenticated = computed(() => user.value !== null)
  
  // Actions
  function login(userData: User) {
    user.value = userData
  }
  
  return { user, isAuthenticated, login }
})

// ❌ EVITE - Options Stores (sintaxe antiga)
export const useUserStore = defineStore('user', {
  state: () => ({ user: null }),
  getters: { isAuthenticated: (state) => state.user !== null },
  actions: { login(userData) { this.user = userData } }
})
```

### Quando Usar Store vs Composable

```typescript
// ✅ Use STORE quando:
// - Estado precisa ser compartilhado globalmente
// - Dados persistem entre navegações
// - Múltiplos componentes precisam acessar/modificar

// ✅ Use COMPOSABLE quando:
// - Lógica reutilizável mas estado local
// - Cada componente tem sua própria instância
// - Não precisa persistir
```

---

## 🎨 Estilos

### CSS Scoped

```vue
<!-- ✅ BOM - Sempre use scoped -->
<style scoped>
.button {
  padding: 0.5rem 1rem;
  background: var(--primary-color);
}
</style>

<!-- ❌ RUIM - Sem scoped (polui global) -->
<style>
.button {
  padding: 0.5rem 1rem;
}
</style>
```

### Variáveis CSS

```css
/* ✅ BOM - Use variáveis CSS */
:root {
  --primary-color: #42b883;
  --secondary-color: #35495e;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
}

.button {
  color: var(--primary-color);
  padding: var(--spacing-md);
}

/* ❌ RUIM - Valores hardcoded */
.button {
  color: #42b883;
  padding: 1rem;
}
```

---

## 🔧 TypeScript

### Tipagem de Props

```typescript
// ✅ BOM - Interface separada
interface UserCardProps {
  user: User
  showEmail?: boolean
  onEdit?: (id: number) => void
}

const props = withDefaults(defineProps<UserCardProps>(), {
  showEmail: false
})

// ❌ RUIM - Inline sem interface
const props = defineProps<{
  user: any
  showEmail: boolean
}>()
```

### Tipos Customizados

```typescript
// ✅ BOM - Criar tipos reutilizáveis
export type Status = 'pending' | 'success' | 'error'
export type UserId = number

export interface User {
  id: UserId
  name: string
  email: string
  status: Status
}

// ❌ RUIM - Usar any ou tipos genéricos demais
const user: any = { ... }
const status: string = 'pending'
```

---

## 🚀 Performance

### Lazy Loading de Rotas

```typescript
// ✅ BOM - Lazy load para rotas
{
  path: '/about',
  component: () => import('@/views/AboutView.vue')
}

// ❌ RUIM - Import direto (aumenta bundle inicial)
import AboutView from '@/views/AboutView.vue'
{
  path: '/about',
  component: AboutView
}
```

### v-for com :key

```vue
<!-- ✅ BOM - Sempre use :key único -->
<div v-for="item in items" :key="item.id">
  {{ item.name }}
</div>

<!-- ❌ RUIM - Sem key ou usando index -->
<div v-for="(item, index) in items" :key="index">
  {{ item.name }}
</div>
```

### Computed vs Methods

```typescript
// ✅ BOM - Use computed para valores derivados (cached)
const filteredItems = computed(() => 
  items.value.filter(item => item.active)
)

// ❌ RUIM - Método no template (recalcula sempre)
function getFilteredItems() {
  return items.value.filter(item => item.active)
}
```

---

## 🧪 Testes

### Nomenclatura

```typescript
// ✅ BOM - Descritivo
describe('UserProfile', () => {
  it('should display user name when user is logged in', () => {
    // ...
  })
  
  it('should emit update event when form is submitted', () => {
    // ...
  })
})

// ❌ RUIM - Genérico
describe('Component', () => {
  it('works', () => {
    // ...
  })
})
```

---

## 📝 Comentários

### Quando Comentar

```typescript
// ✅ BOM - Explique o "porquê", não o "o quê"
// Aguarda 300ms para evitar múltiplas requisições durante digitação
const debouncedSearch = debounce(search, 300)

// Workaround: API retorna null ao invés de array vazio
const items = response.data || []

// ❌ RUIM - Óbvio demais
// Incrementa o contador
count.value++

// ❌ RUIM - Código comentado
// const oldFunction = () => { ... }
```

### JSDoc para Funções Públicas

```typescript
/**
 * Formata um valor numérico como moeda brasileira
 * @param value - Valor a ser formatado
 * @returns String formatada como R$ 1.234,56
 * @example
 * formatCurrency(1234.56) // "R$ 1.234,56"
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}
```

---

## ⚠️ Erros Comuns

### 1. Modificar Props Diretamente

```typescript
// ❌ RUIM
const props = defineProps<{ count: number }>()
props.count++ // ERRO! Props são readonly

// ✅ BOM - Use v-model ou emits
const localCount = ref(props.count)
localCount.value++
emit('update:count', localCount.value)
```

### 2. Esquecer .value em refs

```typescript
const count = ref(0)

// ❌ RUIM
count++ // Não funciona!

// ✅ BOM
count.value++
```

### 3. Usar reactive com tipos primitivos

```typescript
// ❌ RUIM
const count = reactive(0) // Não funciona com primitivos

// ✅ BOM
const count = ref(0) // Use ref para primitivos
const user = reactive({ name: '', age: 0 }) // reactive para objetos
```

---

## 📚 Recursos

- [Vue 3 Style Guide](https://vuejs.org/style-guide/)
- [TypeScript Best Practices](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)
- [Pinia Best Practices](https://pinia.vuejs.org/cookbook/)
