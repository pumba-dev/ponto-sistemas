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
@media (min-width: 767px) {
  .user-table {
    width: 40rem;
  }
}

@media (min-width: 1024px) {
  .user-table {
    width: 50rem;
  }
}

@media (min-width: 1440px) {
  .user-table {
    width: 60rem;
  }
}

@media (min-width: 2560px) {
  .user-table {
    width: 70rem;
  }
}
</style>