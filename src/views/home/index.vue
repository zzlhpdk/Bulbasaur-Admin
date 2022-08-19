<template>
  <div class="home">
    <img :src="home" />
  </div>
</template>

<script lang="ts" setup>
import home from '@/assets/home.svg';
import { userStore } from '@/store/user';

</script>

<style lang="scss" scopde>
.home {
  height: 100%;
  width: 100%;
  img {
    margin-top: 20px;
    height: 80%;
    width: 100%;
  }

  text-align: center;
}
</style>
