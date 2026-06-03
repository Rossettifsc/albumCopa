<template>
  <ion-page>
    <AppHeader title="Perfil" show-logout @logout="handleLogout" />
    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Informações do Usuário</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item lines="none">
            <ion-label>
              <p>Nome</p>
              <h2>{{ user?.name }}</h2>
            </ion-label>
          </ion-item>
          <ion-item lines="none">
            <ion-label>
              <p>E-mail</p>
              <h2>{{ user?.email }}</h2>
            </ion-label>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Estatísticas</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item lines="none">
            <ion-label>
              <p>Total de Figurinhas</p>
              <h2>{{ totalStickers }}</h2>
            </ion-label>
          </ion-item>
          <ion-item lines="none">
            <ion-label>
              <p>Figurinhas Coletadas</p>
              <h2>{{ collectedStickersCount }}</h2>
            </ion-label>
          </ion-item>
          <ion-item lines="none">
            <ion-label>
              <p>Progresso</p>
              <h2>{{ Math.round((collectedStickersCount / totalStickers) * 100) }}%</h2>
            </ion-label>
          </ion-item>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel } from '@ionic/vue';
import { useAuth } from '../composables/useAuth';
import { useAlbum } from '../composables/useAlbum';
import AppHeader from '../components/AppHeader.vue';

const router = useRouter();
const { user, logout } = useAuth();
const { totalStickers, collectedStickersCount } = useAlbum();

const handleLogout = () => {
  logout();
  router.push('/login');
};
</script>
