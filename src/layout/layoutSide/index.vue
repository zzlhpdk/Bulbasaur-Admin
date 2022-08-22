<template>
  <div class="logo" @click="redirectHome">
    <img src="@/assets/logo.png " />
    <span v-show="!collapse">Bulbasaur-Admin</span>
  </div>
  <el-menu
    active-text-color="#fff"
    background-color="#06b799"
    class="el-menu"
    :default-active="defaultActive"
    text-color="#fff"
    :collapse="collapse"
    router
  >
    <el-menu-item index="/home">
      <el-icon color="#fff" :size="18">
        <HomeFilled />
      </el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <sidebarItem v-for="route in menuData" :item="route" :path="''" />
  </el-menu>
</template>
<script lang="ts" setup>
import sidebarItem from './components/sidebarItem/index.vue';
import { layoutStore } from '@/store/layout';
import { userStore } from '@/store/user';
import { useRouter } from 'vue-router'; // useRouter实例对象，useRoute当前路由对象
import { computed } from 'vue';

const router = useRouter();
const user = userStore();
const layout = layoutStore();
const collapse = computed(() => layout.collapse); // 折叠
const menuData = computed(() => user.userInfo.routes); //菜单数据
const defaultActive = computed(() => layout.defaultActive); // 选中状态

// 点击logo,重定向首页
const redirectHome = () => {
  router.push('/home');
  layout.setDefaultMenu('/home');
};
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
    margin-bottom: 10px;
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
  width: 260px;
  min-height: 400px;
}
</style>
