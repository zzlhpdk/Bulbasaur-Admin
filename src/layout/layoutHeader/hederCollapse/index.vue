<script lang="ts" setup>
import { layoutStore } from '@/store/layout';
import { computed } from 'vue';

const store = layoutStore();
// 通过action 改变collapseh值
const setCollapse = () => {
  store.setCollapse();
};
// 响应式图标
const collapse = computed(() => store.collapse);
</script>
<template>
  <div class="icon">
    <el-icon class="el-icon" :size="40" @click="setCollapse">
      <Expand v-show="collapse === true" />
      <Fold v-show="collapse === false" />
    </el-icon>
  </div>
</template>

<style scoped lang="scss">
.icon {
  margin-top: 6px;
  .el-icon {
    color: $color;
  }
}
</style>
