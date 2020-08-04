##zero-json
#### 在新项目中使用

推荐直接使用 cli [zero-json](https://github.com/kequandian/zero-json) 工具来初始化一个新的项目，这样就无需进行上面的引用步骤

### 安装

``` bash
git clone git@github.com:kequandian/zero-json.git
npm install 
npm link

```

### 使用
通过如下方式引用:

在项目的根目录下, 通过命令zero-json manage init "目录名称" 初始化一个后台管理项目

``` 
例如 zero-json manage init web 
```

然后在项目下新建一个目录存放json配置文件:

 - [json](../zero-json/json.md)

``` 
例如 [config.json存放目录]/config.json
```

然后在后台管理项目pages目录下 web/src/pages
通过zero-json manage gen "目录名称" -i "json文件所在目录" 直接生成 CRUD 页面代码

``` 
例如zero-json manage gen test -i [config.json存放目录]/config.json 
生成的CRUD页面代码在test目录下
```

后台管理项目布局设置

一、全局设置  web/public/config.js
- [config](../zero-json/config.md)

``` 
例如
import {set as APIConfig} from "zero-element/lib/config/APIConfig";

if (window.ZEle === undefined) {
  window.ZEle = {};
}
window.ZEle.endpoint = "http://localhost:8089";//设置为本机地址
window.ZEle.nav = "letf";
window.ZEle.theme = "#1890ff";
window.ZEle.indexPage = "/test"; //这里设置的路径为初始化展示页面
window.ZEle.breadcrumb = true;  //面包屑设置

window.ZEle.remoteConfig = {};
```

二、树形菜单设置  web/src/config/router.config.js

- [router.config](../zero-json/router.config.md)
``` 
例如
module.exports = [
  {
    name: '测试管理',   //一级菜单名
    path: '/tests', 
    items: [
      {
        name: '测试列表',      //二级菜单名
        path: '/tests/test',
      },
    ],
  },
  /*{
    name: '一级菜单',
    path: '/b',
    items: [
      {
        path: '/b/c',
        name: '二级菜单',
      },
    ],
  },*/
]
```
三、页面布局设置 web/src/pages/test/config/*.js

- [layout](../zero-json/layout.md)

``` 
例如
const setting = require('./test-setting.json');

module.exports = {
  layout: 'TitleContent',
  title: '新增' + setting.pageName,
  items: [
    {
      component: 'Form',
      config: {
        API: {
          createAPI: setting.createAPI,
        },
		layout: "Grid",                //layout设置，调整表单布局     
		layoutConfig: {
			value: [12,12]
		},
        fields: setting.formFields,
      },
    },
  ],
};
```

最后启动项目
``` 
npm start
```
