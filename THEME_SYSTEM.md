# 🎨 Sistema de Temas - Documentação Completa

## 📋 Visão Geral

Sistema unificado de temas com suporte a Light, Dark e Auto (segue sistema operacional).

---

## 🏗️ Arquitetura

### Estrutura de Arquivos

```
src/
├── stores/
│   └── theme.ts              # ⭐ Store principal (Pinia)
├── composables/
│   ├── useTheme.ts           # Wrapper do composable
│   └── useThemeManager.ts    # DEPRECATED
├── components/
│   └── ThemeToggle.vue       # Componente de toggle
└── assets/
    └── main.css              # Estilos Tailwind + Dark mode
```

### Hierarquia de Uso

```
1. useThemeStore (Pinia)     ← Fonte única da verdade
   ↓
2. useTheme (Composable)     ← Wrapper conveniente
   ↓
3. ThemeToggle (Component)   ← UI para usuário
```

---

## 🎯 Como Usar

### Opção 1: Store Direta (Recomendado para lógica complexa)

```vue
<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()

// Acessar estado
console.log(themeStore.theme)      // 'light' | 'dark' | 'auto'
console.log(themeStore.isDark)     // boolean
console.log(themeStore.themeIcon)  // '☀️' | '🌙' | '🌓'

// Mudar tema
themeStore.setLight()
themeStore.setDark()
themeStore.setAuto()
themeStore.toggleTheme()
</script>

<template>
  <div>
    <p>Tema atual: {{ themeStore.theme }}</p>
    <p>Modo escuro: {{ themeStore.isDark }}</p>
    <button @click="themeStore.toggleTheme()">
      {{ themeStore.themeIcon }} Trocar Tema
    </button>
  </div>
</template>
```

### Opção 2: Composable (Recomendado para componentes simples)

```vue
<script setup lang="ts">
import { useTheme } from '@/composables'

const { isDark, toggleTheme, themeIcon } = useTheme()
</script>

<template>
  <button @click="toggleTheme()">
    {{ themeIcon }} {{ isDark ? 'Escuro' : 'Claro' }}
  </button>
</template>
```

### Opção 3: Componente Pronto

```vue
<script setup lang="ts">
import ThemeToggle from '@/components/ThemeToggle.vue'
</script>

<template>
  <header>
    <ThemeToggle />
  </header>
</template>
```

---

## 🎨 Aplicando Dark Mode no CSS

### Com Tailwind CSS

```vue
<template>
  <!-- Fundo que muda com o tema -->
  <div class="bg-white dark:bg-gray-800">
    
    <!-- Texto que muda com o tema -->
    <h1 class="text-gray-900 dark:text-white">
      Título
    </h1>
    
    <!-- Card responsivo ao tema -->
    <div class="card">
      <!-- Automaticamente se adapta -->
      Conteúdo
    </div>
  </div>
</template>
```

### Com CSS Tradicional

```vue
<template>
  <div class="my-component">
    <h1>Título</h1>
  </div>
</template>

<style scoped>
.my-component {
  background: white;
  color: #000;
}

/* Dark mode */
.dark .my-component {
  background: #1a1a1a;
  color: #fff;
}
</style>
```

---

## 🔄 Fluxo de Funcionamento

### 1. Inicialização (main.ts)

```typescript
// main.ts
const themeStore = useThemeStore()
themeStore.restoreTheme()                    // Restaura do localStorage
themeStore.initSystemPreferenceWatcher()     // Observa mudanças do SO
```

### 2. Mudança de Tema

```
Usuário clica no botão
    ↓
themeStore.toggleTheme()
    ↓
Atualiza theme.value
    ↓
Salva no localStorage
    ↓
Aplica classe 'dark' no <html>
    ↓
CSS responde automaticamente
```

### 3. Modo Auto

```
Tema = 'auto'
    ↓
Detecta preferência do SO
    ↓
Aplica tema correspondente
    ↓
Observa mudanças do SO
    ↓
Atualiza automaticamente
```

---

## 📦 API Completa

### useThemeStore

#### Estado

```typescript
theme: Ref<'light' | 'dark' | 'auto'>
systemPrefersDark: Ref<boolean>
isDark: ComputedRef<boolean>
themeIcon: ComputedRef<string>
```

#### Métodos

```typescript
setTheme(theme: 'light' | 'dark' | 'auto'): void
toggleTheme(): void
setLight(): void
setDark(): void
setAuto(): void
restoreTheme(): void
initSystemPreferenceWatcher(): () => void
```

### useTheme (Composable)

```typescript
{
  theme: Ref<Theme>
  isDark: ComputedRef<boolean>
  themeIcon: ComputedRef<string>
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
  setLight: () => void
  setDark: () => void
  setAuto: () => void
}
```

---

## 🎨 Classes Tailwind Disponíveis

### Componentes Prontos

