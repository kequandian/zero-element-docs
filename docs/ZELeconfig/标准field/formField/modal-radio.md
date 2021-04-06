# type `modal-radio`

点击一个按钮, 在弹出的模态框中选择一条数据

## options

### *API

必填项 `string`

模态框里面的列表数据的 API

### *fields

必填项 [列表标准字段](/ZEleconfig/标准field/list-field/README.md)

模态框里面的列表的字段

### searchFields

选填项 [表单标准字段](/ZEleconfig/标准field/form-field/README.md)

模态框里面的 `Search` 的字段

如果配置 `false`, 那么就会不显示 `Search`

> 默认值: `[{ label: '搜索', field: 'search', type: 'input', placeholder: '请输入搜索内容...' }]`

### pagination

选填项 `boolean`

模态框里面的列表是否启用分页

> 默认值: false

### title

选填项 `string`

按钮的文本, 在未选择数据之前起引导作用 模态框的 title

> 默认值: "选择数据"

### modalWidth

选填项 `string` 或者 `number`

弹出的模态框的宽度

### label

选填项 `string`

按钮的文本, 在选择了数据之后, 会读取已选择的数据里面的 `label` 作为回显

> 默认值: "name"

### editLabel

选填项 `string`

按钮的文本, 如若是一个用于编辑数据的表单, 那么从 API 返回的数据里面选择 `editLabel` 字段作为回显

> 默认值会读取 `label` 的值作为默认值

### saveData

选填项 `{}`

把选中数据的额外字段保存出来

`{}` 的 `key` 是保存出来的字段, `value` 是选中数据里需要额外保存的字段

## 完整示例

```javascript
{ label: '', field: '', type: 'modal-radio', options: {
    API: '/api/example',
    searchFields: [
      { label: '订单编号', field: 'orderNumber', type: 'input' },
    ],
    fields: [
      { label: '订单编号', field: 'orderNumber' },
      { label: '订单总金额', field: 'money', valueType: 'currency' },
    ],
    saveData: {
      'totalMoney': 'money', // 同时将选中订单的金额保存为 totalMoney
    },
    title: '选择待处理订单',
    modalWidth: 780,
    label: 'orderNumber',
    editLabel: 'orderNumber',
    pagination: true,
},
{ label: '订单总金额', field: 'totalMoney', type: 'plain' }
```
