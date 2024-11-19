import { defineComponent } from 'vue'
import { WeatherConditionIcons } from './weather.service.ts'

export default defineComponent({
  name: 'WeatherData',

  props: {
    data: {
      type: Object,
    },
  },

  data() {
    const convertKelvinToCelcius = temp => (Math.round((temp - 273.15) * 10) / 10).toFixed(1)

    return {
      WeatherConditionIcons,
      convertKelvinToCelcius,
    }
  },

  template: `
        <div>
            <h2 class="weather-card__name">{{ data.geographic_name }}</h2>
            <div class="weather-card__time">{{ data.current.dt }}</div>
        </div>
        <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="data.current.weather.description">
                {{ WeatherConditionIcons[data.current.weather.id] }}
            </div>
            <div class="weather-conditions__temp">{{ convertKelvinToCelcius(data.current.temp) }} °C</div>
        </div>
    `,
})
