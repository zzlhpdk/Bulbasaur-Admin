<template>
  <div class="login-container">
    <div class="img">
      <img src="@/assets/img-3.svg" alt="" />
    </div>
    <el-form
      class="login-form"
      :rules="rules"
      ref="form"
      :model="user"
      @submit.prevent="handleSubmit"
      v-loading="loading"
    >
      <div class="login-form__header">
        <img src="@/assets/avatar.png" alt="" class="avatar" />
        <h2>Bulbasaur-Admin</h2>
      </div>
      <el-form-item prop="code">
        <el-input
          v-model="user.code"
          placeholder="admin/other"
          :suffix-icon="Avatar"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          v-model="user.pwd"
          type="password"
          placeholder="123456"
          :suffix-icon="Lock"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          class="submit-button"
          type="primary"
          :loading="loading"
          native-type="submit"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router'; // useRouter实例对象，useRoute当前路由对象
import { Avatar, Lock } from '@element-plus/icons-vue';
import type { FormInstance, FormRules } from 'element-plus';
import { loginPath, userInfoPath } from '@/api/user';
import { ElMessage } from 'element-plus';
import { userStore } from '@/store/user';

const form = ref<FormInstance>();
const router = useRouter();
const route = useRoute();
const store = userStore();
const user = reactive({
  code: import.meta.env.NODE_ENV === 'production' ? '' : 'admin',
  pwd: import.meta.env.NODE_ENV === 'production' ? '' : '123456',
});
const loading = ref(false);
const rules = ref<FormRules>({
  code: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }],
});

// 初始化清空缓存
onMounted(() => {
  store.$reset();
});
const handleSubmit = async () => {
  await form.value?.validate(async (valid, fields) => {
    if (valid) {
      loading.value = true;
      const respones: any = await loginPath(user).finally(() => {
        loading.value = false;
      });
      //用 pinia 储存token
      store.setToken(respones.data.access_token);
      getUserInfo();
    } else {
      ElMessage.error('必填项不能为空');
    }
  });
};

// 获取用户信息
const getUserInfo = async () => {
  const response = await userInfoPath();
  //用 pinia 储存用户信息
  store.setUser(response.data);
  const redirect = (route.query.redirect as string) || '/';
  router.push(redirect);
};
</script>

<style lang="scss" scoped>
.login-container {
  min-width: 400px;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  // 背景图片地址
  background: url('../../assets/bg.png');
  // 背景图片是否重复
  background-repeat: 'no-repeat';
  // // 背景图片大小
  background-size: 100% 100%;
  .img img {
    width: 500px;
  }
}

.login-form {
  padding: 30px;
  border-radius: 6px;
  background: #fff;
  min-width: 350px;
  margin-bottom: 100px;
  .login-form__header {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
    img {
      object-fit: contain;
      width: 100px;
      height: 100px;
      margin-right: 20px;
    }
    h2 {
      color: $color;
    }
  }

  .el-form-item:last-child {
    margin-bottom: 0;
  }

  .login__form-title {
    display: flex;
    justify-content: center;
    color: #fff;
  }

  .submit-button {
    width: 100%;
  }

  .login-logo {
    width: 271px;
    height: 74px;
  }
  .imgcode-wrap {
    display: flex;
    align-items: center;
    .imgcode {
      height: 37px;
    }
  }
}
</style>
