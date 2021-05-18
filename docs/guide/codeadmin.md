---
title: 脚手架说明
toc: menu
order: 4
---

# Zero code Admin

`Zero Code Admin` 是通过 `zero-json` 生成的脚手架项目, 提供了基础页面/布局等常用功能

## 关于 Zero Code Admin

#### 导航风格定义

修改位于 `public/config.js` 文件下的内容可变更导航菜单的风格:

```javascript
window.ZEle.nav = 'LeftNavCollaps';
```

目前预设了如下的导航风格

- LeftNavCollaps

  ![LeftNavCollaps.png](https://gitee.com/hdij/this-is-a-project/raw/master///20200824184541.png)

- top ![top.png](https://cdn.jsdelivr.net/gh/h89916300/this-is-a-project/1598256352452-1598256352443-top.png)

- left ![left.png](https://gitee.com/hdij/this-is-a-project/raw/master///20200824171054.png)

- both ![both.png](https://gitee.com/hdij/this-is-a-project/raw/master///20200824171218.png)

> 该配置为静态变量, 更改后需要手动刷新页面才能生效

#### 颜色风格定义

主题颜色的定义文件位于 `src/theme.less`, 会直接影响 导航颜色和按钮颜色

```less
@ZEle-primary-color        : #610b0b; -- 连接字体默认颜色
@ZEle-primary-color-light  : #860909; -- 鼠标悬浮 字体颜色
@ZEle-primary-color-bgColor: #fcd0d0; -- 选中项背景色
```

##### 例子:

- @ZEle-primary-color : #610b0b;

  ![](https://gitee.com/hdij/this-is-a-project/raw/master///20200824172729.png)

- @ZEle-primary-color-light : #860909;

  ![](https://gitee.com/hdij/this-is-a-project/raw/master///20200824173327.png)

- @ZEle-primary-color-bgColor: #fcd0d0;

  ![](https://gitee.com/hdij/this-is-a-project/raw/master///20200824173551.png)

`src/theme.less`还可以配置一些组件的颜色

```less
// ---- 导航 ----
@ZEle-menu-icon: white;
// 顶部导航
@ZEle-menu-top-bgColor: #0b4f79;
@ZEle-menu-top-active-bgColor: #2489c7;
@ZEle-menu-top-fontColor: #fff;
@ZEle-menu-top-fontSize: 16px;

// 左部导航
@ZEle-menu-left-bgColor: white;
@ZEle-menu-left-active-bgColor: #2489c7;
@ZEle-menu-left-fontColor: #0b4f79;
@ZEle-menu-left-fontSize: 16px;
@ZEle-menu-left-active-fontColor: #fff;

// 主要，次要，默认按钮颜色配置 -- (如 添加, 导入, 导出 按钮)
@ZEle-action-primary: #0b4f79;
@ZEle-action-primary-fontColor: #fff;
@ZEle-action-primary-light: #6db2dd;
@ZEle-action-primary-light-fontColor: #fff;

@ZEle-action-secondary: #0b4f79;
@ZEle-action-secondary-fontColor: #fff;
@ZEle-action-secondary-light: #6db2dd;
@ZEle-action-secondary-light-fontColor: #fff;

@ZEle-action-default: #0b4f79;
@ZEle-action-default-fontColor: #fff;
@ZEle-action-default-light: #6db2dd;
@ZEle-action-default-light-fontColor: #fff;
```

## 样式开发说明

打开`Zero-element-admin`

找到`src`下的`rewrite.less`和`theme.less`

#### `rewrite.less`文件介绍

配合`theme.less`使用，调用了许多`less`变量

|                 变量名                 |           用途           |      分类      |
| :------------------------------------: | :----------------------: | :------------: |
|          @ZEle-primary-color           |      定义了全局颜色      |      全局      |
|       @ZEle-primary-color-light        |    定义了全局高亮颜色    |      全局      |
|      @ZEle-primary-color-bgColor       |    定义了全局背景颜色    |      全局      |
|          @ZEle-action-margin           |  定义了全局按钮的外边框  |      全局      |
|         @ZEle-action-minWidth          | 定义了全局按钮的最小宽度 |      全局      |
|         @ZEle-action-minHeight         | 定义了全局按钮的最小高度 |      全局      |
|       @ZEle-action-borderRadius        | 定义了全局按钮的边框弧度 |      全局      |
|         @ZEle-action-fontSize          | 定义了全局按钮的字体大小 |      全局      |
|          @ZEle-action-primary          |       按钮背景颜色       |  按钮 primary  |
|     @ZEle-action-primary-fontColor     |       按钮文字颜色       |  按钮 primary  |
|       @ZEle-action-primary-light       |    按钮触摸时背景颜色    |  按钮 primary  |
|  @ZEle-action-primary-light-fontColor  |    按钮触摸时文字颜色    |  按钮 primary  |
|         @ZEle-action-secondary         |       按钮背景颜色       | 按钮 secondary |
|    @ZEle-action-secondary-fontColor    |       按钮文字颜色       | 按钮 secondary |
|      @ZEle-action-secondary-light      |    按钮触摸时背景颜色    | 按钮 secondary |
| @ZEle-action-secondary-light-fontColor |    按钮触摸时文字颜色    | 按钮 secondary |
|          @ZEle-action-default          |       按钮背景颜色       |  按钮 default  |
|     @ZEle-action-default-fontColor     |       按钮文字颜色       |  按钮 default  |
|       @ZEle-action-default-light       |    按钮触摸时背景颜色    |  按钮 default  |
|  @ZEle-action-default-light-fontColor  |    按钮触摸时文字颜色    |  按钮 default  |
|            @ZEle-menu-icon             |         导航图标         |    顶部导航    |
|         @ZEle-menu-top-bgColor         |     顶部导航背景颜色     |    顶部导航    |
|     @ZEle-menu-top-active-bgColor      |  顶部导航选中时背景颜色  |    顶部导航    |
|      @ZEle-menu-top-bgColor-light      |  顶部导航触摸时背景颜色  |    顶部导航    |
|        @ZEle-menu-top-fontColor        |     顶部导航文字颜色     |    顶部导航    |
|        @ZEle-menu-top-fontSize         |     顶部导航文字大小     |    顶部导航    |
|         @ZEle-menu-top-weight          |       顶部导航宽度       |    顶部导航    |
|        @ZEle-menu-left-bgColor         |     侧边导航背景颜色     |    侧边导航    |
|     @ZEle-menu-left-active-bgColor     |  侧边导航选中时背景颜色  |    侧边导航    |
|       @ZEle-menu-left-fontColor        |     侧边导航文字颜色     |    侧边导航    |
|        @ZEle-menu-left-fontSize        |     侧边导航文字大小     |    侧边导航    |
|    @ZEle-menu-left-active-fontColor    |  侧边导航选中时字体颜色  |    侧边导航    |

#### `theme.less`文件介绍

调用 rewrite.less 文件,对其进行相应操作
