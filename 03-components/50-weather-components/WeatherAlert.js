import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherAlert',

  props: {
    alert: {
      type: Object,
      required: true,
      validator: value => Object.hasOwn(value, 'sender_name') && Object.hasOwn(value, 'description'),
    },
  },

  template: `
        <div class="weather-alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">{{ alert.sender_name }}: {{ alert.description }}</span>
        </div>
    `,
})
