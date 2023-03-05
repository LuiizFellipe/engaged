<template>
  <header class="navbar">
    <div class="container">
      <section class="navbar-section">
        <img class="logo" src="../assets/logo.svg" />
        <router-link to="/">Home</router-link>
      </section>
      <section class="navbar-section">
        <div class="input-group input-inline">
          <input class="form-input radius" type="text" placeholder="Ricky" />
          <button class="btn mx-1 bg-dark radius border-none input-group-btn">
            Pesquisar
          </button>
        </div>
      </section>
    </div>
  </header>
</template>

<style>
header {
  height: 90px;
  margin-bottom: 50px;
  background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,56,92,1) 100%);   
}
header img {
  width: 50px;
  margin-right: 50px;
}
</style>