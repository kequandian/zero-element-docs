# type `one-mary`

处理一对多关系

## options

`one-mary` 的配置结构与 `Table` 类似

### actions

选填项 `[]`

一对多里面的 `List Action`

#### type `children-modal-add`

弹出一个模态框来进行子项数据的添加

普通的 `List Action` 会使用 type [modal](../../component/Table.md#actions%20type%20`modal`) 来弹出一个模态框, 而不同的是 `one-mary` 这里一般会使用特殊的 type `children-modal-add`

同时, 里面的 component 应该使用 `ChildrenForm`

里面的 config 应该与 `Form` 的 `config` 相同

### *fields

必填项 [列表标准字段](/ZELeconfig/标准field/list-field)

显示出来的列表的字段

### operation

对一对多子项数据进行操作

#### type `childEditModal`

弹出一个模态框来进行子项数据的编辑

请注意这里需要使用特殊的 type `childEditModal`

同时, 里面的 component 应该使用 `ChildrenForm`

里面的 config 应当与 [Form](/ZELeconfig/component/Form.md) 的 `config` 相同

## 完整示例

```javascript
{ 
  field: 'items', label: '', type: 'one-mary', span: 24, options: {
    actions: [
      {
        title: '添加产品', type: 'children-modal-add', options: {
          modalTitle: '添加产品',
          modalWidth: 580,
          items: [
            {
              component: 'ChildrenForm',
              config: { // 表单的标准配置
                fields: []
              },
            }
          ],
        }
      },
    ],
    fields: [
      { label: '产品编号', field: 'product' },
      { label: '产品', field: 'itemName' },
      { label: '产品单价', field: 'price' },
      { label: '税率', field: 'taxRatio' },
      { label: '数量', field: 'amount' },
    ],
    operation: [
      {
        title: '编辑', type: 'childEditModal',
        options: {
          outside: true,
          modalTitle: '编辑产品',
          modalWidth: 580,
          items: [
            {
              component: 'ChildrenForm',
              config: { // 表单的标准配置
                fields: []
              },
            }
          ],
        }
      },
      {
        title: '移除', type: 'removeChild',
        options: {
          outside: true,
        }
      },
    ],
  }
}
```
