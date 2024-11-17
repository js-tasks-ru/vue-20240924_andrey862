import { computed, defineComponent } from 'vue'
import { UiAlert, UiContainer } from '@shgk/vue-course-ui'
import MeetupAgenda from './MeetupAgenda.js'
import MeetupDescription from './MeetupDescription.js'
import MeetupCover from './MeetupCover.js'
import MeetupInfo from './MeetupInfo.js'
import './MeetupView.css'

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupAgenda,
    MeetupDescription,
    MeetupCover,
    MeetupInfo,
  },

  props: {
    meetup: {
      type: Object,
    },
  },

  setup: props => {
    const showAgenda = computed(() => props.meetup.agenda.length > 0)
    return {
      showAgenda,
    }
  },

  template: `
    <div>

    <MeetupCover :title="meetup.title" :image="meetup.image"></MeetupCover>

    <UiContainer>
      <div class="meetup">
        <div class="meetup__content">
          <h2>Описание</h2>

          <MeetupDescription :description="meetup.description"></MeetupDescription>

          <h2>Программа</h2>

          <MeetupAgenda v-if="showAgenda" :agenda="meetup.agenda"></MeetupAgenda>
          <UiAlert v-else text="Программа пока пуста..."></UiAlert>
        </div>
        <div class="meetup__aside">
          <MeetupInfo :organizer="meetup.organizer" :place="meetup.place" :date="meetup.date"></MeetupInfo>

          <div class="meetup__aside-buttons"></div>
        </div>
      </div>
    </UiContainer>
  </div>
  `,
})
