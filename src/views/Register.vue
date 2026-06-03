<template>
  <ion-page>
    <AppHeader title="Cadastro" show-back-button />
    <ion-content class="ion-padding">
      <RegisterForm 
        @navigate-login="$router.push('/login')"
        @register-success="$router.push('/tabs/album')"
      />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import AppHeader from '../components/AppHeader.vue';
import RegisterForm from '../components/RegisterForm.vue';
</script>
