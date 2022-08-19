<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const routes = computed(() => {
  return router.currentRoute.value.matched.filter((item) => item.meta.title);
});
console.log(router);
</script>
<template>
  <el-breadcrumb :separator-icon="ArrowRight" class="breadcrumb">
    <el-breadcrumb-item
      v-for="item in routes"
      key="item.path"
      class="breadcrumb-item"
    >
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style lang="scss" scoped>
.breadcrumb {
  .breadcrumb-item {
    font-size: 18px;
    ::v-deep(.el-breadcrumb__inner) {
      color: #666;
    }
    ::v-deep(.el-breadcrumb__separator.el-icon) {
      color: #666;
    }
  }
  ::v-deep(.el-breadcrumb__item:last-child
      .el-breadcrumb__inner, .el-breadcrumb__item:last-child
      .el-breadcrumb__inner:hover, .el-breadcrumb__item:last-child
      .el-breadcrumb__inner
      a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover) {
    color: $color;
  }
}
</style>
