<!-- Nome do componente: CounterDisplay (nome composto) -->
<script setup lang="ts">
// Importando nosso composable useCounter
import { useCounter } from '@/composables';

// Definindo props com TypeScript
interface Props {
  initialCount?: number;
  step?: number;
}

// Definindo as props com tipagem
const props = withDefaults(defineProps<Props>(), {
  initialCount: 0,
  step: 1
});

// Usando o composable useCounter
// Agora toda a lógica do contador está encapsulada no composable
// Isso torna o código mais limpo e reutilizável
const { count, increment, decrement, reset, isPositive, isNegative, isZero, double } = useCounter(
  props.initialCount,
  props.step
);
</script>

<template>
  <div class="card text-center max-w-md mx-auto">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      Contador: {{ count }}
    </h2>
    
    <!-- Mostrando informações baseadas em computed properties -->
    <div class="my-4 min-h-[30px]">
      <span v-if="isPositive" class="badge badge-success">✓ Positivo</span>
      <span v-if="isNegative" class="badge badge-error">✗ Negativo</span>
      <span v-if="isZero" class="badge badge-info">⚬ Zero</span>
    </div>
    
    <div class="flex justify-center gap-3 flex-wrap">
      <button @click="decrement" class="btn bg-red-500 hover:bg-red-600 text-white">
        -
      </button>
      <button @click="reset" class="btn btn-secondary">
        Reset
      </button>
      <button @click="increment" class="btn bg-green-500 hover:bg-green-600 text-white">
        +
      </button>
      <button @click="double" class="btn bg-orange-500 hover:bg-orange-600 text-white">
        ×2
      </button>
    </div>
  </div>
</template>
