import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    let timerId = null
    const time = ref(null)

    const run = () => {
      time.value = getCurrentTimeFormatted()
      timerId = setInterval(() => {
        time.value = getCurrentTimeFormatted()
      }, 1000)
    }

    const stop = () => clearInterval(timerId)

    const getCurrentTimeFormatted = () => new Date().toLocaleTimeString(navigator.language, { timeStyle: 'medium' })

    onMounted(() => run())
    onBeforeUnmount(() => stop())

    return {
      time,
    }
  },

  template: `<div class="clock">{{ time }}</div>`,
})