```css
/* Botões */
.btn                    /* Base */
.btn-primary           /* Primário */
.btn-secondary         /* Secundário */
.btn-outline           /* Outline */
.btn-ghost             /* Transparente */

/* Cards */
.card                  /* Card base (adapta ao tema) */
.card-header           /* Header do card */
.card-title            /* Título do card */

/* Inputs */
.input                 /* Input base (adapta ao tema) */
.input-error           /* Input com erro */
.label                 /* Label (adapta ao tema) */

/* Badges */
.badge                 /* Badge base */
.badge-success         /* Verde */
.badge-error           /* Vermelho */
.badge-warning         /* Amarelo */
.badge-info            /* Azul */

/* Alerts */
.alert                 /* Alert base */
.alert-success         /* Sucesso */
.alert-error           /* Erro */
.alert-warning         /* Aviso */
.alert-info            /* Info */
```

### Utilitários Customizados

```css
/* Gradientes */
.text-gradient         /* Texto com gradiente */
.bg-gradient-primary   /* Fundo gradiente primário */
.bg-gradient-success   /* Fundo gradiente sucesso */

/* Efeitos */
.glass                 /* Glassmorphism */
.hover-lift            /* Levanta ao hover */
.hover-scale           /* Aumenta ao hover */

/* Animações */
.animate-float         /* Flutuação */
.animate-glow          /* Brilho pulsante */
.animate-fade-in       /* Fade in */
.animate-slide-up      /* Desliza para cima */
```

---

## 🔧 Customização

### Adicionar Nova Cor ao Tema

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      brand: {
        light: '#your-light-color',
        dark: '#your-dark-color',
      }
    }
  }
}
```

### Criar Novo Componente Temático

```css
/* src/assets/main.css */
@layer components {
  .my-component {
    @apply bg-white dark:bg-gray-800;
    @apply text-gray-900 dark:text-white;
    @apply border border-gray-200 dark:border-gray-700;
  }
}
```

### Adicionar Transição ao Trocar Tema

```css
/* src/assets/main.css */
html {
  transition: background-color 0.3s ease, color 0.3s ease;
}

* {
  transition: background-color 0.3s ease, 
              border-color 0.3s ease, 
              color 0.3s ease;
}
```

---

## 📱 Exemplos Práticos

### Exemplo 1: Header com Toggle

```vue
<script setup lang="ts">
import ThemeToggle from '@/components/ThemeToggle.vue'
</script>

<template>
  <header class="bg-white dark:bg-gray-800 shadow-md">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
          Meu App
        </h1>
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>
```

### Exemplo 2: Card Adaptativo

```vue
<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Título</h3>
    </div>
    <p class="text-gray-600 dark:text-gray-400">
      Conteúdo que se adapta ao tema
    </p>
  </div>
</template>
```

### Exemplo 3: Formulário Temático

```vue
<template>
  <form class="space-y-4">
    <div>
      <label class="label">Nome</label>
      <input type="text" class="input" placeholder="Seu nome">
    </div>
    
    <button type="submit" class="btn btn-primary w-full">
      Enviar
    </button>
  </form>
</template>
```

---

## 🐛 Troubleshooting

### Tema não muda

**Problema**: Classes dark: não funcionam  
**Solução**: 
1. Verifique se Tailwind está instalado
2. Confirme que `darkMode: 'class'` está no `tailwind.config.js`
3. Reinicie o servidor

### Tema não persiste

**Problema**: Tema volta ao padrão ao recarregar  
**Solução**: 
1. Verifique se `restoreTheme()` está sendo chamado no `main.ts`
2. Confirme que localStorage está habilitado no navegador

### Modo auto não funciona

**Problema**: Não detecta preferência do sistema  
**Solução**:
1. Verifique se `initSystemPreferenceWatcher()` está sendo chamado
2. Teste mudando o tema do SO manualmente

---

## 📊 Checklist de Implementação

- ✅ Store de tema criada (`stores/theme.ts`)
- ✅ Composable wrapper criado (`composables/useTheme.ts`)
- ✅ Componente ThemeToggle criado
- ✅ Tailwind configurado com dark mode
- ✅ CSS customizado com classes dark:
- ✅ Inicialização no main.ts
- ✅ Toggle adicionado no layout
- ✅ Persistência no localStorage
- ✅ Sincronização com SO (auto mode)
- ✅ Documentação completa

---

## 🚀 Próximos Passos

1. **Converter componentes existentes**
   - Migrar CSS tradicional para Tailwind
   - Adicionar suporte a dark mode

2. **Adicionar mais temas**
   - Tema high contrast
   - Temas coloridos personalizados

3. **Melhorar transições**
   - Animações suaves ao trocar tema
   - Efeitos visuais

4. **Adicionar preferências**
   - Salvar preferências de cores
   - Temas por usuário

---

**Data de Revisão**: 2025-09-30  
**Status**: ✅ Sistema de temas revisado e consolidado  
**Versão**: 2.0
