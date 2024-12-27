<template>
  <ul class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" v-if="data?.items">
    <li v-for="movie in data.items" :key="movie.id">
      <CardComponent :movie="movie"></CardComponent>
    </li>
  </ul>
  <p v-else>Loading...</p>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import type { Response } from '@/types/response.ts'
import type { Movie } from '@/types/movies.ts'
import CardComponent from '@/components/card.vue'

export default defineComponent({
  name: 'MainComponent',
  components: { CardComponent },
  setup() {
    const data = ref<Response<Movie> | null>(null)

    const fetchData = async () => {
      try {
        const response = await fetch(new URL('../assets/db/data.json', import.meta.url))

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
