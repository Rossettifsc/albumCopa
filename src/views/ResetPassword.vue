<template>
  <ion-page>
    <AppHeader title="Recuperar Senha" show-back-button />
    <ion-content class="ion-padding">
      <ResetPasswordForm 
        @navigate-login="$router.push('/login')"
      />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import AppHeader from '../components/AppHeader.vue';
import ResetPasswordForm from '../components/ResetPasswordForm.vue';
</script>
