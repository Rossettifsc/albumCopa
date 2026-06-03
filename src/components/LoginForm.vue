<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Login</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-item>
        <ion-label position="floating">E-mail</ion-label>
        <ion-input v-model="email" type="email" placeholder="seu@email.com"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Senha</ion-label>
        <ion-input v-model="password" type="password" placeholder="Sua senha"></ion-input>
      </ion-item>
      <div v-if="error" class="ion-padding-top">
        <ion-text color="danger">
          <p>{{ error }}</p>
        </ion-text>
      </div>
      <ion-button expand="block" class="ion-margin-top" @click="handleLogin">
        Entrar
      </ion-button>
      <ion-button expand="block" fill="clear" @click="$emit('navigate-register')">
        Criar Conta
      </ion-button>
      <ion-button expand="block" fill="clear" @click="$emit('navigate-reset')">
        Esqueci a Senha
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonText } from '@ionic/vue';
import { useAuth } from '../composables/useAuth';

const email = ref('');
const password = ref('');
const error = ref('');
const { login } = useAuth();

const emit = defineEmits<{
  'navigate-register': [],
  'navigate-reset': [],
  'login-success': []
}>();

const handleLogin = () => {
  error.value = '';
  if (!email.value || !password.value) {
    error.value = 'Por favor, preencha todos os campos';
    return;
  }
  if (login(email.value, password.value)) {
    emit('login-success');
  } else {
    error.value = 'E-mail ou senha inválidos';
  }
};
</script>
