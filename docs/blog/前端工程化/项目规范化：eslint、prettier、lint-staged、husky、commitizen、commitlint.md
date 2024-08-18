---
title: 项目规范化：eslint、prettier、lint-staged、husky、commitizen、commitlint
author: NOxONE
date: '2023-07-28'
categories:
  - 工程化
tags:
  - 规范化
---

## 0. 介绍
**eslint**：代码质量检测（质检员）

**prettier**：代码格式化（美工）

**lint-staged**：对暂存区文件执行自定义的操作，并检测（仓库管理员）

**commitizen**：对commit提交信息进行规范化校正（主编）

**husky**：定义gitHooks（主管）
## 1. 安装
```sh
npm i -D eslint prettier lint-staged husky commitizen
```
另外的，添加commitizen的一些额外拓展插件
```sh
npm i @commitlint/config-conventional
```

## 2. 配置
### 2.1 eslint
根目录创建`.eslintrc.js`文件
```js
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {},
}

```
~当然你也可以替代性的创建`.eslintrc.json`或`.eslintrc`文件，但是要使用json格式写配置，我不推荐~
### 2.2 prettier
根目录创建`.prettierrc.js`
```js
module.exports = {
  $schema: '​https://json.schemastore.org/prettierrc',
  printWidth: 200, // 单行长度
  tabWidth: 2, // 缩进长度
  useTabs: true, // 使用tab缩进
  semi: false, // 是否在句末使用分号
  singleQuote: true, // 是否使用单引号
  quoteProps: 'as-needed', // 仅在必需时为对象的key添加引号
  trailingComma: 'all', // 多行时尽可能打印尾随逗号
  bracketSpacing: true, // 是否在对象前后添加空格: { foo: bar }
  jsxBracketSameLine: true, // 是否将多属性html标签的‘>’折行放置
  requirePragma: false, // 是否仅在文件添加顶部注释标记时才格式化
  insertPragma: false, // 是否在已被preitter格式化的文件顶部加上标注
  vueIndentScriptAndStyle: false, // 是否对vue中的script及style标签缩进
  endOfLine: 'lf', // 结束行形式
  embeddedLanguageFormatting: 'auto', // 对引用代码进行格式化的方式
}
```
~同理，也可以替代创建`.prettierrc.json`或`.prettierrc`，但我不推荐~
### 2.3 lint-staged
根目录创建`.lintstagedrc.js`
```js
module.exports = {
  "*.{js,vue}": [
    "prettier --write", // 对暂存区文件进行格式化
    "eslint --fix" // 检测
  ]
}
```
### 2.4 husky
需要执行一些指令来创建
```sh
npx husky init 
npx husky-init pre-commit # 初始化pre-commit
npx husky-init commit-msg # 初始化commit-msg
```
这时候根目录下创建一个`.husky`目录，里面会有`pre-commit`和`commit-msg`文件，用于定义对应的githook，在通过`git commit -m xxx`填写提交信息完毕时会触发`commit-msg`钩子（这里可以对commit信息进行规范化），随后校验通过并提交之前触发`pre-commit`钩子（这里可以对提交的代码进行prettier格式化和eslint校验）

配置如下
```sh
# .husky/commit-msg
. "$(dirname -- "$0")/_/husky.sh"

npx commitlint # 对commit信息进行校验
```
```sh
# .husky/pre-commit
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged # 执行lint-staged，从而对暂存区文件执行prettier --write && eslint --fix
```
### 2.5 commitizen
根目录创建`.cz-config.js`
```js
module.exports = {
  types: [
    { value: 'feat', name: 'feat: 新功能' },
    { value: 'fix', name: 'fix: 修复bug' },
    { value: 'modify', name: 'modify: 内容变更' },
    { value: 'test', name: 'test: 测试' },
    { value: 'style', name: 'style: 代码的样式美化' },
    { value: 'perf', name: 'perf: 性能优化' },
    { value: 'refactor', name: 'refactor: 重构' },
    { value: 'revert', name: 'revert: 回退' },
    // { value: 'build', name: '📦️ build: 打包' },
    // { value: 'chore', name: '🏹chore: 构建/工程依赖/工具' },
    // { value: 'ci', name: '👷 ci: CI related changes' },
  ],
  messages: {
    type: '请选择提交类型(必填)',
    customScope: '请输入文件修改范围(可选)',
    subject: '请简要描述提交(必填)',
    body: '请输入详细描述(可选)',
    breaking: '列出任何BREAKING CHANGES(可选)',
    footer: '请输入要关闭的bug(可选)',
    confirmCommit: '确定提交以上信息吗(Y/N)？',
  },
  allowCustomScopes: true,
  subjectLimit: 72,
}
```
这时候会在每次提交代码并填写commit信息的时候，会触发`commit-msg`钩子，检查commit信息是否格式正确，形如:`feat: 添加首页`，若格式正确会进入下一个钩子`pre-commit`，对暂存区的文件进行`eslint`检测和`prettier`格式化，最后才会推送到远程仓库

另外在commit时使用`git cz`代替`git commit`，会触发`commitizen`命令行脚手架，从而可以按照指示完成commit信息的规范填写


## 3. 流程图

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/55eb39684b8b49a3bc4610bf67c267e5~tplv-k3u1fbpfcp-watermark.image?)
