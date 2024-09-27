---
title: Permission
atomId: business-permission
---

# Permission 权限

权限组件，用于权限管理。

## 何时使用

- 需要进行权限管理时。

## 代码演示

<code src="./demos/basic.tsx" background="var(--main-bg-color)" title="基础使用" description="传入权限key值，控制是否展示"></code>

<code src="./demos/noAccessContent.tsx" background="var(--main-bg-color)" title="无权限时展示内容" description="自定义无权限内容展示"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| value | 权限 key | `string \| string[]` | string |  |
| children | 需要控制权限的内容 | `React.ReactNode` | - |  |
| match | 权限匹配模式 | `single \| partial \| full` | single |  |
| noAccessContent | 无权限时展示的内容 | `null \| React.ReactNode` | null |  |

## 待办

- 需不需要提供一个 hooks 可以方便的拿到权限情况，可用于写业务逻辑判断？会不会有种场景，不需要在页面上展示权限，但是又需要在业务逻辑中判断权限？
- 需要提供自定义匹配权限逻辑？
