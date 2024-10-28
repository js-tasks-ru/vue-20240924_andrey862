import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const minValue = 0
    const maxValue = 5

    const counter = ref(0)

    const increaseCounter = () => {
      if (counter.value >= maxValue) {
        return
      }

      counter.value += 1
    }

    const decreaseCounter = () => {
      if (counter.value <= minValue) {
        return
      }

      counter.value -= 1
    }

    return {
      counter,
      minValue,
      maxValue,
      increaseCounter,
      decreaseCounter,
    }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        :disabled="counter <= minValue"
        @click.prevent="decreaseCounter"
      >➖</button>

      <span class="count" data-testid="count">{{ counter }}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        :disabled="counter >= maxValue"
        @click.prevent="increaseCounter"
      >➕</button>
    </div>
  `,
})
