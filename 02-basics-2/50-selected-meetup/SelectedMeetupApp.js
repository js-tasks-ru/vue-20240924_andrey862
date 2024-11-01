import { defineComponent, ref, reactive, watch, onMounted } from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const meetupId = ref(1)
    const meetupData = reactive({})

    const decreaseMeetupId = () => {
      if (meetupId.value <= 1) {
        return
      }

      meetupId.value--
    }

    const increaseMeetupId = () => {
      if (meetupId.value >= 5) {
        return
      }

      meetupId.value++
    }

    const updateMeetup = async meetupId => {
      try {
        const result = await getMeetup(meetupId.toString())

        for (let key in result) {
          meetupData[key] = result[key]
        }
      } catch (e) {
        //todo
      }
    }

    watch(meetupId, value => {
      updateMeetup(value)
    })

    onMounted(() => {
      updateMeetup(meetupId.value)
    })

    return {
      meetupId,
      meetupData,
      decreaseMeetupId,
      increaseMeetupId,
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button class="button button--secondary" type="button" @click.prevent="decreaseMeetupId" :disabled="meetupId <= 1">Предыдущий</button>

        <div class="radio-group" role="radiogroup">
          <div class="radio-group__button">
            <input
              id="meetup-id-1"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="1"
              v-model="meetupId"
            />
            <label for="meetup-id-1" class="radio-group__label">1</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-2"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="2"
              v-model="meetupId"
            />
            <label for="meetup-id-2" class="radio-group__label">2</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-3"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="3"
              v-model="meetupId"
            />
            <label for="meetup-id-3" class="radio-group__label">3</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-4"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="4"
              v-model="meetupId"
            />
            <label for="meetup-id-4" class="radio-group__label">4</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-5"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="5"
              v-model="meetupId"
            />
            <label for="meetup-id-5" class="radio-group__label">5</label>
          </div>
        </div>

        <button class="button button--secondary" type="button" @click.prevent="increaseMeetupId" :disabled="meetupId >= 5">Следующий</button>
      </div>

      <div class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{ meetupData.title }}</h1>
        </div>
      </div>

    </div>
  `,
})
