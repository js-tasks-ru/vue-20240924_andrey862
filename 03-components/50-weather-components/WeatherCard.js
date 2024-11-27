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
    const checkUseThemeNight = ({ dt, sunrise, sunset }) => dt < sunrise || dt > sunset

    return {
      checkUseThemeNight,
    }
  },

  template: `
    <li class="weather-card" :class="{'weather-card--night': checkUseThemeNight(item.current)}">
      <WeatherAlert v-if="item.alert" :alert="item.alert"></WeatherAlert>
      <WeatherData :data="item"></WeatherData>
      <WeatherDetails :data="item.current"></WeatherDetails>
    </li>
  `,
})
