<template>
  <div class="chat-container">
    <div class="chat-header">WhatsApp Chat</div>
    <div class="chat-content mt-3">
      <p>Hola, ¿necesitas ayuda?</p>
    </div>
    <div class="chat-footer mt-5">
      <a class="whatsapp-link" href="#" @click="openWhatsApp">Abrir Chat</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MiWhats',
  methods: {
    openWhatsApp() {
      this.$emit('openWhatsApp')
    }
  }
}
</script>

<style>
.chat-container {
  position: fixed;
  bottom: 100px;
  right: 20px;
  width: 300px;
  height: 400px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 20;
}

.chat-header {
  padding: 10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-weight: bold;
  color: white;
  background: #008069;
}

.chat-content {
  padding: 20px;
  position: relative;
  min-height: 60px;
  padding: 17px 20px;
  margin: 0 26px 26px;
  border-radius: 32px;
  background: #fff;
  color: #4a4a4a;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
  transform: translateZ(0);
}

.chat-footer {
  width: 170px;
  padding: 10px;
  text-align: right;
  position: relative;
  min-height: 60px;
  padding: 17px 40px;
  margin: 0 26px 26px;
  border-radius: 32px;
  background: #008069;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
}

.chat-footer a {
    color: white;
}

.whatsapp-link {
  color: #007bff;
  text-decoration: none;
}
</style>
