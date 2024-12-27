<template>
  <ul class="flex gap-2">
    <li :class="ratingColor">
      <svg viewBox="0 0 8 8">
        <use xlink:href="../assets/sprite.svg#icon-star"></use>
      </svg>
      <span>{{ ratingValue }}</span>
    </li>
    <li class="bg-blue">
      <svg viewBox="0 0 8 8">
        <use xlink:href="../assets/sprite.svg#icon-tape"></use>
      </svg>
      <span class="first-letter:uppercase">{{ movie.genre }}</span>
    </li>
    <li class="bg-purple">
      <svg viewBox="0 0 8 8">
        <use xlink:href="../assets/sprite.svg#icon-play"></use>
      </svg>
      <span>{{ movie.duration }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TagsComponent',
  computed: {
    ratingValue() {
      return (Math.round(this.movie.rating * 10) / 10).toFixed(1)
    },
    ratingColor() {
      if (this.movie.rating <= 4) {
        return 'bg-red'
      } else if (this.movie.rating > 4 && this.movie.rating <= 7) {
        return 'bg-purple'
      } else if (this.movie.rating > 7) {
        return 'bg-green'
      }

      return ''
    },
  },
  props: {
    movie: {
      type: Object,
      required: true,
    },
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
