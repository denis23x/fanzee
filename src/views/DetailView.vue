<template>
  <div class="flex items-start gap-16" v-if="data">
    <aside class="grid gap-6 text-white max-w-[240px] sticky top-[calc(101.5px+32px)]">
      <h1>{{ data.name }}</h1>
      <img
        class="object-cover h-auto w-full rounded-lg"
        :src="data.poster"
        :alt="data.name"
        onerror="this.remove()"
      />
      <TagsComponent :movie="data"></TagsComponent>
    </aside>
    <div class="grid gap-4 text-white max-w-[340px]">
      <div class="heading-1">Description</div>
      <p>{{ data.description }}</p>
      <div class="heading-1">Trivia</div>
      <ul class="list-disc list-inside">
        <li v-for="trivia in data.trivia" :key="trivia">{{ trivia }}</li>
      </ul>
      <div class="heading-1">Actors</div>
      <ul class="list-disc list-inside">
        <li v-for="actor in data.actors" :key="actor.imdb_id">
          <a
            class="underline"
            :href="`https://www.imdb.com/name/${actor.imdb_id}`"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ actor.name }}
          </a>
        </li>
      </ul>
      <details>
        <summary>Extra height to check aside sticky position</summary>
        <p class="h-[999px]">...</p>
      </details>
    </div>
  </div>
  <p v-else>Loading...</p>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import type { MovieDetails } from '@/types/movies.ts'
import TagsComponent from '@/components/tags.vue'

export default defineComponent({
  name: 'DetailComponent',
  components: { TagsComponent },
  setup() {
    const data = ref<MovieDetails | null>(null)

    const fetchData = async () => {
      try {
        const response = await fetch(new URL('../assets/db/detail.json', import.meta.url))

        if (!response.ok) {
          // TODO: snackbar, toast, ..etc
          // throw new Error('Failed to fetch data')
        }

        data.value = await response.json()
      } catch (error) {
        console.error(error)
      }
    }

    onMounted(() => {
      fetchData()
    })

    return {
      data,
    }
  },
})
</script>
