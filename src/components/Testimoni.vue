<script setup>
defineProps({
  desc: String,
  name: String,
  job: String,
  image: String
})
</script>

<template>
  <article class="flex flex-col items-center justify-center p-8 bg-grey-200 rounded-2xl">
    <h1 class="font-bold leading-8 text-center text-dark-grey-900">
      {{ desc }}
    </h1>

    <div class="w-10 h-10 overflow-hidden rounded-full mt-9">
      <img :src="image" alt="" />
    </div>
    <h1 class="mt-4 text-lg font-extrabold leading-8 text-center text-dark-grey-900">
      {{ name }}
    </h1>
    <p class="text-xs font-medium text-center text-dark-grey-600">{{ job }}</p>
  </article>
</template>
