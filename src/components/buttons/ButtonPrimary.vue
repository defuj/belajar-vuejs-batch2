<script setup>
defineProps({
  text: String,
  type: {
    default: 'solid'
  }
})
</script>
<template>
  <button v-if="type == 'solid'" class="py-4 text-white bg-purple-blue-500 rounded-xl px-7">
    {{ text }}
  </button>
  <button
    v-else-if="type == 'outline'"
    class="py-4 bg-white border-2 text-purple-blue-500 border-purple-blue-500 rounded-xl px-7"
  >
    {{ text }}
  </button>
</template>
