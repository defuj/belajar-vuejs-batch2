<script setup>
import { RouterLink } from 'vue-router'
import { Facebook, Twitter, Github, Linkedin, Instagram } from '@/components/icons'

const menus = [
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Features',
    path: '/features'
  },
  {
    name: 'Blog',
    path: '/blog'
  },
  {
    name: 'Resources',
    path: '/resources'
  },
  {
    name: 'Partners',
    path: '/partmers'
  },
  {
    name: 'Help',
    path: '/help'
  },
  {
    name: 'Terms',
    path: '/terms'
  }
]
</script>
<template>
  <footer>
    <div class="container !py-20">
      <div class="py-12">
        <div class="flex flex-col items-center justify-center space-y-8">
          <img src="@/assets/images/logo.png" alt="logo" class="w-[165px]" />

          <div class="flex flex-col items-center justify-center space-y-6">
            <nav class="flex flex-row space-x-10">
              <RouterLink
                v-for="menu in menus"
                :to="menu.path"
                class="font-medium leading-6 text-dark-grey-600 texx-sm"
              >
                {{ menu.name }}
              </RouterLink>
            </nav>

            <nav class="flex flex-row space-x-10">
              <Facebook />
              <Twitter />
              <Github />
              <Linkedin />
              <Instagram />
            </nav>
          </div>

          <p class="mt-6 text-sm font-medium leading-5 text-center text-dark-grey-600">
            © 2023 Horizon UI Library. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
