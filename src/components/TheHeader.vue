<template>
  <nav class="navbar navbar-expand-lg bg">
    <div class="container-fluid px-5">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mt-1 mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/">
              <a class="nav-link btn-link-header" aria-current="page" href="#">
                Inicio
              </a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style>
body {
  font-family: 8-Bit Madness;
  font-weight: bold !important;
}
</style>

<style scoped>
.bg,
.bg a {
  background: transparent;
  color: #14C582;
  text-decoration: none;
}
.navbar-toggler {
  background: white !important;
}

.btn-link-header {
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
