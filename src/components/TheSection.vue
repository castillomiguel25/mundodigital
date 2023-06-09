<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center mt-5">
        <h1>Selecciona el Servicio que Deseas!</h1>
      </div>
    </div>

    <!-- one page -->
    <div class="row">
      <div class="col-lg-6 col-12 text-center px-5 mt-5">
        <h3>Simple & Atractivo</h3>
        <h1>ONE PAGE</h1>
        <p>
          Si quieres que tu negocio esté en Internet, puedes hacerlo a través de una one page. Así,
          exhibirás de manera atractiva y ordenada la información que necesites mostrar. ¡Genera
          tráfico a tu sitio web y así conseguirás más leads!
        </p>

        <router-link to="/init">
          <button class="btn-join-home">Solicitar ahora</button>
        </router-link>
      </div>
      <div class="col-12 col-lg-6 col-md-6 text-left px-5 mt-3">
        <img class="img-section" src="../assets/lapto.webp" alt="section-img" />
      </div>
    </div>

    <!-- corparation -->

    <div class="row text-center">
      <div class="col-lg-6 col-12 text-left px-5">
        <img class="img-section" src="../assets/web-corporativa.png" alt="section-img" />
      </div>
      <div class="col-lg-6 col-12 px-5 mt-5">
        <h3>Moderno y Atractivo</h3>
        <h1>PÁGINA CORPORATIVA</h1>
        <p>
          ¡Dale a tu empresa la presencia en línea que se merece con una página web corporativa de
          alto impacto!. <br />
          En nuestra agencia de diseño web, creamos sitios web personalizados y profesionales que
          reflejan la identidad y los valores de tu empresa.
        </p>

        <router-link to="/init">
          <button class="btn-join-home">Solicitar ahora</button>
        </router-link>
      </div>
    </div>

    <!-- E-COMMERCE -->

    <div class="row text-center">
      <div class="col-lg-6 col-12 px-5 mt-5 mb-5">
        <h3>Simple & Atractivo</h3>
        <h1>Tienda En-Linea</h1>
        <p>
          ¡Abre las puertas de tu negocio en línea con una tienda virtual WooCommerce de alto
          rendimiento! <br> Tenemos desde la configuración inicial hasta la integración de pasarelas de
          pago seguras y la optimización del catálogo de productos, nos encargamos de todos los
          aspectos técnicos para que puedas concentrarte en hacer crecer tu negocio. Ofrecemos
          diseños atractivos, una experiencia de compra intuitiva y funcionalidades avanzadas que
          harán que tus clientes vuelvan una y otra vez.
        </p>

        <router-link to="/init">
          <button class="btn-join-home">Solicitar ahora</button>
        </router-link>
      </div>
      <div class="col-12 col-lg-6 col-md-6 text-left px-5 mt-3">
        <img class="img-section" src="../assets/E-Commerce.png" alt="section-img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheSection'
}
</script>

<style>
.img-section {
  height: 500px;
  width: 500px;
}
@media screen and (max-width: 600px) {
  .img-section {
    height: 100%;
    width: 100%;
  }
}
</style>
