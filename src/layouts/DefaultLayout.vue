<template>
  <div class="flex flex-col min-h-screen pt-4 w-4/5 mx-auto gap-4">
    <TheHeader />
    <main class="bg-white rounded-lg p-6">
      <span class="font-bold text-3xl">{{ $route.meta.title }}</span>
      <div class="pt-6">
        <slot />
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import TheHeader from '@/components/TheHeader.vue';
</script>
