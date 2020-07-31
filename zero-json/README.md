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
例如 config/config.json
```

然后在后台管理项目pages目录下
通过zero-json manage gen "目录名称" -i "json文件所在目录" 直接生成 CRUD 页面代码

``` 
例如zero-json manage gen test -i ./config/config.json 
生成的CRUD页面代码在test目录下
```

需要在后台管理项目public目录下的对config.js进行设置
- [config](../zero-json/config.md)

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