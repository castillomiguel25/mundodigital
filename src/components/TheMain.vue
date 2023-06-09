<template>
  <div class="container">
    <div class="row t">
      <div class="col-12 col-lg-6 col-md-6 px-5 mt-5 ext-center">
        <h1 class="txt"><strong>Mundo Digital</strong></h1>
        <h3>COMIENZA HOY</h3>
        <h2 class="text-commerce"><strong>¡Diseñamos tu Sitio Web!</strong></h2>
        <div class="col">
          <h4 class="color-red"><strong>Oferta: Tu sitio Web desde 70$</strong></h4>
        </div>
        <p>
          ¡Deslumbra en línea con una página web impresionante! Nuestro equipo de expertos están
          aquí para llevar tu negocio al siguiente nivel. Ofrecemos soluciones personalizadas y
          modernas que reflejan la esencia de tu marca. No pierdas más oportunidades, ¡haz que tu
          presencia en línea brille con una página web excepcional! Contáctanos hoy mismo y descubre
          cómo podemos convertir tus ideas en realidad.
        </p>

        <router-link to="/init">
          <button class="btn-join-home">Solicitar ahora</button>
        </router-link>
      </div>
      <div class="col-12 col-lg-6 col-md-6 text-left px-5 mt-5">
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
@media screen and (max-width: 600px) {
.img-presentation{
  display: none;
}
}

.txt {
  background: -webkit-linear-gradient(0deg, #14c582, black, #14c581a4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-stretch: expanded;
  letter-spacing: 2px;
}

.text-commerce {
  text-shadow: 2px 4px 0px rgba(0, 0, 0, 0.3);
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
  text-shadow: 2px 4px 0px rgba(0, 0, 0, 0.3);
}
.color-red {
  color: red;
}
</style>
