<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-lg-4">
        <form
          id="contactForm"
          class="contact-form"
          action="https://formcarry.com/s/0SRqotYRu33"
          method="POST"
          target="_blank"
        >
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              name="nombres"
              id="nombres"
              placeholder="nombre"
            />
          </div>
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              name="apellidos"
              id="apellidos"
              placeholder="apellido"
            />
          </div>
          <div class="form-group">
            <input
              class="form-control"
              type="email"
              name="correo"
              id="correo"
              placeholder="Escribe tu mail"
            />
          </div>
          <div class="form-group">
            <textarea
              class="form-control"
              name="mensaje"
              id="mensaje"
              placeholder="Escribe tu mensaje"
              rows="5"
            ></textarea>
          </div>
          <div class="col text-center">
             <button class="btn btn-register" type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      remember: false
    }
  },
  methods: {
    submitForm() {
      // Lógica para enviar el formulario o realizar validaciones
      console.log('Formulario enviado')
    }
  }
}
</script>

<style scoped>
.img-background {
  background-image: url('../components/icons/IconsBg.jpg');
  background-size: cover;
  height: 600px;
  position: relative;
  filter: grayscale(20%);
}

.btn-register {
  background-color: #14c582;
  color: #ffffff;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;
}

.btn-register:hover {
  background-color: #0da267;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  border-radius: 0;
}

.form-control:focus {
  border-color: #14c582;
  box-shadow: none;
}

.form-control::placeholder {
  color: #999999;
}

textarea.form-control {
  resize: none;
}

@media (max-width: 576px) {
  .col-lg-4 {
    max-width: 100%;
  }
}
</style>