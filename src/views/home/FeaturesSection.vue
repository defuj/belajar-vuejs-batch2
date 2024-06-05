<script setup lang="ts">
import { ButtonPrimary, ButtonSecondary } from '@/components/buttons'
import { Chart, ChevronRight, Mail, User } from '@/components/icons'
</script>

<template>
  <ButtonPrimary />
  <ButtonSecondary />

  <section id="features" class="container">
    <di class="container">
      <div class="py-[120px] w-full flex-col justify-center items-center">
        <h1 class="text-3xl font-extrabold leading-[44px] text-center text-dark-grey-900">
          How Horizon works?
        </h1>
        <p class="mt-3 text-base font-medium leading-8 text-center text-dark-grey-600">
          Tellus rutrum tellus pellentesque eu tincidunt tortor condimentum.
        </p>

        <div class="w-full mt-[60px] flex flex-row justify-between items-center space-x-[40px]">
          <div class="flex flex-row justify-between flex-1 space-x-5">
            <div
              class="flex items-center justify-center w-12 h-12 text-base font-bold leading-8 text-center text-white rounded-full bg-purple-blue-500"
            >
              1
            </div>
            <div class="flex flex-col flex-1">
              <h1 class="text-base font-bold leading-8 text-dark-grey-900">Create your Account</h1>
              <p class="text-base font-medium leading-8 text-dark-grey-600">
                Condimentum vit pellemsque habitant morbi at molestie.
              </p>
            </div>
          </div>

          <ChevronRight class="w-10 h-10 text-dark-grey-600" />

          <div class="flex flex-row justify-between flex-1 space-x-5">
            <div
              class="flex items-center justify-center w-12 h-12 text-base font-bold leading-8 text-center bg-white border-2 rounded-full text-purple-blue-500 border-purple-blue-500"
            >
              2
            </div>
            <div class="flex flex-col flex-1">
              <h1 class="text-base font-bold leading-8 text-dark-grey-900">Create your Account</h1>
              <p class="text-base font-medium leading-8 text-dark-grey-600">
                Condimentum vit pellemsque habitant morbi at molestie.
              </p>
            </div>
          </div>

          <ChevronRight class="w-10 h-10 text-dark-grey-600" />

          <div class="flex flex-row justify-between flex-1 space-x-5">
            <div
              class="flex items-center justify-center w-12 h-12 text-base font-bold leading-8 text-center bg-white border-2 rounded-full text-purple-blue-500 border-purple-blue-500"
            >
              3
            </div>
            <div class="flex flex-col flex-1">
              <h1 class="text-base font-bold leading-8 text-dark-grey-900">Create your Account</h1>
              <p class="text-base font-medium leading-8 text-dark-grey-600">
                Condimentum vit pellemsque habitant morbi at molestie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </di>

    <div>
      <div class="py-[120px] w-full flex-col justify-center items-center">
        <div class="w-full mt-[60px] flex flex-row justify-between items-center">
          <div class="flex flex-col items-center flex-1 py-6 px-9">
            <div class="flex items-center justify-center w-16 h-16 rounded-xl bg-purple-blue-500">
              <Mail />
            </div>

            <h1 class="mt-6 text-2xl font-bold leading-8 text-center text-dark-grey-900">
              Share team inboxes
            </h1>
            <p class="mt-2 text-base font-medium leading-8 text-center text-dark-grey-600">
              Whether you have a team of 2 or 200, our shared team inboxes keep everyone
            </p>
          </div>

          <div class="flex flex-col items-center flex-1 py-6 shadow-2xl px-9 rounded-2xl">
            <div class="flex items-center justify-center w-16 h-16 rounded-xl bg-purple-blue-500">
              <Chart />
            </div>

            <h1 class="mt-6 text-2xl font-bold leading-8 text-center text-dark-grey-900">
              Analytics dashboard
            </h1>
            <p class="mt-2 text-base font-medium leading-8 text-center text-dark-grey-600">
              Whether you have a team of 2 or 200, our shared team inboxes keep everyone
            </p>
          </div>

          <div class="flex flex-col items-center flex-1 py-6 px-9">
            <div class="flex items-center justify-center w-16 h-16 rounded-xl bg-purple-blue-500">
              <User />
            </div>

            <h1 class="mt-6 text-2xl font-bold leading-8 text-center text-dark-grey-900">
              Deliver instant answer
            </h1>
            <p class="mt-2 text-base font-medium leading-8 text-center text-dark-grey-600">
              Whether you have a team of 2 or 200, our shared team inboxes keep everyone
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
