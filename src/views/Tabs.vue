<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="album" href="/tabs/album">
          <ion-icon :icon="albums"></ion-icon>
          <ion-label>Album</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="collection" href="/tabs/collection">
          <ion-icon :icon="star"></ion-icon>
          <ion-label>Coleção</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="profile" href="/tabs/profile">
          <ion-icon :icon="person"></ion-icon>
          <ion-label>Perfil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/vue';
import { albums, star, person } from 'ionicons/icons';
</script>
