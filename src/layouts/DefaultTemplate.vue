<template>
  <div>
    <header-component />
    <section>
      <router-view></router-view>
    </section>
    <footer-component />
  </div>
</template>

<script setup>
import HeaderComponent from '@/layouts/components/HeaderComponent.vue'
import FooterComponent from '@/layouts/components/FooterComponent.vue'

</script>