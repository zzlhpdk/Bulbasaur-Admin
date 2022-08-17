// vite无法使用process获取环境变量，获取方式为import.meta.env

// 但在使用过程中vscode会报错：

// 类型“ImportMeta”上不存在属性“env”。

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
