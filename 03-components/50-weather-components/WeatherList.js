import { defineComponent } from 'vue'
import WeatherCard from './WeatherCard'

export default defineComponent({
  name: 'WeatherList',

  components: {
    WeatherCard,
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  template: `
        <ul class="weather-list unstyled-list">
            <WeatherCard v-for="item in items" :item="item"></WeatherCard>
        </ul>
    `,
})
