<template>
  <div>
    <img class="icon" src="../assets/Wha.png" alt="icons whatsapp" @click="openChat">
    <span class="message-badge">1</span>
    <TheMain />
    <TheCars />
    <the-section />
    <the-footer />

    <TheWhatsappVue v-if="showChat" @close="showChat = false" @openWhatsApp="openWhatsApp" />
  </div>
</template>

<script>
import TheMain from '@/components/TheMain.vue'
import TheCars from '../components/TheCars.vue'
import TheSection from '@/components/TheSection.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheWhatsappVue from '../components/TheWhatsapp.vue'

export default {
  components: {
    TheWhatsappVue,
    TheMain,
    TheCars,
    TheSection,
    TheFooter
  },
  data() {
    return {
      showChat: false
    }
  },
  methods: {
    openChat() {
      if (this.showChat === false) {
        this.showChat = true
      }
      else {
        this.showChat = false
      }
    },
    openWhatsApp() {
      window.open('https://api.whatsapp.com/send?phone=04124431994&text=Hola%2C%20necesito%20ayuda', '_blank');
    }
  },
  mounted() {
    const icon = document.querySelector('.icon');
    const badge = document.querySelector('.message-badge');

    icon.addEventListener('click', () => {
      badge.style.display = 'none';
    });
  }
}

</script>

<style>
.icon {
  z-index: 1;
  position: fixed;
  bottom: 12px;
  height: 80px;
  width: 80px;
  right: 10px;
}
.message-badge {
  right: 10px;
  position: fixed;
  z-index: 3;
  display: flex;
  bottom: 12px;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: red;
  color: white;
  font-size: 12px;
  border-radius: 50%;
}
</style>
