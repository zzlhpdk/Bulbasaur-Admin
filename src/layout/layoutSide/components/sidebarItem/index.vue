<template>
  <!-- <div v-if="!item.hidden"> -->
  <el-menu-item :index="item.path" v-if="!item.children">
    <el-icon color="#fff" :size="18">
      <component :is="item.meta.icon"></component>
    </el-icon>
    <template #title>{{ item.meta.title }}</template>
  </el-menu-item>
  <el-sub-menu :index="item.path" v-else>
    <template #title>
      <el-icon color="#fff" :size="18">
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span>{{ item.meta.title }}</span>
    </template>
    <sidebarItem v-for="child in item.children" :key="child.path" :item="child">
    </sidebarItem>
  </el-sub-menu>
  <!-- </div> -->
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import sidebarItem from './index.vue'

const iconName = ref('')
const showIcon = (name: string) => {
  return '< name />'
}
const { item } = defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.logo {
  cursor: pointer;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 37px;
    height: 37px;
  }
  span {
    font-size: 18px;
    margin-left: 15px;
  }
}

.el-menu {
  ::v-deep(.el-menu-item.is-active) {
    background-color: #fff !important;
    color: $color;
    border-right: none;
  }
}

.el-menu--collapse {
  border: none;
}
.el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
