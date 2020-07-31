# zero-element
基于 React、antd 的后台页面快速开发框架。

### 特性

* 可通过配置文件生成基本的增删改后台管理页面
* 可通过配置实现常见的后台业务逻辑

### 安装

``` bash
npm install zero-element --save
npm install zero-element-antd --save-dev
```

### 使用

#### 在已有的项目中使用

如果想在其它项目使用 zero-element, 那么需要如下方式引用:

在项目的根目录下, 新建一个文件 `init.js` :

``` js
var init = require('zero-element-antd/lib/init.js');
init();
```

然后在项目的入口文件里面:

``` js
import zeroAntd from './zero-antd-dep';
```

最后启动项目:

``` bash
node ./init.js && npm start
```

> 这些操作的目的是将 `zero-element-antd/lib` 里面的文件当作普通的项目文件来使用
> [这么做的原因](https://github.com/webpack/webpack/issues/10722#issuecomment-629619174)

#### 在新项目中使用

推荐直接使用 cli [zero-json](https://github.com/kequandian/zero-json) 工具来初始化一个新的项目，这样就无需进行上面的引用步骤

### 安装

``` bash
git clone git@github.com:kequandian/zero-json.git
npm install 

```

### 使用
通过如下方式引用:

在项目的根目录下, 通过命令zero-json manage init "目录名称" 初始化一个后台管理项目

``` 
例如 zero-json manage init web 
```

然后在项目下新建一个目录存放json配置文件:

 - [json](json.md)

``` 
例如 config/config.json
```

然后在后台管理项目pages目录下
通过zero-json manage gen "目录名称" -i "json文件所在目录" 直接生成 CRUD 页面代码

``` 
例如zero-json manage gen test -i ./config/config.json 
生成的CRUD页面代码在test目录下
```

需要在后台管理项目public目录下的对config.js进行设置
- [config](config.md)

``` 
例如
import {set as APIConfig} from "zero-element/lib/config/APIConfig";

if (window.ZEle === undefined) {
  window.ZEle = {};
}
window.ZEle.endpoint = "http://localhost:8089";//设置为本机地址
window.ZEle.nav = "top";
window.ZEle.theme = "#1890ff";
window.ZEle.indexPage = "/test"; //这里设置为生成的test目录
window.ZEle.breadcrumb = false;

window.ZEle.remoteConfig = {};
```

最后启动项目
``` 
npm start
```