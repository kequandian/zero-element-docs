# 自定义列表 `valueType`

创建一个叫做 `MyListField.js` 的文件

在项目的入口引用这个文件

将这个文件命名为 `my-list-field` 并注入

> 注入的命名应该使用连词符 `-` 而不是使用驼峰

```javascript
import { set as VTSet } from 'zero-element/lib/config/valueType';
import MyListField from './MyListField.js';

VTSet({
  'my-list-field': MyListField,
});
```

# 使用自定义列表 `valueType`

```javascript
const config = {
  items: [
    {
      component: 'Table',
      config: {
        fields: [
          {
            label: '我的自定义 field',
            field: '',
            valueType: 'my-list-field',
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
