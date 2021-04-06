# 自定义 `component`

创建一个叫做 `MyComponent.js` 的文件

在项目的入口引用这个文件

将这个文件命名为 `MyComponent` 并注入

```javascript
import { set as CSet } from 'zero-element/lib/config/container';
import MyComponent from './MyComponent.js';

CSet({
  'MyComponent': MyComponent,
});
```

# 使用自定义 `component`

```javascript
const config = {
  items: [
    {
      component: 'MyComponent',
    }
  ]
};

return <ZEle
    namespace=""
    config={config}
  />
```
