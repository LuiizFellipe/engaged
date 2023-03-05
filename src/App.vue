<template>
  <header-app></header-app>
  <router-view />
</template>

<script>
// @ is an alias to /src
import HeaderApp from "@/components/HeaderApp.vue";

export default {
  components: {
    HeaderApp,
  },
};
</script>


<style>
#app {
  font-family: "Rajdhani", sans-serif;
}
.container {
  max-width: 1180px;
  display: flex;
}
.columns {
  width: 100%;
}

header a {
  transition: 0.4s;
  color: black !important;
}
.radius{
  border-radius: 10px;
}
.border-none{
  border:none !important;
}
a:hover {
  font-weight: bold;
  transition: 0.4s;
  text-transform: none !important;
  text-decoration: none !important;
}
</style>