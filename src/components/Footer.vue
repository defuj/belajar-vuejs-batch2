<script setup>
import { RouterLink } from 'vue-router'
import { Facebook, Twitter, Github, Linkedin, Instagram } from '@/components/icons'
</script>
<template>
  <footer>
    <div class="container !py-20">
      <div class="py-12">
        <div class="flex flex-col items-center justify-center space-y-8">
          <img src="@/assets/images/logo.png" alt="logo" class="w-[165px]" />

          <div class="flex flex-col items-center justify-center space-y-6">
            <nav class="flex flex-row space-x-10">
              <RouterLink to="/about" class="font-medium leading-6 text-dark-grey-600 texx-sm">
                About
              </RouterLink>

              <RouterLink to="/features" class="font-medium leading-6 text-dark-grey-600 texx-sm">
                Features
              </RouterLink>

              <RouterLink to="/blog" class="font-medium leading-6 text-dark-grey-600 texx-sm">
                Blog
              </RouterLink>

              <RouterLink to="/resources" class="font-medium leading-6 text-dark-grey-600 texx-sm">
                Resources
              </RouterLink>

              <RouterLink to="/partners" class="font-medium leading-6 text-dark-grey-600 texx-sm">
                Partners
              </RouterLink>

              <RouterLink to="/help" class="font-medium leading-6 text-dark-grey-600 texx-sm">
                Help
              </RouterLink>

              <RouterLink to="/terms" class="font-medium leading-6 text-dark-grey-600 texx-sm">
                Terms
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
