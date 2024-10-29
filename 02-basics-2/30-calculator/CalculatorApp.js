import { ref, computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const x = ref(0)
    const y = ref(0)
    const operator = ref('sum')

    const result = computed(() => {
      const val1 = x.value
      const val2 = y.value
      const operatorValue = operator.value

      switch (operatorValue) {
        case 'sum':
          return val1 + val2
        case 'subtract':
          return val1 - val2
        case 'multiply':
          return val1 * val2
        case 'divide':
          return val1 / val2
        default:
          return 0
      }
    })

    return {
      x,
      y,
      operator,
      result,
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="x"/>

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="operator"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="operator"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="operator"/>✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="operator"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="y"/>

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
