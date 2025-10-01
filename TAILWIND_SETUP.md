# 🎨 Setup Tailwind CSS - Guia de Instalação

## 📦 Passo 1: Instalar Dependências

Execute no terminal:

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

## 🔧 Passo 2: Inicializar Tailwind

```bash
npx tailwindcss init -p
```

Isso criará:
- `tailwind.config.js`
- `postcss.config.js`

## ⚙️ Passo 3: Configurar tailwind.config.js

Substitua o conteúdo do arquivo `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores primárias do tema
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#42b883', // Verde Vue
          600: '#35a372',
          700: '#2d8a5f',
          800: '#26704d',
          900: '#1f5a3e',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#35495e', // Azul escuro
          600: '#2c3e50',
          700: '#243342',
          800: '#1d2833',
          900: '#161e27',
        },
        accent: {
          purple: '#667eea',
          pink: '#764ba2',
          blue: '#2196f3',
          green: '#4caf50',
          orange: '#ff9800',
          red: '#f44336',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
```

## 📝 Passo 4: Criar arquivo CSS principal

Crie ou substitua o conteúdo de `src/assets/main.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Variáveis CSS customizadas */
@layer base {
  :root {
    --color-primary: 66 184 131;
    --color-secondary: 53 73 94;
    --color-accent: 102 126 234;
    --color-success: 76 175 80;
    --color-warning: 255 152 0;
    --color-error: 244 67 54;
    --color-info: 33 150 243;
  }

  /* Dark mode */
  .dark {
    --color-primary: 66 184 131;
    --color-secondary: 203 213 225;
  }
}

/* Componentes customizados */
@layer components {
  .btn {
    @apply px-4 py-2 rounded-lg font-medium transition-all duration-200;
    @apply hover:shadow-lg active:scale-95;
  }

  .btn-primary {
    @apply bg-primary-500 text-white hover:bg-primary-600;
  }

  .btn-secondary {
    @apply bg-secondary-500 text-white hover:bg-secondary-600;
  }

  .btn-outline {
    @apply border-2 border-primary-500 text-primary-500;
    @apply hover:bg-primary-500 hover:text-white;
  }

  .card {
    @apply bg-white rounded-xl shadow-md p-6;
    @apply hover:shadow-xl transition-shadow duration-300;
  }

  .input {
    @apply w-full px-4 py-2 border-2 border-gray-300 rounded-lg;
    @apply focus:border-primary-500 focus:ring-2 focus:ring-primary-200;
    @apply transition-all duration-200;
  }

  .badge {
    @apply inline-block px-3 py-1 rounded-full text-sm font-semibold;
  }

  .badge-success {
    @apply bg-green-100 text-green-800;
  }

  .badge-error {
    @apply bg-red-100 text-red-800;
  }

  .badge-warning {
    @apply bg-yellow-100 text-yellow-800;
  }

  .badge-info {
    @apply bg-blue-100 text-blue-800;
  }
}

/* Utilitários customizados */
@layer utilities {
  .text-gradient {
    @apply bg-clip-text text-transparent;
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  .bg-gradient-primary {
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  .bg-gradient-success {
    background-image: linear-gradient(135deg, #4caf50 0%, #8bc34a 100%);
  }

  .glass {
    @apply bg-white/10 backdrop-blur-lg border border-white/20;
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
}
```

## 🔗 Passo 5: Importar CSS no main.ts

Adicione no topo de `src/main.ts`:

```typescript
import './assets/main.css'
```

## ✅ Passo 6: Verificar Instalação

Teste adicionando classes Tailwind em qualquer componente:

```vue
<template>
  <div class="bg-primary-500 text-white p-4 rounded-lg">
    Tailwind funcionando! 🎉
  </div>
</template>
```

## 🎨 Próximos Passos

Após a instalação, você pode:
1. Converter componentes existentes para Tailwind
2. Criar tema dark mode
3. Adicionar plugins do Tailwind
4. Customizar ainda mais o tema

---

**Tempo estimado**: 5-10 minutos  
**Dificuldade**: Fácil
