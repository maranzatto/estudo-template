import { ref, computed } from 'vue';

/**
 * Composable para gerenciar um contador
 * 
 * @param initialValue - Valor inicial do contador (padrão: 0)
 * @param step - Valor do incremento/decremento (padrão: 1)
 * @returns Objeto com o estado e métodos do contador
 */
export function useCounter(initialValue: number = 0, step: number = 1) {
  // Estado reativo do contador
  const count = ref(initialValue);

  // Computed property - valor calculado automaticamente
  // Útil para valores derivados do estado
  const isPositive = computed(() => count.value > 0);
  const isNegative = computed(() => count.value < 0);
  const isZero = computed(() => count.value === 0);

  // Métodos para manipular o contador
  function increment() {
    count.value += step;
  }

  function decrement() {
    count.value -= step;
  }

  function reset() {
    count.value = initialValue;
  }

  function set(value: number) {
    count.value = value;
  }

  function double() {
    count.value *= 2;
  }

  // Retornamos tudo que queremos expor
  // Convenção: retornar um objeto com o estado e métodos
  return {
    // Estado
    count,
    
    // Computed properties
    isPositive,
    isNegative,
    isZero,
    
    // Métodos
    increment,
    decrement,
    reset,
    set,
    double
  };
}
