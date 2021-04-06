# 自定义 `layout`

例如, 希望改进原有的 `layout Empty`, 希望它在没有传入子组件的情况下, 显示 antd 的 `Empty`

创建一个叫做 `Empty.js` 的文件

在项目的入口引用这个文件

因为是要覆盖原 layout 组件, 故需要作为同名的 `Empty` 注入

```javascript
import { set as LayoutSet } from 'zero-element/lib/config/layout';
import Empty from './Empty.js';

LayoutSet({
  'Empty': Empty,
});
```

# 使用自定义 `layout`

```javascript
const config = {
  layout: 'Empty',
  items: [
    {
      component: '',
      config: { }
    }
  ]
};

return <ZEle
    namespace=""
    config={config}
  />
```

## 改进后的 `Empty.js` 文件代码参考

```javascript
import React from 'react';
import { Empty } from 'antd';

export default function MyEmpty(props) {
  const { style, children } = props;

  if (React.Children.count(children) === 0) {
    return <Empty />
  }

  return <div style={style}>
    {children}
  </div>
}
```