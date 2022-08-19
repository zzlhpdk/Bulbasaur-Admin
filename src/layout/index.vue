<template>
  <el-container>
    <el-aside><layoutSide /></el-aside>
    <el-container class="container">
      <el-header class="el-header"><layoutHeader /></el-header>
      <!-- 子路由出口 -->
      <el-main>
        <el-tabs
          v-model="activePan"
          type="card"
          class="tabs"
          @tab-click="tabClick"
          closable
          @edit="handleTabsEdit"
        >
          <el-tab-pane
            v-for="item in pansData"
            :key="item.key"
            :label="item.label"
            :name="item.key"
          >
          </el-tab-pane>
          <router-view></router-view>
        </el-tabs>
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
import layoutSide from './layoutSide/index.vue';
import layoutHeader from './layoutHeader/index.vue';
import { computed } from 'vue';
import { tabPaneStore } from '@/store/tabPane';
import { setActiveState } from '@/utils/func';
import { useRouter } from 'vue-router';

const store = tabPaneStore();
const pansData = computed(() => store.tabPanes);
const activePan = computed(() => store.activePan);
const router = useRouter();

// 点击导航栏进入对应页面
const tabClick = (value: any) => {
  router.push(value.paneName);
  setActiveState(value.paneName);
};
// 删除标签
const handleTabsEdit = (value: any, action: any) => {
  store.removeTabPanes(value);
};
</script>
<style lang="scss" scopde>
.el-header {
  background-color: #fff;
  height: 60px;
}
.el-footer {
  display: flex;
  align-items: center;
  color: #333;
}
.el-aside {
  width: auto !important;
  background-color: $color;
  color: #fff;
}

.el-container {
  background-color: #e9eef3 !important;
  height: 100vh;
  .el-main {
    padding: 0;
    height: calc(100% - 60px);
    .el-tabs {
      height: 100%;
      .el-tabs__header {
        background-color: #fff;
        position: sticky;
        top: 0;
        z-index: 1;
        margin: 0;
        height: 40px;
        .el-tabs__nav,
        .el-tabs__item {
          border-left: none;
          border-top: none;
          border-right: none;
        }
      }
      .el-tabs__content {
        margin: 16px;
        padding: 16px;
        background-color: #fff;
        overflow: auto;
        height: calc(100% - 104px);
      }
    }
  }
}

.el-tabs--card > .el-tabs__header .el-tabs__nav {
  background-color: #fff !important;
}
.el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  border-bottom-color: $color !important;
}
</style>
