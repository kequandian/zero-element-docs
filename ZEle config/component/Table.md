# component `Table`

`Table` 将渲染为一个表格, 可以与 component [Search](./Search.md) 搭配使用

`Table` 会和同一个 `namespace` 下面的 [Search](./Search.md) 自动绑定, 点击 [Search](./Search.md) 的搜索会自动触发 `Table` 的数据更新

> 与之相对的, 同一个 `namespace` 里面应当只有一对 `Table` 与 [Search](./Search.md) 的组合, 不然无法保证搜索逻辑绑定正确

--------------------------------------------------------------------------------

## config `API`

### listAPI

`Table` 初始化时自动访问的 api, 并将返回的数据填入 `fields` 里面的表格列

### deleteAPI

表格的数据项的删除 api, 在配置了 `operation type delete` 的情况下需要同时配置 `deleteAPI`

--------------------------------------------------------------------------------

## config `actions`

一般地, 将 `Table` 的整体性的操作称之为 `actions`, 将会渲染为按钮的形式

`actions` 是个 Object[], 每个 `actions` 的子项 Object 的数据结构如下

```javascript
{ title: '', type: '', options: {} }
```

`title` 是显示在按钮中的文本

`type` 与 `options` 必须搭配使用, 决定了 `actions` 子项的具体功能

### actions type `path`

点击后跳转页面

#### options

##### path `string`

具体的跳转路由

#### 示例

```javascript
{ title: '', type: 'path', options: {
    path: '/sys/user-add',
  } 
}
```

### actions type `modal`

点击后弹出一个模态框, 可以用来完成单项表格数据的新增

#### options

##### modalTitle `string`

模态框的标题

##### modalWidth `string`

模态框的宽度

##### items `config[]`

模态框的具体渲染内容, 有完整的渲染 [config](../README.md) 的能力

#### 示例

```javascript
{ title: '', type: 'modal', options: {
    modalTitle: '添加数据',
    modalWidth: 1000,
    items: [
      {
        component: 'Form',
        config: {
          API: {
            createAPI: '/api/sys/user',
          },
          fields: [
            { label: '', field: '', type: '' },
          ]
        }
      }
    ]
  } 
}
```

--------------------------------------------------------------------------------

## config `fields`

由 [列表标准字段](../标准%20field/listField/README.md) 组成的列表, 将会渲染具体的表格列

--------------------------------------------------------------------------------

## config `operation`

一般地, 将对 `Table` 具体数据的操作称之为 `operation`, 会渲染在每项(行)表格数据的右边

`operation` 是个 Object[], 每个 `operation` 的子项 Object 的数据结构如下

```javascript
{ title: '', type: '', options: {} }
```

`title` 是显示在按钮中的文本

`type` 与 `options` 必须搭配使用, 决定了 `operation` 子项的具体功能

### operation type `path`

点击后跳转页面

#### options

##### path `string`

具体的跳转路由

#### 示例

```javascript
{ title: '', type: 'path', options: {
    path: '/sys/user-add',
  } 
}
```

### operation type `request`

点击后直接访问api, 如 提交功能

#### options

##### outside (true or false: ) 默认展示或收起按钮
##### API `string`
##### method post

### [expect](https://github.com/kequandian/zero-element-docs/blob/master/ZEle%20config/expect.md)

#### 示例

```javascript
{
  title: '提交', 
  type: 'request',
  options:{
    outside: false,
    API: '',
    method: 'post'
  },
  expect: {}
},
```

### operation type `modal`

点击后弹出一个模态框, 可以用来完成对表格单项数据的编辑

#### options

##### modalTitle `string`

模态框的标题

##### modalWidth `string`

模态框的宽度

##### items `config[]`

模态框的具体渲染内容, 有完整的渲染 [config](../README.md) 的能力

#### 示例

```javascript
{ title: '', type: 'modal', options: {
    modalTitle: '编辑数据',
    modalWidth: 1000,
    items: [
      {
        component: 'Form',
        config: {
          API: {
            getAPI: '/api/sys/user/(id)',
            updateAPI: '/api/sys/user/(id)',
          },
          fields: [
            { label: '', field: '', type: '' },
          ]
        }
      }
    ]
  } 
}
```

### operation type `delete`

点击后删除当前行的数据项

#### options

无需配置 options, 删除时将会调用 `API deleteAPI` 指定的 api

--------------------------------------------------------------------------------

## 完整示例

```javascript
{
  component: 'Table',
  config: {
    API: {
      listAPI: '',
      deleteAPI: '', // 下面的 operation type delete 会调用这个 api
    },
    actions: [],
    fields: [
      { label: '', field: '', type: '' },
      ...
    ],
    operation: [
      { title: '', type: 'modal', options: {
          modalTitle: '编辑数据',
          modalWidth: 1000,
          items: [
            {
              component: 'Form',
              config: {
                API: {
                  getAPI: '/api/sys/user/(id)',
                  updateAPI: '/api/sys/user/(id)',
                },
                fields: [
                  { label: '', field: '', type: '' },
                ]
              }
            }
          ]
        } 
      },
      { title: '删除', type: 'delete' } // 删除时会调用上面的 API deleteAPI
    ],
  }
}
```
