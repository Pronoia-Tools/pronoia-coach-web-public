<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components:{
    Navbar
  }
}
</script>

<style>
@layer components {
  .input {
      @apply border-2 border-gray-300 rounded py-2 px-2;
  }
  .input-icon {
      @apply border-2 border-gray-300 rounded py-2 px-2 pl-8;
  }
  .active-link {
      @apply text-myLightBlue;
  }
}
</style>