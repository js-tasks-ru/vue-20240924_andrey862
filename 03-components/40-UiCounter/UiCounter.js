import { defineComponent } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
      required: true,
    },

    min: {
      type: Number,
      required: false,
      default: 0,
    },

    max: {
      type: Number,
      required: false,
      default: Infinity,
    },
  },

  emits: ['update:count'],

  setup(props, context) {
    const onDecreaseCount = () => {
      if (props.count <= props.min) {
        return
      }

      context.emit('update:count', props.count - 1)
    }

    const onIncreaseCount = () => {
      if (props.count >= props.max) {
        return
      }

      context.emit('update:count', props.count + 1)
    }

    return {
      onDecreaseCount,
      onIncreaseCount,
    }
  },

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement" @click="onDecreaseCount" :disabled="count <= min">➖</UiButton>
      <span class="count" data-testid="count">{{ count }}</span>
      <UiButton aria-label="Increment" @click="onIncreaseCount" :disabled="count >= max">➕</UiButton>
    </div>
  `,
})
