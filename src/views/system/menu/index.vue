<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%; margin-bottom: 20px"
      row-key="path"
    >
      <el-table-column prop="meta.title" label="菜单名" />
      <el-table-column prop="path" label="地址" />
      <el-table-column prop="meta.type" label="类型">
        <template #default="scope">
          <span v-if="scope.row.meta.type === 'catalogue'">目录</span>
          <span v-if="scope.row.meta.type === 'menu'">菜单</span>
          <span v-if="scope.row.meta.type === 'button'">按钮</span>
        </template>
      </el-table-column>
      <el-table-column prop="meta.icon" label="图标" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { userStore } from '@/store/user';
const tableData = computed(() => userStore().userInfo.routes);
</script>

<style lang="scss" scopde></style>
