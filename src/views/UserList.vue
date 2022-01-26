<template>
  <div class="user-list-view">
    <h1>ÁREA DE LISTAGEM DE PESSOAS</h1>
    <router-link :to="{ name: 'register' }"> Ir para Registro </router-link>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      name: "UserList",
    };
  },
};
</script>

<style scoped>
.user-list-view {
  text-align: center;
}
</style>