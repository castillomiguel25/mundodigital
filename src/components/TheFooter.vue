<template>
  <div>
    <footer class="footer cursor">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center mt-3 subtitle">Redes Sociales</div>
        </div>
        <div class="row">
          <div class="col text-center mt-3 mb-2">
            <i class="fab fa-instagram icons"></i>
            <i class="fab fa-facebook-square icons"></i>
            <i class="fab fa-whatsapp icons"></i>
            <i class="fab fa-linkedin icons"></i>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {}
  }
}
</script>

<style scoped>
.footer {
  background: black;
  color: #14C582;
}

.subtitle {
  color: white !important;
}
.spaced {
  height: 300px;
}

.icons{
    margin-left: 10px;
    cursor: pointer !important;
}

</style>
