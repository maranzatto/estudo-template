/**
 * Declarações de tipos para componentes Vue
 * Ajuda o TypeScript a reconhecer imports de arquivos .vue
 */

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}
