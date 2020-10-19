# component `ItemList`

传入一个 `Item`, 随后 `ItemList` 会将 `Item` 渲染为列表

## props `Item`

必须的参数, 用来渲染 item 子项

## 完整示例

### 文件 index.js

```javascript
import MyItem from './MyItem';
import config from './config';

export default function () {
  return <ZEle
    namespace=""
    Item={MyItem} // 传入 Item
    config={config}
 />
}
```

### 文件 MyItem.js

```javascript
import React from 'react';

export default function MyItem(props) {
  const { index, data, handle } = props;

  return <div>
    <div>No.{index}</div>
    <div>员工名称:{data.title}</div>
    <div onClick={handle.onDelete}>删除员工</div>
  </div>
}
```

### 文件 config.js

```javascript
module.exports = {
  layout: 'Content',
  title: '自定义列表子项',
  items: [
    {
      component: 'ItemList',
      config: {
        API: {
          listAPI: '/api/sys/user',
        },
        fields: [],
      },
    },
  ],
}
```
