---
title: BusinessProvider
atomId: business-provider
---

# BusinessProvider 业务

权限组件，用于权限管理。

## 何时使用

- 需要进行权限管理时。

## 代码演示

<code src="./demos/permissionProvider.tsx" background="var(--main-bg-color)" title="权限管理" description="传入权限列表，用于判断权限，进行权限管理"></code>

## API

| 参数           | 说明               | 类型              | 默认值 | 版本 |
| -------------- | ------------------ | ----------------- | ------ | ---- |
| permissionList | 权限列表           | `string[]`        | -      |      |
| children       | 需要控制权限的内容 | `React.ReactNode` | -      |      |

## 待办

- 可以自定义传值给 BusinessProvider 的 value，可以用于写部分业务逻辑？
