# Zero Code Admin

`Zero Code Admin` 是通过 `zero-json` 生成的脚手架项目, 提供了基础页面/布局等常用功能

## 导航风格定义

修改位于 `public/config.js` 文件下的内容可变更导航菜单的风格:

```javascript
window.ZEle.nav = "LeftNavCollaps";
```

目前预设了如下的导航风格

- #### LeftNavCollaps 
	
	![LeftNavCollaps.png](https://cdn.jsdelivr.net/gh/h89916300/this-is-a-project/1598256330818-1598256330807-LeftNavCollaps.png)
	
- #### top
	![top.png](https://cdn.jsdelivr.net/gh/h89916300/this-is-a-project/1598256352452-1598256352443-top.png)
	
- left

- both

> 该配置为静态变量, 更改后需要手动刷新页面才能生效

## 颜色风格定义

主题颜色的定义文件位于 `src/theme.less`, 会直接影响 导航颜色和按钮颜色

```css
@ZEle-primary-color        : #610b0b;
@ZEle-primary-color-light  : #860909;
@ZEle-primary-color-bgColor: #fcd0d0;
```
