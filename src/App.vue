<script setup lang="ts">
import { RouterView } from 'vue-router';

import FooterView from './components/Footer.vue';
import HeaderView from './components/Header.vue';
</script>

<template>
  <header-view v-if="!isAuthPage" />
  <router-view />
  <footer-view v-if="!isAuthPage" />
</template>

<script lang="ts">
export default {
  computed: {
    isAuthPage(): boolean {
      return /\/auth\/.*/.test(this.$route.path);
    }
  }
}
</script>