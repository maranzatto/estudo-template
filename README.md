# 🚀 Meu MVP - Vue 3 + TypeScript

Projeto Vue 3 configurado com TypeScript, Pinia, Vue Router e estrutura completa para desenvolvimento de MVP.

## ✨ Características

- ⚡ **Vue 3** com Composition API
- 🔷 **TypeScript** para tipagem estática
- 🗂️ **Pinia** para gerenciamento de estado
- 🧭 **Vue Router** para navegação
- 🎨 **CSS Scoped** para estilização isolada
- 🔧 **Utilitários** prontos (formatters, validators, helpers)
- 📦 **Estrutura organizada** para escalar o projeto
- 🧩 **Composables** para lógica reutilizável

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## 📁 Estrutura do Projeto

```
src/
├── api/              # Camada de comunicação com API
│   ├── client.ts     # Cliente HTTP configurado
│   └── index.ts      # Exportações e endpoints
├── assets/           # Arquivos estáticos (imagens, ícones)
├── components/       # Componentes reutilizáveis
│   └── CounterDisplay.vue
├── composables/      # Lógica reutilizável (hooks)
│   ├── useCounter.ts
│   ├── useTheme.ts
│   ├── index.ts
│   └── README.md     # Guia sobre composables
├── config/           # Configurações da aplicação
│   ├── constants.ts  # Constantes globais
│   └── index.ts      # Configurações centralizadas
├── layouts/          # Layouts da aplicação
│   └── DefaultLayout.vue
├── router/           # Configuração de rotas
│   └── index.ts
├── stores/           # Stores Pinia (estado global)
│   ├── app.ts        # Store principal
│   ├── user.ts       # Store de usuário
│   ├── counter.ts    # Store de exemplo
│   └── index.ts      # Exportações
├── types/            # Tipos TypeScript globais
│   ├── index.ts      # Tipos da aplicação
│   └── vue-router.d.ts # Extensão do Vue Router
├── utils/            # Funções utilitárias
│   ├── formatters.ts # Formatação de dados
│   ├── validators.ts # Validações
│   ├── helpers.ts    # Funções auxiliares
│   └── index.ts      # Exportações
├── views/            # Páginas/Views da aplicação
│   ├── HomeView.vue
│   ├── AboutView.vue
│   └── NotFoundView.vue
├── App.vue           # Componente raiz
└── main.ts           # Ponto de entrada
```

## 🎯 Guia Rápido

### Criando um Novo Componente

```vue
<script setup lang="ts">
import { ref } from 'vue'

// Props com TypeScript
interface Props {
  title: string
  count?: number
}

const props = withDefaults(defineProps<Props>(), {
  count: 0
})

// Estado reativo
const value = ref(0)

// Função
function increment() {
  value.value++
}
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ value }}</p>
    <button @click="increment">+</button>
  </div>
</template>

<style scoped>
/* Estilos isolados do componente */
</style>
```

### Criando uma Nova View

1. Crie o arquivo em `src/views/MinhaView.vue`
2. Adicione a rota em `src/router/index.ts`:

```typescript
{
  path: '/minha-rota',
  name: 'minha-view',
  component: () => import('@/views/MinhaView.vue'),
  meta: { title: 'Minha View' }
}
```

### Criando uma Store Pinia

```typescript
// src/stores/meuModulo.ts
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMeuModuloStore = defineStore('meuModulo', () => {
  // Estado
  const items = ref<string[]>([])
  
  // Computed
  const itemCount = computed(() => items.value.length)
  
  // Actions
  function addItem(item: string) {
    items.value.push(item)
  }
  
  return { items, itemCount, addItem }
})
```

### Criando um Composable

```typescript
// src/composables/useMeuComposable.ts
import { ref } from 'vue'

export function useMeuComposable() {
  const state = ref(0)
  
  function increment() {
    state.value++
  }
  
  return { state, increment }
}
```

### Usando Utilitários

```typescript
import { formatCurrency, isValidEmail, debounce } from '@/utils'

// Formatação
const preco = formatCurrency(1234.56) // "R$ 1.234,56"

// Validação
const emailValido = isValidEmail('teste@email.com') // true

// Debounce
const buscar = debounce((termo: string) => {
  console.log('Buscando:', termo)
}, 300)
```

## 🔧 Configurações de Ambiente

Copie `.env.example` para `.env` e configure suas variáveis:

```bash
cp .env.example .env
```

Variáveis disponíveis:
- `VITE_API_BASE_URL` - URL base da API
- `VITE_ENABLE_ANALYTICS` - Habilitar analytics
- `VITE_ENABLE_MOCK` - Usar dados mock

## 📚 Recursos Adicionais

- [Documentação Vue 3](https://vuejs.org/)
- [Documentação TypeScript](https://www.typescriptlang.org/)
- [Documentação Pinia](https://pinia.vuejs.org/)
- [Documentação Vue Router](https://router.vuejs.org/)
- [VueUse - Composables Úteis](https://vueuse.org/)

## 🤝 Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
2. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
3. Push para a branch (`git push origin feature/MinhaFeature`)
4. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT.
