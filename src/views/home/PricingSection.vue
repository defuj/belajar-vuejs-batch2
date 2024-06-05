<script setup>
import { Thunder } from '@/assets/images'
</script>

<template>
  <section id="pricing">
    <div class="container grid grid-cols-2 gap-[110px]">
      <div class="grid grid-cols-2 gap-y-15 gap-x-10">
        <div class="col-span-2">
          <h1 class="text-3xl font-extrabold leading-8 text-dark-grey-900">
            Boost your workflow with Horizon
          </h1>
          <p class="mt-2 text-base font-medium leading-6 text-dark-grey-600">
            Urna duis convallis convallis tellus interdum velit laoreet pentesque aliquam tortor
            consequat porta.
          </p>
        </div>

        <div>
          <h1 class="text-4xl font-extrabold leading-8 text-dark-grey-900">340+</h1>
          <p class="text-base font-bold leading-8 text-dark-grey-900">Successful Projects</p>
          <p class="text-base font-medium leading-8 text-dark-grey-600">
            Urna duis convallis convallis tellus interdum velit laoreet.
          </p>
        </div>

        <div>
          <h1 class="text-4xl font-extrabold leading-8 text-dark-grey-900">$10m</h1>
          <p class="text-base font-bold leading-8 text-dark-grey-900">Annual Percentage Rate</p>
          <p class="text-base font-medium leading-8 text-dark-grey-600">
            Urna duis convallis convallis tellus interdum velit laoreet.
          </p>
        </div>

        <div>
          <h1 class="text-4xl font-extrabold leading-8 text-dark-grey-900">2.8k+</h1>
          <p class="text-base font-bold leading-8 text-dark-grey-900">Clients Worldwide</p>
          <p class="text-base font-medium leading-8 text-dark-grey-600">
            Urna duis convallis convallis tellus interdum velit laoreet.
          </p>
        </div>

        <div>
          <h1 class="text-4xl font-extrabold leading-8 text-dark-grey-900">7000+</h1>
          <p class="text-base font-bold leading-8 text-dark-grey-900">Daily Visits</p>
          <p class="text-base font-medium leading-8 text-dark-grey-600">
            Urna duis convallis convallis tellus interdum velit laoreet.
          </p>
        </div>
      </div>
      <div class="flex items-center justify-end">
        <img :src="Thunder" alt="thunder-bolt" srcset="" />
      </div>
    </div>
  </section>
</template>
