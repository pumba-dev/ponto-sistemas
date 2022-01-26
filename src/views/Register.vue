<template>
  <div class="register-view">
    <h1>ÁREA DE REGISTRO DE PESSOAS</h1>
    <router-link :to="{ name: 'user-list' }"> Ir para Listagem </router-link>
    <button @click="pushItem(mockUser)">Push</button>
  </div>
</template>

<script>
import db from "../services/Firestore.js";
import { collection, addDoc } from "firebase/firestore";
export default {
  setup() {
    return {
      name: "Register",
    };
  },
  data() {
    return {
      mockUser: {
        name: "Paulo Eduardo",
        phone: "(11) 99999-9999",
        cpf: "999.999.999-99",
      },
    };
  },
  methods: {
    async pushItem(userData) {
      try {
        const docRef = await addDoc(collection(db, "users"), userData);
        console.log("Document written with ID: ", docRef.id);
        console.log(userData);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },
};
</script>

<style scoped>
.register-view {
  text-align: center;
}
</style>