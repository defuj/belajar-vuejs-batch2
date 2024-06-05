<script setup lang="ts">
import { Moon, Phone } from '@/components/icons'
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div class="container grid items-center justify-center w-full grid-cols-3 py-6">
      <div class="flex items-center justify-start">
        <img class="w-[156px]" src="@/assets/images/logo.png" alt="logo" />
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
  <main>
    <section id="product" class="container max-h-lvh">
      <div class="grid w-full grid-cols-2 gap-24">
        <div class="flex flex-col items-start justify-center space-y-6">
          <div class="max-w-[80%]">
            <p class="text-sm text-purple-500 font-bold leading-5 tracking-[3.08px]">
              <Moon class="inline w-5 h-5 mr-3" /> TRENDIEST TAILWIND TEMPLATES
            </p>
            <h1 class="text-6xl font-extrabold leading-[60px] text-dark-grey-900 mt-3">
              Take your website to the next level with Horizon UI
            </h1>
          </div>

          <p class="text-base font-medium leading-8 text-dark-grey-600 max-w-[60%]">
            Save hundreds of hours trying to create and develop a dashboard from scratch. The
            fastest, most responsive & trendiest dashboard is here. Seriously.
          </p>

          <div class="flex flex-row space-x-3">
            <RouterLink
              to="/register"
              class="px-6 py-4 text-sm font-bold leading-6 text-white rounded-xl bg-purple-blue-500"
              >Get Started Now</RouterLink
            >
            <RouterLink
              to="/login"
              class="px-6 py-4 text-sm font-medium leading-6 bg-white rounded-xl text-dark-grey-900"
            >
              <Phone class="inline w-6 h-6 mr-3" />
              Book a free call</RouterLink
            >
          </div>
        </div>
        <div class="flex justify-end">
          <img src="@/assets/images/home-banner.png" alt="home-banner" class="w-[80%]" />
        </div>
      </div>
    </section>

    <section id="features" class="container">
      <div class="py-[120px] w-full flex-col justify-center items-center">
        <h1 class="text-3xl font-extrabold leading-[44px] text-center text-dark-grey-900">
          How Horizon works?
        </h1>
        <p class="mt-3 text-base font-medium leading-8 text-center text-dark-grey-600">
          Tellus rutrum tellus pellentesque eu tincidunt tortor condimentum.
        </p>
      </div>
    </section>
  </main>
</template>
