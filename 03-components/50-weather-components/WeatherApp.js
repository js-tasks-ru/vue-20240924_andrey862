import { defineComponent } from 'vue'
import { getWeatherData } from './weather.service.ts'
import WeatherList from './WeatherList.js'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherList,
  },

  data() {
    const weatherDataItems = getWeatherData()

    return {
      weatherDataItems,
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <WeatherList :items="weatherDataItems"></WeatherList>
    </div>
  `,
})
