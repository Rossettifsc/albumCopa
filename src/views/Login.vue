<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="login-container">
        <ion-text>
          <h1 class="ion-text-center">Album Copa</h1>
        </ion-text>
        <LoginForm 
          @navigate-register="$router.push('/register')"
          @navigate-reset="$router.push('/reset-password')"
          @login-success="$router.push('/tabs/album')"
        />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonText } from '@ionic/vue';
import LoginForm from '../components/LoginForm.vue';
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

h1 {
  margin-bottom: 30px;
  color: #3880ff;
}
</style>
