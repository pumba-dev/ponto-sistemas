<template>
  <div class="register">
    <ViewTitle title="Cadastro de Novas Pessoas"></ViewTitle>

    <div class="register-container">
      <Alert v-show="alert.show" :Alert="alert"></Alert>

      <UserForm
        :class="['ui', alert.type, 'form']"
        @submit.prevent="submitUser"
      >
        <FormLabel :class="{ error: inputErr.cpf }" text="CPF">
          <input
            placeholder="Insira seu CPF"
            type="text"
            v-model="user.cpf"
            v-mask="'###.###.###-##'"
          />
        </FormLabel>

        <FormLabel :class="{ error: inputErr.name }" text="Nome">
          <input
            placeholder="Insira seu nome"
            type="text"
            maxlength="20"
            v-model="user.name"
          />
        </FormLabel>

        <FormLabel :class="{ error: inputErr.phone }" text="Telefone">
          <input
            placeholder="Insira seu Número"
            type="text"
            v-model="user.phone"
            v-mask="'(##) #####-####'"
          />
        </FormLabel>

        <ButtonsContainer>
          <BackBtn @click="this.$router.push({ name: 'user-list' })"></BackBtn>
          <SaveBtn
            type="submit"
            :disabled="btnDisabled"
            :class="{ loading: btnDisabled }"
          ></SaveBtn>
        </ButtonsContainer>
      </UserForm>
    </div>
  </div>
</template>

<script>
// Components
import ViewTitle from "../components/general/ViewTitle.vue";
import Alert from "../components/general/Alert.vue";
import UserForm from "../components/general/UserForm.vue";
import FormLabel from "../components/general/FormLabel.vue";
import ButtonsContainer from "../components/buttons/ButtonsContainer.vue";
import BackBtn from "../components/buttons/BackBtn.vue";
import SaveBtn from "../components/buttons/SaveBtn.vue";

// Firestore
import db from "../services/Firestore.js";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default {
  components: {
    ViewTitle,
    Alert,
    UserForm,
    FormLabel,
    ButtonsContainer,
    BackBtn,
    SaveBtn,
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
      btnDisabled: false,
    };
  },
  methods: {
    async submitUser() {
      const user = this.user;

      if (this.userIsValid(user)) {
        if (!(await this.hasUser(user))) {
          this.resetAlert();

          this.btnDisabled = true;

          this.pushUserOnDatabase(user).then(() => {
            this.$router.push({ name: "user-list" });
          });
        } else {
          this.showAlert(
            "error",
            "Pessoa Já Cadastrada!",
            "CPF já cadastrado, informe uma nova pessoa."
          );
        }
      } else {
        this.verifyInputErr();
      }
    },

    userIsValid(user) {
      return (
        user.name.length >= 2 &&
        user.cpf.length == 14 &&
        user.phone.length == 15
      );
    },

    async hasUser(user) {
      const userRef = doc(db, "users", user.cpf);
      const userSnap = await getDoc(userRef);
      const hasUser = typeof userSnap.data() != "undefined" ? true : false;
      return hasUser;
    },

    resetAlert() {
      this.inputErr = {
        name: false,
        cpf: false,
        phone: false,
      };
      this.alert = {
        show: false,
        type: "",
        title: "",
        message: "",
      };
    },

    async pushUserOnDatabase(user) {
      const docRef = await setDoc(doc(db, "users", user.cpf), user);
    },

    showAlert(type, title, message) {
      this.alert.type = type;
      this.alert.title = title;
      this.alert.message = message;
      this.alert.show = true;
    },

    verifyInputErr() {
      const user = this.user;

      if (user.name.length < 2) {
        this.inputErr.name = true;
      } else {
        this.inputErr.name = false;
      }

      if (user.cpf.length != 14) {
        this.inputErr.cpf = true;
      } else {
        this.inputErr.cpf = false;
      }

      if (user.phone.length != 15) {
        this.inputErr.phone = true;
      } else {
        this.inputErr.phone = false;
      }

      if (this.inputErr.name || this.inputErr.cpf || this.inputErr.phone) {
        this.showAlert(
          "error",
          "Erro nos Dados!",
          "Preencha os seguintes campos corretamente."
        );
      }
    },
  },
};
</script>

<style scoped>
.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}

.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>