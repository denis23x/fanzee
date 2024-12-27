<template>
  <RouterLink class="block bg-purple rounded-2xl" :to="`/movie/${movie.id}`">
    <article class="bg-gray grid gap-3 p-3 rounded-2xl transition-transform">
      <img
        class="aspect-[1.74] object-cover object-top h-auto w-full rounded-lg"
        :src="movie.poster"
        :alt="movie.name"
        onerror="this.remove()"
      />
      <div class="grid gap-1">
        <span class="heading-2 line-clamp-1 text-white">{{ movie.name }}</span>
        <p class="line-clamp-2 min-h-8 text-white">{{ movie.description }}</p>
      </div>
      <TagsComponent :movie="movie"></TagsComponent>
    </article>
  </RouterLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TagsComponent from '@/components/tags.vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'CardComponent',
  components: { RouterLink, TagsComponent },
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style scoped>
a:hover {
  article {
    @apply -translate-x-2 -translate-y-2;
  }
}
</style>
