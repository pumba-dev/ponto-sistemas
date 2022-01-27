<template>
  <div class="user-list-view">
    <h1 class="user-list-title">Lista de Pessoas Cadastradas</h1>
    <UserTable
      :users="userList"
      @delete="deleteUser"
      @edit="editUser"
    ></UserTable>
    <router-link :to="{ name: 'register' }"> Ir para Registro </router-link>
  </div>
</template>

<script>
import { reactive, onBeforeMount } from "vue";
import db from "../services/Firestore.js";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import UserTable from "../components/UserTable.vue";

export default {
  components: { UserTable },
  setup() {
    async function getUsers() {
      let userList = [];
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        userList.push(doc.data());
      });
      // console.log(userList);
      return userList;
    }

    const userList = reactive([]);

    onBeforeMount(async () => {
      await getUsers().then((resp) => {
        userList.splice(0, userList.length, ...resp);
      });
    });

    return {
      userList,
    };
  },
  methods: {
    async deleteUser(user) {
      await deleteDoc(doc(db, "users", user.cpf));
      this.$router.go(0);
    },

    editUser() {},
  },
};
</script>

<style scoped>
.user-list-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  justify-content: space-around;
}

.user-list-title {
  font-size: 1.7rem;
  font-weight: bold;
  color: var(--primary-color);
}
</style>