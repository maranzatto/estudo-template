import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import configPrettier from 'eslint-config-prettier' // Pacote que desliga regras de estilo conflitantes

// A linha 'import skipFormatting...' FOI REMOVIDA para evitar o conflito de indentação.

export default defineConfigWithVueTs(
    {
        name: 'app/files-to-lint',
        files: ['**/*.{ts,mts,tsx,vue}'],
    },

    globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

    // Configurações base
    pluginVue.configs['flat/essential'],
    vueTsConfigs.recommended,

    // Regra para testes (Vitest)
    {
        ...pluginVitest.configs.recommended,
        files: ['src/**/__tests__/*'],
    },

    // *** ESTE É O PASSO CHAVE: Adiciona o Prettier para DESLIGAR as regras conflitantes do ESLint ***
    configPrettier,
    // O Prettier agora fará a formatação, e o ESLint não tentará interferir na indentação.
)
