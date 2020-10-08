# 自定义表单 `field`

创建一个叫做 `MyFormField.js` 的文件

在项目的入口引用这个文件

将这个文件命名为 `my-form-field` 并注入

> 标准 field 里面, field 的命名应该使用连词符 `-` 而不是使用驼峰

```javascript
import { set as FITSet } from 'zero-element/lib/config/formItemType';
import MyFormField from './MyFormField.js';

FITSet({
  'my-form-field': MyFormField,
});
```

# 使用自定义表单 `field`

```javascript
const config = {
  items: [
    {
      component: 'Form',
      config: {
        fields: [
          {
            label: '我的自定义 field',
            field: '',
            type: 'my-form-field',
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
