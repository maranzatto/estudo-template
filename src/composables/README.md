# 📚 Guia de Composables - Vue 3 com TypeScript

## O que são Composables?

**Composables** são funções reutilizáveis que encapsulam lógica com estado reativo. Eles são a forma recomendada de compartilhar código entre componentes no Vue 3.

## Por que usar Composables?

✅ **Reutilização de código**: Escreva uma vez, use em vários componentes  
✅ **Organização**: Separa a lógica de negócio da apresentação  
✅ **Testabilidade**: Mais fácil de testar isoladamente  
✅ **Composição**: Combine múltiplos composables facilmente  
✅ **TypeScript**: Tipagem completa e autocomplete

## Convenções de Nomenclatura

- Sempre comece o nome com `use` (ex: `useCounter`, `useTheme`, `useFetch`)
- Use camelCase
- O nome deve descrever o que o composable faz

## Estrutura Básica de um Composable

```typescript
import { ref, computed } from 'vue';

export function useNomeDoComposable() {
  // 1. Estado reativo
  const state = ref(valorInicial);

  // 2. Computed properties (valores derivados)
  const computedValue = computed(() => state.value * 2);

  // 3. Métodos/Funções
  function metodo() {
    state.value++;
  }

  // 4. Retornar o que você quer expor
  return {
    state,
    computedValue,
    metodo
  };
}
```

## Quando usar Composables?

### ✅ Use quando:
- Você tem lógica que precisa ser reutilizada em múltiplos componentes
- Quer separar lógica de negócio da apresentação
- Precisa gerenciar estado complexo
- Quer criar abstrações reutilizáveis (ex: fetch de dados, timers, etc)

### ❌ Não use quando:
- A lógica é específica de um único componente
- É apenas uma função utilitária sem estado (use funções normais)
- Está criando abstrações desnecessárias

## Exemplos Práticos

### 1. useCounter (Gerenciamento de Estado Simples)

```typescript
import { ref } from 'vue';

export function useCounter(initial = 0) {
  const count = ref(initial);

  function increment() {
    count.value++;
  }

  return { count, increment };
}
```

**Uso no componente:**
```vue
<script setup lang="ts">
import { useCounter } from '@/composables';

const { count, increment } = useCounter(0);
</script>

<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">+</button>
  </div>
</template>
```

### 2. useFetch (Requisições HTTP)

```typescript
import { ref } from 'vue';

export function useFetch<T>(url: string) {
  const data = ref<T | null>(null);
  const loading = ref(false);
  const error = ref<Error | null>(null);

  async function fetch() {
    loading.value = true;
    error.value = null;
    
    try {
      const response = await fetch(url);
      data.value = await response.json();
    } catch (e) {
      error.value = e as Error;
    } finally {
      loading.value = false;
    }
  }

  return { data, loading, error, fetch };
}
```

### 3. useLocalStorage (Persistência)

```typescript
import { ref, watch } from 'vue';

export function useLocalStorage<T>(key: string, defaultValue: T) {
  // Tenta carregar do localStorage
  const stored = localStorage.getItem(key);
  const value = ref<T>(stored ? JSON.parse(stored) : defaultValue);

  // Salva automaticamente quando o valor muda
  watch(value, (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
  }, { deep: true });

  return value;
}
```

## Composables Disponíveis neste Projeto

### `useCounter`
Gerencia um contador com incremento, decremento e reset.

**Parâmetros:**
- `initialValue` (number): Valor inicial (padrão: 0)
- `step` (number): Valor do incremento/decremento (padrão: 1)

**Retorna:**
- `count`: Valor atual do contador
- `isPositive`, `isNegative`, `isZero`: Estados computados
- `increment()`, `decrement()`, `reset()`, `set()`, `double()`: Métodos

### `useTheme`
Gerencia tema claro/escuro da aplicação.

**Retorna:**
- `theme`: Tema atual ('light' ou 'dark')
- `isDark`: Boolean indicando se está no modo escuro
- `toggleTheme()`, `setTheme()`, `setLight()`, `setDark()`: Métodos

## Boas Práticas

1. **Sempre retorne um objeto**: Facilita a desestruturação
2. **Use TypeScript**: Defina tipos para parâmetros e retorno
3. **Documente**: Adicione comentários JSDoc
4. **Mantenha focado**: Um composable deve fazer uma coisa bem feita
5. **Evite side effects globais**: A menos que seja intencional
6. **Use computed para valores derivados**: Ao invés de recalcular manualmente

## Próximos Passos

1. Crie seus próprios composables para:
   - Gerenciar formulários (`useForm`)
   - Fazer requisições HTTP (`useFetch`)
   - Gerenciar modais (`useModal`)
   - Validar dados (`useValidation`)

2. Explore composables da comunidade:
   - [VueUse](https://vueuse.org/) - Coleção de composables úteis
   - [Vue Macros](https://vue-macros.sxzz.moe/) - Macros e utilidades

## Recursos Adicionais

- [Documentação Oficial - Composables](https://vuejs.org/guide/reusability/composables.html)
- [VueUse - Coleção de Composables](https://vueuse.org/)
