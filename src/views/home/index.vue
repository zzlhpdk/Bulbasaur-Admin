<template>
  <div class="home">
    <img :src="home" />
  </div>
</template>

<script lang="ts" setup>
import home from '@/assets/home.svg';
</script>

<style lang="scss" scopde>
.home {
  width: 100%;
  text-align: center;
}
</style>
