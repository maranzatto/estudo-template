<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
</script>

<template>
    <div class="flex items-center gap-2">
        <!-- Botão de toggle simples -->
        <button
            @click="themeStore.toggleTheme()"
            class="btn btn-ghost"
            :title="`Tema atual: ${themeStore.theme}`"
        >
            <span class="text-xl">{{ themeStore.themeIcon }}</span>
        </button>

        <!-- Dropdown de seleção de tema -->
        <select
            v-model="themeStore.theme"
            @change="themeStore.setTheme(themeStore.theme)"
            class="input py-1.5 text-sm"
        >
            <option value="light">☀️ Claro</option>
            <option value="dark">🌙 Escuro</option>
            <option value="auto">🌓 Auto</option>
        </select>
    </div>
</template>
