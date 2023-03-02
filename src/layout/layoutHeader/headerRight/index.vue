<template>
  <div class="header-right" @click="toggleFullScreen">
    <el-icon class="el-icon" :size="40">
      <FullScreen />
    </el-icon>
  </div>
  <div class="user-info">
    <el-image
      style="width: 40px; height: 40px"
      :src="avatar"
      :preview-src-list="srcList"
      fit="cover" />
    <el-menu
      :ellipsis="false"
      mode="horizontal"
      text-color="#06b799"
      active-text-color="#06b799">
      <el-sub-menu index="1">
        <template #title>{{ nickname }}</template>
        <el-menu-item index="1-1" @click="handleLoginOut"
          >退出登录</el-menu-item
        >
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import { userStore } from '@/store/user'
import { tabPaneStore } from '@/store/tabPane'

import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import { FullScreen } from '@element-plus/icons-vue'
const USER = userStore()
const TAB_PANE = tabPaneStore()

const nickname = computed(() => USER.userInfo.nickname)
const avatar = computed(() => USER.userInfo.avatar)
const srcList = computed(() => [avatar.value])

const router = useRouter()

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}
const handleLoginOut = () => {
  ElMessageBox.confirm('确认退出?', '提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      ElMessage({
        type: 'success',
        message: '退出成功'
      })
      //pinia 数据重置
      USER.$reset()
      TAB_PANE.$reset()
      router.push('/login')
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '您已取消退出'
      })
    })
}
</script>
<style lang="scss" scoped>
.header-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .el-icon {
    color: $color;
  }
}
.user-info {
  margin-left: 10px;
  display: flex;
  align-items: center;
  .el-image {
    border-radius: 50%;
  }
}
::v-deep(.el-menu--horizontal) {
  border-bottom: none;
}
::v-deep(.el-menu--horizontal > .el-sub-menu.is-active .el-sub-menu__title) {
  border-bottom: none;
}
::v-deep(.el-sub-menu__title) {
  font-size: 24px;
}
</style>
