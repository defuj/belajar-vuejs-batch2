<script setup lang="ts">
import { Logo } from '@/assets/images'
</script>

<template>
  <header>
    <div class="container grid items-center justify-center w-full grid-cols-3 py-6">
      <div class="flex items-center justify-start">
        <img class="w-[156px]" :src="Logo" alt="logo" />
      </div>
      <div class="flex flex-row items-center justify-center menu">
        <nav class="space-x-12">
          <a href="#product">Product</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#company">Company</a>
        </nav>
      </div>
      <div class="actions">
        <RouterLink to="/login" class="text-sm font-normal leading-6 text-black">Login</RouterLink>
        <RouterLink
          to="/register"
          class="px-4 py-2 rounded-xl bg-[#E9E3FF] text-sm font-bold leading-6 text-purple-500"
          >Sign Up</RouterLink
        >
      </div>
    </div>
  </header>
</template>
