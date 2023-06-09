<template>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TheMain from './components/TheMain.vue'
import TheSection from './components/TheSection.vue'
import TheFooter from './components/TheFooter.vue'
export default {
  components: {
    TheMain,
    TheSection,
    TheFooter,
    RouterView,
  }
}
</script>