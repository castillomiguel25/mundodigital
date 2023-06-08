<template>
  <div>
    <TheMain />
    <TheCars />
    <the-section />
    <the-footer />
  </div>
</template>

<script>
import TheMain from '@/components/TheMain.vue'
import TheCars from '../components/TheCars.vue'
import TheSection from '@/components/TheSection.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheMain,
    TheCars,
    TheSection,
    TheFooter
  }
}
</script>
