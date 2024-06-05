<script setup>
import { Avatar1 } from '@/assets/images'
import { ButtonPrimary } from '@/components/buttons'
</script>

<template>
  <section id="company" class="container">
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-3xl font-extrabold leading-9 text-center text-dark-grey-900">
        Customer Testimonials
      </h1>

      <p class="text-center font-medium text-[#68769F] leading-8 max-w-[600px] mt-4">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
        Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>

      <div class="mt-[74px] grid grid-cols-2 gap-x-5">
        <article class="flex flex-col items-center justify-center p-8 bg-grey-200 rounded-2xl">
          <h1 class="font-bold leading-8 text-center text-dark-grey-900">
            “A must needed kit for every single software arhitect. It makes your coding life easier
            and your final product will be blooming.”
          </h1>

          <div class="w-10 h-10 overflow-hidden rounded-full mt-9">
            <img :src="Avatar1" alt="" />
          </div>
          <h1 class="mt-4 text-lg font-extrabold leading-8 text-center text-dark-grey-900">
            Tiana Schleifer
          </h1>
          <p class="text-xs font-medium text-center text-dark-grey-600">CEO & Founder</p>
        </article>

        <article class="flex flex-col items-center justify-center p-8 bg-grey-200 rounded-2xl">
          <h1 class="font-bold leading-8 text-center text-dark-grey-900">
            “A must needed kit for every single software arhitect. It makes your coding life easier
            and your final product will be blooming.”
          </h1>

          <div class="w-10 h-10 overflow-hidden rounded-full mt-9">
            <img :src="Avatar1" alt="" />
          </div>
          <h1 class="mt-4 text-lg font-extrabold leading-8 text-center text-dark-grey-900">
            Tiana Schleifer
          </h1>
          <p class="text-xs font-medium text-center text-dark-grey-600">CEO & Founder</p>
        </article>
      </div>
    </div>
  </section>

  <section class="container">
    <div class="flex justify-between">
      <h1 class="text-3xl leading-9 text-dark-grey-900">
        <span class="inline-block font-extrabold">Save time with Horizon.</span>
        <span class="inline font-medium"><br />Turn your visitors into clients.</span>
      </h1>

      <div class="flex items-center justify-end flex-1 space-x-4">
        <ButtonPrimary text="Try Demo" type="outline" />
        <ButtonPrimary text="Get Started Now" />
      </div>
    </div>
  </section>
</template>
