<template>
<q-layout>
  <router-view />
  <Footer />
</q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import Footer from './components/Footer.vue'
export default defineComponent({
  name: 'App',
  components: {
    Footer
  }
})
</script>
<style>
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter';
}
</style>
