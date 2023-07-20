<script setup lang="ts">
import { RouterView } from 'vue-router';

import FooterView from './components/Footer.vue';
import HeaderView from './components/Header.vue';
</script>

<template>
  <header-view />
  <router-view />
  <footer-view />
</template>
