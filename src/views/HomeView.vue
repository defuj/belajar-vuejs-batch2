<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ProductSection from '@/views/home/ProductSection.vue'
import FeaturesSection from '@/views/home/FeaturesSection.vue'
import PricingSection from '@/views/home/PricingSection.vue'
import CompanySection from '@/views/home/CompanySection.vue'
</script>

<template>
  <Header />
  <main>
    <ProductSection />
    <FeaturesSection />
    <PricingSection />
    <CompanySection />
  </main>
  <Footer />
</template>
