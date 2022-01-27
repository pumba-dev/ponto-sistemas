<template>
  <div class="user-list-view">
    <h1 class="user-list-title">Lista de Pessoas Cadastradas</h1>

    <UserTable
      :users="userList"
      @delete="setupToDelete"
      @edit="editUser"
    ></UserTable>

    <NewUserBtn @click="this.$router.push({ name: 'register' })"></NewUserBtn>

    <Update
      :userID="userID"
      :showUpdate="showUpdate"
      @hideUpdate="showUpdate = false"
      @userUpdated="this.$router.go(0)"
    ></Update>
    <DeleteConfirm
      :showDeleteConfirm="showDeleteConfirm"
      @hideDelete="showDeleteConfirm = false"
      @delete="deleteUser"
    ></DeleteConfirm>
  </div>
</template>

<script>
import { reactive, onBeforeMount } from "vue";
import db from "../services/Firestore.js";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import UserTable from "../components/user-list/UserTable.vue";
import Update from "../components/user-list/Update.vue";
import DeleteConfirm from "../components/user-list/DeleteConfirm.vue";
import NewUserBtn from "../components/user-list/NewUserBtn.vue";

export default {
  components: { UserTable, Update, DeleteConfirm, NewUserBtn },
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
  data() {
    return {
      userID: "",
      showUpdate: false,
      showDeleteConfirm: false,
    };
  },
  methods: {
    setupToDelete(user) {
      this.userID = user.cpf;
      this.showDeleteConfirm = true;
    },

    async deleteUser() {
      await deleteDoc(doc(db, "users", this.userID));
      this.$router.go(0);
    },

    editUser(user) {
      this.userID = user.cpf;
      this.showUpdate = true;
    },
  },
};
</script>

<style scoped>
.user-list-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}

.user-list-title {
  font-size: 1.7rem;
  font-weight: bold;
  color: var(--primary-color);
}
</style>