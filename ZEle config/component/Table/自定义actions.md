# 自定义 `actions`

创建一个叫做 `MyAction.js` 的文件

在项目的入口引用这个文件

将这个文件命名为 `myAction` 并注入

```javascript
import { set as AITSet } from 'zero-element/lib/config/actionItemType';
import MyAction from './MyAction.js';

AITSet({
  'myAction': MyAction,
});
```

# 使用自定义 `actions`

```javascript
const config = {
  items: [
    {
      component: 'Table',
      config: {
        actions: [
          {
            title: '我的自定义 action',
            type: 'myAction',
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
