<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Criar Conta</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-item>
        <ion-label position="floating">Nome Completo</ion-label>
        <ion-input v-model="name" type="text" placeholder="Seu nome"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">E-mail</ion-label>
        <ion-input v-model="email" type="email" placeholder="seu@email.com"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Senha</ion-label>
        <ion-input v-model="password" type="password" placeholder="Mínimo 6 caracteres"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Confirmar Senha</ion-label>
        <ion-input v-model="confirmPassword" type="password" placeholder="Confirme a senha"></ion-input>
      </ion-item>
      <div v-if="error" class="ion-padding-top">
        <ion-text color="danger">
          <p>{{ error }}</p>
        </ion-text>
      </div>
      <ion-button expand="block" class="ion-margin-top" @click="handleRegister">
        Cadastrar
      </ion-button>
      <ion-button expand="block" fill="clear" @click="$emit('navigate-login')">
        Voltar ao Login
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonText } from '@ionic/vue';
import { useAuth } from '../composables/useAuth';

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const error = ref('');
const { cadastrar } = useAuth();

const emit = defineEmits<{
  'navigate-login': [],
  'register-success': []
}>();

const handleRegister = () => {
  error.value = '';
  if (!name.value || !email.value || !password.value) {
    error.value = 'Por favor, preencha todos os campos';
    return;
  }
  if (password.value !== confirmPassword.value) {
    error.value = 'As senhas não conferem';
    return;
  }
  if (password.value.length < 6) {
    error.value = 'A senha deve ter no mínimo 6 caracteres';
    return;
  }
  if (cadastrar(name.value, email.value, password.value)) {
    emit('register-success');
  } else {
    error.value = 'Erro ao criar conta';
  }
};
</script>
