import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherDetails',

  props: {
    data: {
      type: Object,
    },
  },

  data() {
    const convertHpaPressureToMmhg = press => Math.round(press * 0.75)

    return {
      convertHpaPressureToMmhg,
    }
  },

  template: `
        <div class="weather-details">
            <div class="weather-details__item">
            <div class="weather-details__item-label">Давление, мм рт. ст.</div>
            <div class="weather-details__item-value">{{ convertHpaPressureToMmhg(data.pressure) }}</div>
        </div>
        <div class="weather-details__item">
            <div class="weather-details__item-label">Влажность, %</div>
            <div class="weather-details__item-value">{{ data.humidity }}</div>
        </div>
        <div class="weather-details__item">
            <div class="weather-details__item-label">Облачность, %</div>
            <div class="weather-details__item-value">{{ data.clouds }}</div>
        </div>
        <div class="weather-details__item">
            <div class="weather-details__item-label">Ветер, м/с</div>
            <div class="weather-details__item-value">{{ data.wind_speed }}</div>
            </div>
        </div>
    `,
})
