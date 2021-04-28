---
title: Schema自定义组件
toc: menu
order: 1
---

# 自定义组件

## 官方说明文档

https://x-render.gitee.io/table-render

## 如何使用普通组件

打开项目zero-element-admin，找到src目录下-components下的SchemaGeneratorPage文件夹，打开settings.js配置。

配置说明

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

打开zero-element-admin，前往主目录src/components/SchemaGeneratorPage/components，新增组件js,输入代码，例：

> 要求：输出hello world!

新增组件hello.js

```
export default function(){
	return <h1>Hello World!</h1>
}
```

打开同级目录下的index.js

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

中添加Hello,即

```
export const widgets={
	...,Hello
}
```

新增组件完成，然后我们需要调用它

前往上级目录的settings.js中,找到

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

## 已定义的自定义组件说明

> 所有组件的用法都是直接在schema中插入，如有更改，会在单独组件中备注。
>
> ```
> "ui:widget":"Url"
> ```
>
> 即可。

### 自定义组件存放地址

src>components>SchemaGeneratorPage>components

### CalendarCom

**说明**

这是一个自定义的日历组件

**用法**

直接在schema中插入

```
"ui:widget":"CalendarCom"
```

即可。

### Url

**说明**

这是一个可以定义前后缀的文本组件

**更改方法**

在设置栏中更改

### UserCard

**说明**

一个可输入的用户信息组件

**更改方法**

进入UserCard.js，更改对应的title和label即可

### NowTime

**说明**

显示当前时间

### Elesign

**说明**

签章

**用法**

打开elesign,在src元素中添加src地址

### GetUserName

**说明**

获取当前用户名

### PlaceHolder

**说明**

提示文字

**用法**

打开placeholder，编辑Tiptext

### TreeDir

**说明**

普通文件树

**用法**

打开tree，更改TreeData项

### TreeSelect

**说明**

文件选择树

**用法**

打开tree，更改TreeData项

### GetList

**说明**

获取表单列表