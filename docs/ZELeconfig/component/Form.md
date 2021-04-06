# component `Form`

`Form` 将渲染为一个表单

- API
- fields, 是[表单标准字段](/ZEleconfig/标准field/form-field)

--------------------------------------------------------------------------------

## config `API`

`Form` 的对数据的提交方式, 将会由 `API` 的配置来决定

> `getAPI` 可以与 `createAPI` `updateAPI` 搭配一起使用

> `createAPI` 与 `updateAPI` 是互斥的, 不应该在一起使用

### createAPI

配置了 `createAPI` 的即为一个 `创建数据的表单`, 点击提交按钮时会将数据以 `POST` 的方式发送到 `createAPI` 指定的 api

```javascript
API: { createAPI: '/api/sys/uers' }
```

### getAPI

`getAPI` 将会在 `Form` 初始化时调用, 将会从 api 中获取数据并填入 `fields` 里面对应的表单域

```javascript
API: { getAPI: '/api/sys/uers/[id]' }
```

### updateAPI

配置了 `updateAPI` 的即为一个 `编辑数据的表单`, 点击提交按钮时会将数据以 `PUT` 的方式发送到 `updateAPI` 指定的 api

> 一般与 getAPI 来配合完成一个编辑页

```javascript
API: { updateAPI: '/api/sys/uers/[id]' }
```

--------------------------------------------------------------------------------

## config `fields`

由 [表单标准字段](/ZEleconfig/标准field/form-field) 组成的列表, 将会渲染具体的表单域

--------------------------------------------------------------------------------

## 完整示例

```javascript
{
  component: 'Form',
  config: {
    API: {
      createAPI: '/api/sys/uers',
      getAPI: '/api/sys/uers/[id]',
      updateAPI: '/api/sys/uers/[id]'
    },
    fields: [
      { label: '', field: '', type: '' },
      ...
    ],
  }
}
```
