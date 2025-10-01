import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useUserStore } from './stores/user'
import { useThemeStore } from './stores/theme'
import './assets/main.css'

// Importar CSS customizado (funciona sem Tailwind)
import './assets/main.css'

const app = createApp(App)

// Configura Pinia primeiro
app.use(createPinia())

// Restaura sessão do localStorage (se existir)
const userStore = useUserStore()
userStore.restoreSession()

// Inicializa tema
const themeStore = useThemeStore()
themeStore.restoreTheme()
themeStore.initSystemPreferenceWatcher()

// Configura router
app.use(router)

app.mount('#app')
