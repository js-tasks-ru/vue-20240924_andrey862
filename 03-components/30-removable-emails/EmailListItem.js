import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EmailListItem',

  props: {
    email: {
      type: String,
      required: true,
    },

    marked: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['eleteItem'],

  setup(_, context) {
    const onClickDelete = () => context.emit('deleteItem')

    return {
      onClickDelete,
    }
  },

  template: `
    <li :class="{ marked }">
      {{ email }}
      <button type="button" aria-label="Удалить" @click.stop="onClickDelete">❌</button>
    </li>
  `,
})
