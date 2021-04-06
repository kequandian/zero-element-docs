# 自定义 `operation`

创建一个叫做 `MyOperation.js` 的文件

在项目的入口引用这个文件

将这个文件命名为 `onMyOperation` 并注入

> 注意, 必须命名为 `onXxxx` 这样的 on + 驼峰 的形式注入

```javascript
import { set as LASet } from 'zero-element/lib/config/listAction';
import MyOperation from './MyOperation.js';

LASet({
  'onMyOperation': MyOperation,
});
```

# 使用自定义 `operation`

```javascript
const config = {
  items: [
    {
      component: 'Table',
      config: {
        operation: [
          {
            title: '我的自定义 operation',
            type: 'onMyOperation',
            options: {
              outside: false,
            }
          }
        ]
      }
    }
  ]
};

return <ZEle
    namespace=""
    config={config}
  />
```
