# 🔐 Guia de Autenticação - Sistema de Login

## 📋 Visão Geral

Sistema completo de autenticação implementado com:
- ✅ Tela de login responsiva
- ✅ Rotas protegidas
- ✅ Guard de navegação
- ✅ Persistência de sessão (localStorage)
- ✅ Redirecionamento automático

---

## 🔑 Credenciais de Acesso

### Usuário de Teste
- **Usuário**: `admin`
- **Senha**: `1234`

---

## 🗺️ Estrutura de Rotas

### Rotas Públicas (Não requerem autenticação)
- `/login` - Tela de login

### Rotas Protegidas (Requerem autenticação)
- `/` - Home
- `/about` - Sobre

### Comportamento de Rotas Inválidas
- Qualquer URL inválida redireciona para `/` (Home)
- Se não autenticado, será redirecionado para `/login`

---

## 🔄 Fluxo de Autenticação

### 1. Acesso Inicial (Não Autenticado)
```
Usuário acessa qualquer URL
    ↓
Verifica autenticação
    ↓
NÃO autenticado
    ↓
Redireciona para /login
    ↓
Salva URL de destino em query param (?redirect=/about)
```

### 2. Login Bem-Sucedido
```
Usuário preenche credenciais
    ↓
Valida: admin / 1234
    ↓
Cria sessão (localStorage)
    ↓
Redireciona para URL de destino ou /
```

### 3. Navegação Autenticada
```
Usuário autenticado acessa rota
    ↓
Guard verifica autenticação
    ↓
Autenticado ✓
    ↓
Permite acesso
```

### 4. Logout
```
Usuário clica em "Sair"
    ↓
Limpa sessão (localStorage)
    ↓
Redireciona para /login
```

### 5. Persistência de Sessão
```
Usuário fecha navegador
    ↓
Reabre aplicação
    ↓
main.ts restaura sessão do localStorage
    ↓
Se válida, mantém autenticado
```

---

## 🛠️ Implementação Técnica

### Arquivos Modificados/Criados

#### 1. **src/views/LoginView.vue** (NOVO)
Tela de login com:
- Formulário de autenticação
- Validação de campos
- Feedback de erros
- Loading state
- Design responsivo

#### 2. **src/router/index.ts** (MODIFICADO)
- Adicionada rota `/login`
- Configurado `meta.requiresAuth` em cada rota
- Implementado guard `beforeEach` para verificar autenticação
- Redirecionamento de rotas inválidas para `/`

#### 3. **src/layouts/DefaultLayout.vue** (MODIFICADO)
- Adicionado menu de usuário
- Exibição do nome do usuário logado
- Botão de logout

#### 4. **src/main.ts** (MODIFICADO)
- Restauração automática de sessão ao iniciar app

#### 5. **src/stores/user.ts** (JÁ EXISTIA)
- Store com funções: `login()`, `logout()`, `restoreSession()`
- Persistência em localStorage

---

## 📝 Como Usar

### Adicionar Nova Rota Protegida

```typescript
// src/router/index.ts
{
  path: '/dashboard',
  name: 'dashboard',
  component: () => import('@/views/DashboardView.vue'),
  meta: {
    title: 'Dashboard',
    requiresAuth: true // ← Rota protegida
  }
}
```

### Adicionar Nova Rota Pública

```typescript
{
  path: '/sobre-publico',
  name: 'sobre-publico',
  component: () => import('@/views/SobrePublicoView.vue'),
  meta: {
    title: 'Sobre',
    requiresAuth: false // ← Rota pública
  }
}
```

### Verificar Autenticação em Componente

```vue
<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

// Verificar se está autenticado
if (userStore.isAuthenticated) {
  console.log('Usuário logado:', userStore.userName)
}

// Acessar dados do usuário
console.log(userStore.user)
</script>
```

### Fazer Logout Programaticamente

```typescript
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

function sair() {
  userStore.logout()
  router.push('/login')
}
```

---

## 🔒 Segurança

### ⚠️ Importante: Este é um Sistema de Demonstração

**Credenciais hardcoded** são apenas para **demonstração/desenvolvimento**.

### Para Produção, Implemente:

#### 1. **Backend Real**
```typescript
// src/api/auth.ts
export const authApi = {
  async login(username: string, password: string) {
    const response = await apiClient.post('/auth/login', {
      username,
      password
    })
    return response.data
  },
  
  async logout() {
    await apiClient.post('/auth/logout')
  },
  
  async me() {
    const response = await apiClient.get('/auth/me')
    return response.data
  }
}
```

