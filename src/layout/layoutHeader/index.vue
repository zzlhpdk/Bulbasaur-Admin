<template>
  <div class="header">
    <!-- 头部左边 -->
    <div class="left">
      <!-- 展开折叠按钮 -->
      <div class="collapse">
        <hederCollapse />
      </div>
      <!-- 面包屑 -->
      <div class="breadcrumb">
        <headerBreadcrumb />
      </div>
    </div>
    <!-- 头部右边 -->
    <div class="right">
      <headerRight />
    </div>
  </div>
</template>
<script lang="ts" setup>
import headerBreadcrumb from './headerBreadcrumb/index.vue'
import hederCollapse from './hederCollapse/index.vue'
import headerRight from './headerRight/index.vue'
</script>
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .collapse {
      margin-right: 30px;
    }
  }
  .right {
    @extend .left;
    justify-content: flex-end;
  }
}
</style>
