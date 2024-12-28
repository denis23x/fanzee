<template>
  <ul class="flex gap-2">
    <li :class="ratingColor">
      <svg width="8" height="8" viewBox="0 0 8 8">
        <use xlink:href="../assets/icons/sprite.svg#icon-star"></use>
      </svg>
      <span>{{ ratingValue }}</span>
    </li>
    <li class="bg-blue">
      <svg width="8" height="8" viewBox="0 0 8 8">
        <use xlink:href="../assets/icons/sprite.svg#icon-tape"></use>
      </svg>
      <span class="first-letter:uppercase">{{ movie.genre }}</span>
    </li>
    <li class="bg-purple">
      <svg width="8" height="8" viewBox="0 0 8 8">
        <use xlink:href="../assets/icons/sprite.svg#icon-play"></use>
      </svg>
      <span>{{ movie.duration }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'TagsComponent',
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const ratingValue = computed(() => {
      return (Math.round(props.movie.rating * 10) / 10).toFixed(1)
    })

    const ratingColor = computed(() => {
      if (props.movie.rating <= 4) {
        return 'bg-red'
      } else if (props.movie.rating > 4 && props.movie.rating <= 7) {
        return 'bg-purple'
      } else if (props.movie.rating > 7) {
        return 'bg-green'
      }

      return ''
    })

    return {
      ratingValue,
      ratingColor,
    }
  },
})
</script>

<style scoped>
ul {
  li {
    @apply flex items-center gap-0.5 py-0.5 px-1.5 rounded-lg;

    svg {
      @apply size-2 text-white;
    }

    span {
      @apply text-[11px] font-medium leading-[13px] h-[13px] text-white;
    }
  }
}
</style>
