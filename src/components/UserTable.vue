<template>
  <table class="ui single line table user-table">
    <thead class="">
      <tr class="">
        <th class="">Nome</th>
        <th class="">CPF</th>
        <th class="">Telefone</th>
        <th class="">Opções</th>
      </tr>
    </thead>
    <tbody class="">
      <tr class="" v-for="(user, index) in users" :key="index">
        <td class="">{{ user.name }}</td>
        <td class="">{{ user.cpf }}</td>
        <td class="">{{ user.phone }}</td>
        <td class="">
          <UserOptions @edit="editUser(user)" @delete="deleteUser(user)" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import UserOptions from "./UserOptions.vue";
export default {
  components: { UserOptions },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  methods: {
    editUser(user) {
      this.$emit("edit", user);
    },
    deleteUser(user) {
      this.$emit("delete", user);
    },
  },
};
</script>

<style scoped>
.user-table {
  width: 70rem;
}
</style>