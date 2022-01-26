<template>
  <div class="register-view">
    <h1>ÁREA DE REGISTRO DE PESSOAS</h1>
    <router-link :to="{ name: 'user-list' }"> Ir para Listagem </router-link>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      name: "Register",
    };
  },
};
</script>

<style scoped>
.register-view {
  text-align: center;
}
</style>