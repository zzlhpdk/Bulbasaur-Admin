<template>
  <div>
    <el-tag>系统</el-tag>
    <el-divider />
    <el-button type="primary" @click="goTo1_2">点我去隐藏层级1-2</el-button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goTo1_2 = () => {
  router.push('/layer/layer-1/layer1-2');
};
</script>

<style lang="scss" scopde></style>
