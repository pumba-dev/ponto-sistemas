<template>
  <div class="register-view">
    <h1 class="register-title">Cadastro de Novas Pessoas</h1>

    <Alert v-show="alert.show" :Alert="alert"></Alert>

    <form
      class="register-form"
      :class="['ui', alert.type, 'form']"
      @submit.prevent="submitUser"
    >
      <div class="field" :class="{ error: inputErr.name }">
        <label>Nome</label>
        <input
          placeholder="Insira seu nome"
          type="text"
          maxlength="20"
          v-model="user.name"
        />
      </div>

      <div class="field" :class="{ error: inputErr.cpf }">
        <label>CPF</label>
        <input
          placeholder="Insira seu CPF"
          type="text"
          v-model="user.cpf"
          v-mask="'###.###.###-##'"
        />
      </div>

      <div class="field" :class="{ error: inputErr.phone }">
        <label>Telefone</label>
        <input
          placeholder="Insira seu Número"
          type="text"
          v-model="user.phone"
          v-mask="'(##) #####-####'"
        />
      </div>

      <SubmitFormBtn type="submit"></SubmitFormBtn>
    </form>

    <router-link :to="{ name: 'user-list' }"> Ir para Listagem </router-link>
  </div>
</template>

<script>
import db from "../services/Firestore.js";
import { collection, addDoc } from "firebase/firestore";
import Alert from "../components/Alert.vue";
import SubmitFormBtn from "../components/SubmitFormBtn.vue";
export default {
  components: { Alert, SubmitFormBtn },
  setup() {
    return {
      name: "Register",
    };
  },
  data() {
    return {
      user: {
        name: "",
        cpf: "",
        phone: "",
      },
      inputErr: {
        name: false,
        cpf: false,
        phone: false,
      },
      alert: {
        show: false,
        type: "",
        title: "",
        message: "",
      },
    };
  },
  methods: {
    submitUser() {
      const user = this.user;

      if (this.userIsValid()) {
        this.pushUserOnDatabase(user);
        this.resetAlerts();
        this.showAlert(
          "success",
          "Nova Pessoa Cadastrada!",
          "Você será redirectionado para página de listagem"
        );
        setTimeout(() => {
          this.$router.push({ name: "user-list" });
        }, 4000);
      } else {
        this.verifyInputErr();
      }
    },

    userIsValid() {
      const user = this.user;
      return (
        user.name.length >= 5 &&
        user.cpf.length == 14 &&
        user.phone.length == 15
      );
    },

    async pushUserOnDatabase(userData) {
      try {
        const docRef = await addDoc(collection(db, "users"), userData);
      } catch (e) {
        console.error("Error adding new user: ", e);
      }
    },

    resetAlerts() {
      this.alert = {
        show: false,
        type: "",
        title: "",
        message: "",
      };

      this.inputErr = {
        name: false,
        cpf: false,
        phone: false,
      };
    },

    showAlert(type, title, message) {
      this.alert.type = type;
      this.alert.title = title;
      this.alert.message = message;
      this.alert.show = true;

      if (this.alert.type == "success") {
        setTimeout(() => {
          this.alert.show = false;
        }, 4000);
      }
    },

    verifyInputErr() {
      const user = this.user;
      const inputErr = this.inputErr;
      let inputWitHErr = [];

      if (user.name.length < 5) {
        inputErr.name = true;
        inputWitHErr.push("Nome");
      } else {
        inputErr.name = false;
      }

      if (user.cpf.length != 14) {
        inputErr.cpf = true;
        inputWitHErr.push("CPF");
      } else {
        inputErr.cpf = false;
      }

      if (user.phone.length != 15) {
        inputErr.phone = true;
        inputWitHErr.push("Telefone");
      } else {
        inputErr.phone = false;
      }

      if (inputWitHErr.length > 0)
        this.showAlert(
          "error",
          "Erro nos Dados!",
          "Preencha os seguintes campos corretamente."
        );
    },
  },
};
</script>

<style scoped>
.register-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40rem;
  justify-content: space-around;
}

.register-title {
  font-size: 1.7rem;
  font-weight: bold;
  color: var(--primary-color);
}

.register-form {
  width: 100%;
  max-width: 400px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
</style>