# ZEle config 数据格式

本文档将会介绍传入 `Zele` 的 `config` 的格式

```js
<ZEle
	namespace=""
	config={  }   //  <---- 本文档介绍内容
/>
```

`config` 是 `ZEle` 里面的重要参数, 决定了 `ZEle` 渲染的内容

##### config 数据结构
```js
{
  layout: '',
  title: '',
  items: [
    {
      component: '',
      config: {}
    },
    {
      component: '',
      config: {}
    },
    ...
  ]
}
```

##### 一个标准的 config 示例

该 `config` 可渲染一个较为功能完备的员工列表页
包括了
 - 自动获取列表数据
 - 可通过 员工姓名/员工生日 来对列表搜索
 - 对列表数据进行了映射: 性别/状态
 - 可对列表项进行删除
 - 点击 新增/编辑 进行页面跳转

```js
{
  layout: 'TitleContnet', // 页面级别的 Layout
  title: '员工管理',  // 可选, 由上面的 layout 控制显示效果
  items: [
    {
      component: 'Search', // 渲染一个已注册的名为 Search 的组件
      config: { // 这里的 config 内容由 component 决定
        fields: [
          { label: '员工姓名', field: 'name', type: 'input' },
          { label: '员工生日', field: 'dob', type: 'date' },
        ]
      },
    },
    {
      component: 'Table',	// 渲染一个名为 Table 的组件
      config: {
        API: {
          listAPI: '/api/sys/user', // 组件渲染后, 将会自动调用这个 api 来获取列表数据
          deleteAPI: '/api/sys/user/(id)',
        },
        acitons: [
          { title: '新增员工', type: 'path', options: {
            	path: '/sys/uers-add',  // 点击新增员工时，跳转到这个页面
          	}
          }
        ],
        fields: [
          { label: '员工姓名', field: 'name' },
          { label: '性别', field: 'sex', valueType: 'map', options: {
              map: {
                0: '男',
                1: '女',
              }
            }
          },
          { label: '手机', field: 'phone' },
          { label: '状态', field: 'status', valueType: 'tag', options: {
              map: {
                NORMAL: '正常',
                FORBIDDEN: '禁用',
              },
              color: {
                NORMAL: '#b7eb8f',
                FORBIDDEN: 'red',
              },
            } 
          },
          { label: '生日', field: 'dob' },
        ],
        operation: [
          { title: '编辑', type: 'path', options: {
            outside: true,
            path: '/sys/uers-edit',	// 点击编辑时，跳转到这个页面
          }
          },
          { title: '删除', type: 'delete' }, // 默认会调用上面的 API.deleteAPI
        ]
      }
    }
  ]
}
```

