# Zero Code Admin

`Zero Code Admin` 是通过 `zero-json` 生成的脚手架项目, 提供了基础页面/布局等常用功能

## 导航风格定义

修改位于 `public/config.js` 文件下的内容可变更导航菜单的风格:

```javascript
window.ZEle.nav = "LeftNavCollaps";
```

目前预设了如下的导航风格

- LeftNavCollaps

  ![LeftNavCollaps.png](https://gitee.com/hdij/this-is-a-project/raw/master///20200824184541.png)

- top ![top.png](https://cdn.jsdelivr.net/gh/h89916300/this-is-a-project/1598256352452-1598256352443-top.png)

- left ![left.png](https://gitee.com/hdij/this-is-a-project/raw/master///20200824171054.png)

- both ![both.png](https://gitee.com/hdij/this-is-a-project/raw/master///20200824171218.png)

> 该配置为静态变量, 更改后需要手动刷新页面才能生效

## 颜色风格定义

主题颜色的定义文件位于 `src/theme.less`, 会直接影响 导航颜色和按钮颜色

```less
@ZEle-primary-color        : #610b0b; -- 连接字体默认颜色
@ZEle-primary-color-light  : #860909; -- 鼠标悬浮 字体颜色
@ZEle-primary-color-bgColor: #fcd0d0; -- 选中项背景色
```

### 例子:

- @ZEle-primary-color : #610b0b;

  ![](https://gitee.com/hdij/this-is-a-project/raw/master///20200824172729.png)

- @ZEle-primary-color-light : #860909;

  ![](https://gitee.com/hdij/this-is-a-project/raw/master///20200824173327.png)

- @ZEle-primary-color-bgColor: #fcd0d0;

  ![](https://gitee.com/hdij/this-is-a-project/raw/master///20200824173551.png)

`src/theme.less`还可以配置一些组件的颜色

```less
// ---- 导航 ----
@ZEle-menu-icon              : white;
// 顶部导航
@ZEle-menu-top-bgColor       : #0b4f79;
@ZEle-menu-top-active-bgColor: #2489c7;
@ZEle-menu-top-fontColor     : #fff;
@ZEle-menu-top-fontSize      : 16px;

// 左部导航
@ZEle-menu-left-bgColor       : white;
@ZEle-menu-left-active-bgColor: #2489c7;
@ZEle-menu-left-fontColor     : #0b4f79;
@ZEle-menu-left-fontSize      : 16px;
@ZEle-menu-left-active-fontColor: #fff;

// 主要，次要，默认按钮颜色配置 -- (如 添加, 导入, 导出 按钮)
@ZEle-action-primary                : #0b4f79;
@ZEle-action-primary-fontColor      : #fff;
@ZEle-action-primary-light          : #6db2dd;
@ZEle-action-primary-light-fontColor: #fff;

@ZEle-action-secondary                : #0b4f79;
@ZEle-action-secondary-fontColor      : #fff;
@ZEle-action-secondary-light          : #6db2dd;
@ZEle-action-secondary-light-fontColor: #fff;

@ZEle-action-default                : #0b4f79;
@ZEle-action-default-fontColor      : #fff;
@ZEle-action-default-light          : #6db2dd;
@ZEle-action-default-light-fontColor: #fff;

```
