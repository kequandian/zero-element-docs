---
title: Schema自定义组件
toc: menu
order: 1
---

# 自定义组件

## 官方说明文档

https://x-render.gitee.io/table-render

## 如何使用普通组件

打开项目 zero-element-admin，找到 src 目录下-components 下的 SchemaGeneratorPage 文件夹，打开 settings.js 配置。

### 配置说明

| 配置名                | 说明             |
| --------------------- | ---------------- |
| defaultCommonSettings | 右侧菜单配件设置 |
| UserConfig            | 左侧用户组件     |
| elements              | 左侧基础组件     |
| advancedElements      | 左侧高级组件     |
| layouts               | 左侧布局         |
| saves                 | 样例（已禁用）   |
| defaultSettings       | 左侧组件的配置   |
| defaultGlobalSettings | 右侧菜单布局设置 |

## 配置自定义组件方法

打开 zero-element-admin，前往主目录 src/components/SchemaGeneratorPage/components，新增组件 js,输入代码，例：

> 要求：输出 hello world!

新增组件 hello.js

```
export default function(){
	return <h1>Hello World!</h1>
}
```

打开同级目录下的 index.js

添加

```
import Hello from "./hello"
```

并在

```
export const widgets={
	...
}
```

中添加 Hello,即

```
export const widgets={
	...,Hello
}
```

新增组件完成，然后我们需要调用它

前往上级目录的 settings.js 中,找到

```
export const elements ={
	...
}
```

在它里面的最后添加

```
{
   text:'Hello',
   name:"hello",
   schema:{
    type:'string',
    "ui:widget":"Hello",
  },
   widget:"Hello"
},
```

完成。

## 链接跳转

[已定义自定义组件说明](./已定义自定义组件说明)

[自定义组件左右栏配置说明](./自定义组件左右栏配置说明)
