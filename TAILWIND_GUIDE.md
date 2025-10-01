# 🎨 Guia Completo - Tailwind CSS + Tema Personalizado

## 📦 Instalação

### Passo 1: Instalar Dependências

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

### Passo 2: Instalar Extensão do VS Code (Recomendado)

Instale a extensão **Tailwind CSS IntelliSense** para:
- Autocomplete de classes
- Syntax highlighting
- Linting
- Hover preview

```
Nome: Tailwind CSS IntelliSense
ID: bradlc.vscode-tailwindcss
```

### Passo 3: Reiniciar Servidor

Após instalar, reinicie o servidor de desenvolvimento:

```bash
# Pare o servidor (Ctrl+C)
npm run dev
```

---

## 🎨 Sistema de Tema Personalizado

### Cores Disponíveis

#### Primary (Verde Vue)
```vue
<div class="bg-primary-500 text-white">
  <!-- Verde principal do Vue -->
</div>
```

Variações: `primary-50` até `primary-900`

#### Secondary (Azul Escuro)
```vue
<div class="bg-secondary-600 text-white">
  <!-- Azul escuro -->
</div>
```

Variações: `secondary-50` até `secondary-900`

#### Accent (Cores de Destaque)
```vue
<div class="bg-accent-purple">Purple</div>
<div class="bg-accent-pink">Pink</div>
<div class="bg-accent-blue">Blue</div>
<div class="bg-accent-green">Green</div>
<div class="bg-accent-orange">Orange</div>
<div class="bg-accent-red">Red</div>
```

---

## 🧩 Componentes Prontos

### Botões

```vue
<!-- Botão primário -->
<button class="btn btn-primary">
  Salvar
</button>

<!-- Botão secundário -->
<button class="btn btn-secondary">
  Cancelar
</button>

<!-- Botão outline -->
<button class="btn btn-outline">
  Editar
</button>

<!-- Botão ghost -->
<button class="btn btn-ghost">
  Fechar
</button>

<!-- Tamanhos -->
<button class="btn btn-primary btn-sm">Pequeno</button>
<button class="btn btn-primary">Normal</button>
<button class="btn btn-primary btn-lg">Grande</button>
```

### Cards

```vue
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Título do Card</h3>
  </div>
  <p>Conteúdo do card aqui...</p>
</div>
```

### Inputs

```vue
<div>
  <label class="label">Nome</label>
  <input type="text" class="input" placeholder="Digite seu nome">
</div>

<!-- Input com erro -->
<input type="email" class="input input-error" placeholder="Email inválido">
```

### Badges

```vue
<span class="badge badge-success">Ativo</span>
<span class="badge badge-error">Erro</span>
<span class="badge badge-warning">Aviso</span>
<span class="badge badge-info">Info</span>
```

### Alerts

```vue
<div class="alert alert-success">
  ✓ Operação realizada com sucesso!
</div>

<div class="alert alert-error">
  ✗ Ocorreu um erro!
</div>

<div class="alert alert-warning">
  ⚠ Atenção!
</div>

<div class="alert alert-info">
  ℹ Informação importante
</div>
```

---

## 🎭 Dark Mode

### Usando a Store de Tema

```vue
<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
</script>

<template>
  <div>
    <!-- Botão de toggle -->
    <button @click="themeStore.toggleTheme()" class="btn">
      {{ themeStore.themeIcon }} Trocar Tema
    </button>

    <!-- Seletor de tema -->
    <select v-model="themeStore.theme" @change="themeStore.setTheme(themeStore.theme)">
      <option value="light">☀️ Claro</option>
      <option value="dark">🌙 Escuro</option>
      <option value="auto">🌓 Automático</option>
    </select>

    <!-- Verificar se está dark -->
    <p v-if="themeStore.isDark">Modo escuro ativo</p>
  </div>
</template>
```

### Classes Dark Mode

```vue
<!-- Cor de fundo que muda com o tema -->
<div class="bg-white dark:bg-gray-800">
  <!-- Texto que muda com o tema -->
  <p class="text-gray-900 dark:text-gray-100">
    Este texto se adapta ao tema
  </p>
</div>

<!-- Card responsivo ao tema -->
<div class="card">
  <!-- Automaticamente muda no dark mode -->
  Conteúdo do card
</div>
```

---

## 🎨 Utilitários Customizados

### Gradientes de Texto

```vue
<h1 class="text-gradient">
  Texto com Gradiente
</h1>

<h2 class="text-gradient-green">
  Gradiente Verde
</h2>
```

### Gradientes de Fundo

```vue
<div class="bg-gradient-primary p-8 text-white">
  Fundo com gradiente primário
</div>

<div class="bg-gradient-success p-8 text-white">
  Fundo com gradiente de sucesso
</div>

<div class="bg-gradient-sunset p-8 text-white">
  Fundo com gradiente sunset
</div>

<div class="bg-gradient-ocean p-8 text-white">
  Fundo com gradiente ocean
</div>
```

### Efeito Glass (Glassmorphism)

```vue
<div class="glass p-6 rounded-xl">
  <h3 class="text-white">Efeito Glass</h3>
  <p class="text-white/80">Fundo desfocado com transparência</p>
</div>
```

