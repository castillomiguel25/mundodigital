<template>
  <div class="container">
    <div class="row text-center">
      <div class="col-6 px-5 mt-5">
        <h1 class="txt"><strong>Mundo Digital</strong></h1>
        <h3>holaa</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam neque voluptates impedit
          minus vero magnam quaerat libero itaque provident est, at asperiores omnis eius nemo
          ratione eum cum repellendus harum?
        </p>
        <button class="btn-join-home">
          Solicitar ahora
        </button>
      </div>
      <div class="col-6 text-left px-5 mt-5">
        <img class="img-presentation" src="../assets/principal.png" alt="initial" />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'MiComponente',
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style>

.txt {
  background: -webkit-linear-gradient(0deg, #14C582, black, #14c581a4 );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-stretch: expanded;
  letter-spacing: 2px;
}
.img-presentation {
  height: 450px;
  /* width: 320px; */
}
.btn-join-home {
  color: white;
  background: black;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
