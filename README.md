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

使用命令 `zero-json manage init 项目名称` 即可初始化一个 zero-element 项目的脚手架

---

最后, 通过 props 传入配置文件 config 即可: 

``` js
import React from 'react';
import ZEle from 'zero-element';
import config from './config/page';

export default function Page() {
  return <ZEle namespace="test" config={config} />
}
```

## 开发索引

> * [数据域说明(namespace)](./ZEle%20namespace/namespace.md)
> * [配置说明(config)](./ZEle%20config/config.md)
> * [组件说明(compoent)](./ZEle%20config/component.md)