#### 2. **JWT Token Real**
```typescript
// Salvar token JWT
localStorage.setItem('token', response.data.token)

// Adicionar token em requisições
headers: {
  'Authorization': `Bearer ${token}`
}
```

#### 3. **Validação de Token**
```typescript
// Verificar se token ainda é válido
async function validateToken() {
  try {
    await authApi.me()
    return true
  } catch {
    userStore.logout()
    return false
  }
}
```

#### 4. **Refresh Token**
```typescript
// Renovar token antes de expirar
async function refreshToken() {
  const response = await apiClient.post('/auth/refresh')
  localStorage.setItem('token', response.data.token)
}
```

#### 5. **HTTPS Obrigatório**
- Sempre use HTTPS em produção
- Nunca envie credenciais em HTTP

#### 6. **Rate Limiting**
- Limite tentativas de login
- Implemente CAPTCHA após X tentativas

---

## 🧪 Testando o Sistema

### Cenário 1: Login Bem-Sucedido
1. Acesse `http://localhost:5174/`
2. Será redirecionado para `/login`
3. Digite: `admin` / `1234`
4. Clique em "Entrar"
5. Será redirecionado para `/`

### Cenário 2: Login com Credenciais Inválidas
1. Acesse `/login`
2. Digite credenciais erradas
3. Veja mensagem de erro
4. Campo de senha é limpo automaticamente

### Cenário 3: Acesso Direto a Rota Protegida
1. Faça logout
2. Tente acessar `/about` diretamente
3. Será redirecionado para `/login?redirect=/about`
4. Após login, será redirecionado para `/about`

### Cenário 4: Persistência de Sessão
1. Faça login
2. Feche o navegador
3. Abra novamente
4. Acesse a aplicação
5. Ainda estará logado

### Cenário 5: URL Inválida
1. Acesse `/rota-que-nao-existe`
2. Será redirecionado para `/`
3. Se não autenticado, vai para `/login`

---

## 🎨 Customização

### Alterar Credenciais de Teste

```typescript
// src/views/LoginView.vue
if (username.value === 'admin' && password.value === '1234') {
  // Altere aqui ↑
}
```

### Adicionar Múltiplos Usuários

```typescript
const users = [
  { username: 'admin', password: '1234', name: 'Administrador' },
  { username: 'user', password: 'pass', name: 'Usuário' }
]

const user = users.find(u => 
  u.username === username.value && 
  u.password === password.value
)

if (user) {
  userStore.login({ id: 1, name: user.name, email: `${user.username}@mvp.com` }, 'token')
}
```

### Personalizar Mensagens de Erro

```typescript
// src/views/LoginView.vue
const errorMessages = {
  empty: 'Por favor, preencha todos os campos',
  invalid: 'Usuário ou senha incorretos',
  network: 'Erro de conexão. Tente novamente.'
}
```

---

## 📊 Estrutura de Dados

### User Interface
```typescript
interface User {
  id: number
  name: string
  email: string
  avatar?: string
}
```

### Store State
```typescript
{
  user: User | null,
  isAuthenticated: boolean,
  token: string | null
}
```

### LocalStorage Keys
```typescript
{
  'user': JSON.stringify(User),
  'token': string
}
```

---

## 🐛 Troubleshooting

### Problema: Redirecionamento Infinito
**Causa**: Guard mal configurado  
**Solução**: Verifique se rota `/login` tem `requiresAuth: false`

### Problema: Sessão Não Persiste
**Causa**: `restoreSession()` não está sendo chamado  
**Solução**: Verifique `src/main.ts`

### Problema: Logout Não Funciona
**Causa**: localStorage não está sendo limpo  
**Solução**: Verifique `userStore.logout()`

---

## 📚 Próximos Passos

1. **Integrar com Backend Real**
   - Substituir validação hardcoded por API
   - Implementar JWT

2. **Adicionar Funcionalidades**
   - Recuperação de senha
   - Registro de novos usuários
   - Perfil de usuário

3. **Melhorar Segurança**
   - Criptografia de dados sensíveis
   - Expiração de sessão
   - Logout automático por inatividade

4. **Adicionar Roles/Permissões**
   - Admin, User, Guest
   - Rotas específicas por role

---

**Data de Implementação**: 2025-09-30  
**Status**: ✅ Sistema de autenticação completo e funcional
