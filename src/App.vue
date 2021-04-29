
<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/tutorials" class="nav-link">Tutoriales</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <h2>Vue Firebase Realtime Database CRUD</h2>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style scoped>
.container h2 {
  text-align: center;
  margin: 25px auto;
}

.gradient-custom {
  /* fallback for old browsers */
  background: #89f7fe;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(137, 247, 254, 0.5), rgba(102, 166, 255, 0.5));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(137, 247, 254, 0.5), rgba(102, 166, 255, 0.5))
}


</style>