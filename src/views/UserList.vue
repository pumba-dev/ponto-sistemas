<template>
  <div class="user-list">
    <ViewTitle title="Lista de Pessoas Cadastradas"></ViewTitle>

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
// Components
import ViewTitle from "../components/general/ViewTitle.vue";
import UserTable from "../components/user-list/UserTable.vue";
import NewUserBtn from "../components/buttons/AddUserBtn.vue";
import Update from "../components/popup/Update.vue";
import DeleteConfirm from "../components/popup/ConfirmDelete.vue";

// Composition API
import { reactive, onBeforeMount } from "vue";

// Firestore
import db from "../services/Firestore.js";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";

export default {
  components: { ViewTitle, UserTable, NewUserBtn, Update, DeleteConfirm },
  setup() {
    async function getUsers() {
      let userList = [];

      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        userList.push(doc.data());
      });

      return userList;
    }

    const userList = reactive([]);

    onBeforeMount(async () => {
      await getUsers().then((resp) => {
        userList.splice(0, userList.length, ...resp);
      });
    });

    return { userList };
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

    editUser(user) {
      this.userID = user.cpf;
      this.showUpdate = true;
    },

    async deleteUser() {
      await deleteDoc(doc(db, "users", this.userID));
      this.$router.go(0);
    },
  },
};
</script>

<style scoped>
.user-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}
</style>