### Animações

```vue
<!-- Float -->
<div class="animate-float">
  Elemento flutuante
</div>

<!-- Glow -->
<div class="animate-glow p-4 rounded-lg">
  Elemento com brilho
</div>

<!-- Fade in -->
<div class="animate-fade-in">
  Aparece suavemente
</div>

<!-- Slide up -->
<div class="animate-slide-up">
  Desliza para cima
</div>

<!-- Scale in -->
<div class="animate-scale-in">
  Aumenta de tamanho
</div>
```

### Hover Effects

```vue
<!-- Lift on hover -->
<div class="hover-lift card">
  Levanta ao passar o mouse
</div>

<!-- Scale on hover -->
<img src="..." class="hover-scale rounded-lg">
```

---

## 📱 Responsividade

### Breakpoints do Tailwind

```vue
<!-- Mobile first -->
<div class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
  Texto responsivo
</div>

<!-- Grid responsivo -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  <div class="card">Item 1</div>
  <div class="card">Item 2</div>
  <div class="card">Item 3</div>
  <div class="card">Item 4</div>
</div>

<!-- Esconder em mobile -->
<div class="hidden md:block">
  Visível apenas em tablets e desktops
</div>

<!-- Mostrar apenas em mobile -->
<div class="block md:hidden">
  Visível apenas em mobile
</div>
```

---

## 🎯 Exemplos Práticos

### Exemplo 1: Card de Produto

```vue
<div class="card hover-lift">
  <img src="produto.jpg" class="w-full h-48 object-cover rounded-t-xl -m-6 mb-4">
  
  <div class="card-header">
    <h3 class="card-title">Nome do Produto</h3>
    <span class="badge badge-success">Em estoque</span>
  </div>
  
  <p class="text-gray-600 dark:text-gray-400 mb-4">
    Descrição do produto aqui...
  </p>
  
  <div class="flex items-center justify-between">
    <span class="text-2xl font-bold text-primary-600">R$ 99,90</span>
    <button class="btn btn-primary">
      Comprar
    </button>
  </div>
</div>
```

### Exemplo 2: Formulário de Login

```vue
<div class="card max-w-md mx-auto">
  <div class="card-header">
    <h2 class="card-title text-center">Login</h2>
  </div>
  
  <form @submit.prevent="handleLogin" class="space-y-4">
    <div>
      <label class="label">Email</label>
      <input type="email" class="input" placeholder="seu@email.com">
    </div>
    
    <div>
      <label class="label">Senha</label>
      <input type="password" class="input" placeholder="••••••••">
    </div>
    
    <button type="submit" class="btn btn-primary w-full">
      Entrar
    </button>
  </form>
  
  <div class="mt-4 text-center">
    <a href="#" class="text-primary-600 hover:text-primary-700">
      Esqueceu a senha?
    </a>
  </div>
</div>
```

### Exemplo 3: Dashboard Header

```vue
<header class="bg-white dark:bg-gray-800 shadow-md">
  <div class="container-custom py-4">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold text-gradient">
        Dashboard
      </h1>
      
      <div class="flex items-center gap-4">
        <button @click="themeStore.toggleTheme()" class="btn btn-ghost">
          {{ themeStore.themeIcon }}
        </button>
        
        <div class="flex items-center gap-2">
          <img src="avatar.jpg" class="w-10 h-10 rounded-full">
          <span class="font-medium">{{ userName }}</span>
        </div>
      </div>
    </div>
  </div>
</header>
```

---

## 🔧 Customização Avançada

### Adicionar Novas Cores

Edite `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      brand: {
        50: '#fff7ed',
        100: '#ffedd5',
        // ... até 900
      }
    }
  }
}
```

### Adicionar Novas Animações

Em `src/assets/main.css`:

```css
@layer utilities {
  .animate-bounce-slow {
    animation: bounce 3s infinite;
  }
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-25px); }
  }
}
```

### Criar Componentes Customizados

Em `src/assets/main.css`:

```css
@layer components {
  .btn-danger {
    @apply bg-red-500 text-white hover:bg-red-600;
    @apply focus:ring-2 focus:ring-red-300;
  }
  
  .card-elevated {
    @apply card shadow-2xl;
  }
}
```

---

## 📚 Recursos

### Documentação Oficial
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)
- [Headless UI](https://headlessui.com/)

### Ferramentas Úteis
- [Tailwind Play](https://play.tailwindcss.com/) - Playground online
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Color Palette Generator](https://uicolors.app/)

### Plugins Recomendados
```bash
npm install -D @tailwindcss/forms
npm install -D @tailwindcss/typography
npm install -D @tailwindcss/aspect-ratio
```

---

## ⚠️ Troubleshooting

### Classes não funcionam
- Verifique se o arquivo está incluído no `content` do `tailwind.config.js`
- Reinicie o servidor de desenvolvimento

### Estilos não aplicam
- Limpe o cache: `rm -rf node_modules/.vite`
- Reinstale: `npm install`

### IntelliSense não funciona
- Instale a extensão Tailwind CSS IntelliSense
- Reinicie o VS Code

---

**Status**: ✅ Tailwind CSS configurado e pronto para uso!
