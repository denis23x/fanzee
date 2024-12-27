<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-gray text-white sticky top-0 z-10">
    <nav class="max-w-[1440px] mx-auto px-12 py-8">
      <RouterLink to="/">
        <h1>Test Task</h1>
      </RouterLink>
    </nav>
  </header>
  <main class="bg-black">
    <div class="max-w-[1440px] mx-auto py-8 px-12">
      <RouterView />
    </div>
  </main>
  <footer class="bg-gray text-white">
    <div class="flex items-center justify-between max-w-[1440px] mx-auto px-12 py-8">
      <div class="heading-5">Test Task, 2022</div>
      <div>
        <a class="block underline" href="tel:5183632171">518-363-2171</a>
        <span>91 Park St. Fairhope, AL 36532</span>
      </div>
    </div>
  </footer>
</template>
