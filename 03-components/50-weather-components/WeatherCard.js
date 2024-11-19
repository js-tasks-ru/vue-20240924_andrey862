import { defineComponent } from 'vue'
import WeatherAlert from './WeatherAlert'
import WeatherData from './WeatherData'
import WeatherDetails from './WeatherDetails'

export default defineComponent({
  name: 'WeatherCard',

  components: {
    WeatherAlert,
    WeatherData,
    WeatherDetails,
  },

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  data() {
    const getWeatherCardClassName = ({ dt, sunrise, sunset }) => {
      const className = ['weather-card']

      if (dt < sunrise || dt > sunset) {
        className.push('weather-card--night')
      }

      return className.join(' ')
    }

    return {
      getWeatherCardClassName,
    }
  },

  template: `
        <li :class="getWeatherCardClassName(item.current)">
            <WeatherAlert v-if="item.alert" :alert="item.alert"></WeatherAlert>
            <WeatherData :data="item"></WeatherData>
            <WeatherDetails :data="item.current"></WeatherDetails>
        </li>
    `,
})
