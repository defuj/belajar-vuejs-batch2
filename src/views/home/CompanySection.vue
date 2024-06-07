<script setup>
import { Avatar1 } from '@/assets/images'
import { Testimoni } from '@/components'
import { ButtonPrimary } from '@/components/buttons'

const testimonis = [
  {
    desc: 'A must needed kit for every single software arhitect. It makes your coding life easier and your final product will be blooming.',
    name: 'Tiana Schleifer',
    job: 'CEO & Founder',
    image: Avatar1
  },
  {
    desc: 'A must needed kit for every single software arhitect. It makes your coding life easier and your final product will be blooming.',
    name: 'Tiana Schleifer',
    job: 'CEO & Founder',
    image: Avatar1
  }
]
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
        <Testimoni
          v-for="testimoni in testimonis"
          :desc="testimoni.desc"
          :name="testimoni.name"
          :job="testimoni.job"
          :image="testimoni.image"
        />
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
