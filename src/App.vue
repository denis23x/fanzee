<template>
  <header class="bg-gray text-white sticky top-0 z-10">
    <nav class="container">
      <RouterLink to="/">
        <h1>Test Task</h1>
      </RouterLink>
    </nav>
  </header>
  <main class="bg-black">
    <div class="container">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in" class="duration-1000">
          <component :is="Component" />
        </transition>
      </RouterView>
    </div>
  </main>
  <footer class="bg-gray text-white">
    <div class="container flex items-center justify-between">
      <div class="heading-5">Test Task, {{ year }}</div>
      <div>
        <a class="block underline" href="tel:5183632171">518-363-2171</a>
        <span>91 Park St. Fairhope, AL 36532</span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppComponent',
  setup() {
    const year = new Date().getFullYear()

    return {
      year,
    }
  },
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
