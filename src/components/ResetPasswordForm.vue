<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Recuperar Senha</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <p>Digite seu e-mail para receber um link de redefinição de senha.</p>
      <ion-item>
        <ion-label position="floating">E-mail</ion-label>
        <ion-input v-model="email" type="email" placeholder="seu@email.com"></ion-input>
      </ion-item>
      <div v-if="error" class="ion-padding-top">
        <ion-text color="danger">
          <p>{{ error }}</p>
        </ion-text>
      </div>
      <div v-if="success" class="ion-padding-top">
        <ion-text color="success">
          <p>{{ success }}</p>
        </ion-text>
      </div>
      <ion-button expand="block" class="ion-margin-top" @click="handleReset">
        Enviar Link
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

const email = ref('');
const error = ref('');
const success = ref('');
const { resetarSenha } = useAuth();

const emit = defineEmits<{
  'navigate-login': []
}>();

const handleReset = () => {
  error.value = '';
  success.value = '';
  if (!email.value) {
    error.value = 'Por favor, digite seu e-mail';
    return;
  }
  if (resetarSenha(email.value)) {
    success.value = `Link de redefinição enviado para ${email.value}`;
    setTimeout(() => {
      email.value = '';
      success.value = '';
    }, 3000);
  } else {
    error.value = 'Erro ao enviar link';
  }
};
</script>
