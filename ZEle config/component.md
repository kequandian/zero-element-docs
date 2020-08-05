# component

配置里面的 `component` 决定了 `ZEle` 渲染哪些组件

`ZEle` 里面预设了以下一些常用的 `component`组件

- Table,用于显示列表内容
- Search, 用于索引
- Form, 用于提交表单数据, 如添加, 编辑

## Table组件属性

`Table` 用于渲染一个表格, 主要用于显示列表内容, 它的主要属性配置如下

- API
- actions, 用于新增数据等操作
- fields, 显示列表内容
- operation, 用于 编辑/删除

```javascript
{
  component: 'Table',
  config: {
    {
      actions: [
        { title: '新增', type: 'path', options: { path: '/sys/user-add' } }
      ],
    },
    API: {
      listAPI: '/api/sys/uers',
      deleteAPI: '/api/sys/uers/(id)',
    },
    fields: [
      { label: '', field: '' },
      ...
    ],
    operation: [
      { title: '删除', type: 'delete' }
    ]
  }
}
```

### Table组件API配置

可分为以下两个配置项

- listAPI

> `Table` 初始化挂载后或者点击翻页时, 默认会自动调用这个 api

- deleteAPI

> 在 `operation` 里面点击删除后, 默认调用此 api

```javascript
API: {
  listAPI: '/api/sys/uers',
  deleteAPI: '/api/sys/uers/(id)',
}
```

### Table组件actions配置

`Table` 的 action, 通常是 新增数据等操作, 例如

```javascript
actions: [
  { title: '新增', type: 'path', options: { path: '/sys/user-add' } }
],
```

### Table组件fields配置

标准的 `ZEle field` 组成的列表, 将会渲染成为表格的 `columns`

```javascript
fields: [
  { label: '', field: '' }, // label渲染为列名, field显示列表的内容
  ...
]
```

### Table组件operation配置

`operation` 是指对 `Table` 数据里面的单行进行操作, 通常用于 编辑/删除

```javascript
operation: [
  { title: '删除', type: 'delete' }
]
```

## Search组件属性

渲染为一个搜索组件, 它会与同一个 `namespace` 下面的 `Table` 绑定 它的主要配置项为

- fields

### Search组件fields配置

标准的 `ZEle field` 组成的列表, 将会渲染成为用于搜索表格的字段域

```javascript
{
  component: 'Search', // 渲染一个已注册的名为 Search 的组件
  config: { // 这里的 config 内容由 component 决定
    fields: [
      { label: '员工姓名', field: 'name', type: 'input' },
      { label: '员工生日', field: 'dob', type: 'date' },
    ]
  }
}
```

--------------------------------------------------------------------------------

## Form组件属性

`Form` 将渲染为一个表单, 它的主要配置为

- API
- fields

```javascript
{
  component: 'Form',
  config: {
    API: {
      createAPI: '/api/sys/uers',
      getAPI: '/api/sys/uers/(id)',
      updateAPI: '/api/sys/uers/(id)'
    },
    fields: [
      { label: '', field: '' },
      ...
    ],
  }
}
```

### Form组件属性API配置

可分为以下配置项

- createAPI

> 点击提交按钮时, 发送一个 POST 请求

```javascript
API: { createAPI: '/api/sys/uers', }
```

- getAPI

> 通过 GET 请求一个实体数据. 一般与 updateAPI 配合来完成一个编辑页

```javascript
API: { getAPI: '/api/sys/uers/(id)', }
`
```

- updateAPI

> 点击提交按钮时, 发送一个 PUT 请求. 一般与 getAPI 来配合完成一个编辑页

```javascript
API: {
  updateAPI: '/api/sys/uers/(id)',
}
`
```

#### Form组件fields配置

标准的 `ZEle field` 组成的列表, 将会渲染具体的表单域

```javascript
fields: [ { label: '', field: '' }, ... ]
```
