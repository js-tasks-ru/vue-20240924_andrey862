import { defineComponent, createApp } from 'vue'

const App = defineComponent({
  name: 'DateApp',

  setup() {
    const options = {
      dateStyle: 'long',
    }

    const dateFormatted = new Date().toLocaleDateString('ru-RU', options)

    return {
      dateFormatted,
    }
  },

  template: `
          <h1>Сегодня {{ dateFormatted }}</h1>
    `,
})

const app = createApp(App)

app.mount('#app')
