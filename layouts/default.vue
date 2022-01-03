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
  .toggle-checkbox:checked {
    @apply: right-0 border-green-400;
    right: 0;
    border-color: #68D391;
  }
  .toggle-checkbox:checked + .toggle-label {
    @apply: bg-green-400;
    background-color: #68D391;
  }
}
</style>