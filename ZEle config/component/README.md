# component
配置里面的 `component` 决定了 `ZEle` 渲染哪些组件

`ZEle` 里面预设了一些常用的 `component` 

### Table

`Table` 用于渲染一个表格. 它的主要配置项为

* API
* actions
* fields
* operation 

#### API

可分为以下两个配置项

* listAPI 

> `Table` 初始化挂载后或者点击翻页时, 默认会自动调用这个 api

* deleteAPI 

> 在 `operation` 里面点击删除后，默认调用此 api

#### actions

`Table` 的 action, 通常是 新增数据等操作

#### fields

标准的 `ZEle field` 组成的列表, 将会渲染成为表格的 `columns`

#### operation

`operation` 是指对 `Table` 数据里面的单行进行操作, 通常用于 编辑/删除

##### config 结构示意

``` js
{
  component: 'Table',
  config: {
    {
      actions: [
        { title: '新增', type: 'path', options: { path: '/sys/user-add' } }
      ],
    }，
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
  },
}
```

### Search

### Form

`Form` 将渲染为一个表单, 它的主要配置为

* API
* fields

#### API

可分为以下配置项

* createAPI

> 点击提交按钮时, 发送一个 POST 请求

* getAPI

> 通过 GET 请求一个实体数据. 一般与 updateAPI 配合来完成一个编辑页

* updateAPI

> 点击提交按钮时, 发送一个 PUT 请求. 一般与 getAPI 来配合完成一个编辑页

#### fields

标准的 `ZEle field` 组成的列表, 将会渲染具体的表单域

