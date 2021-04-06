import { defineConfig } from 'dumi';

export default defineConfig({
  favicon:'https://avatars.githubusercontent.com/u/44112389?s=200&v=4',
  title: '可圈点',
  mode: 'site',//注释掉为doc模式
  logo: 'https://avatars.githubusercontent.com/u/44112389?s=200&v=4',
  navs: [
    // null, //默认为null，直接显示目录结构里的导航
    {
      path:'/guide',
      title:'简介'
    },
    {
      path:'/ZEleconfig',
      title:'配置说明',
      children:[
        {title:'标准field',path:'/ZEleconfig/标准field'},
        {title:'component',path:'/ZEleconfig/component'},
        {title:'layout',path:'/ZEleconfig/layout'},
        {title:'expect',path:'/ZEleconfig/expect'}
      ]
    },
    {
      path:'/ZElenamespace',
      title:'数据域说明'
    },
    {
      path:'/code-admin',
      title:'脚手架说明',
    },
    {
      title:'菜单',
      children:[
        {
          path:'http://github.com/kequandian',
          title:'关于我们',
        },
      ]
    }
  ],
  menus:{
    '/guide':[
      {
        title:'zero-element是什么？',
        path:'/guide',
      }
    ],
    '/ZEleconfig':[
      {
        title:'配置说明',
        path:'/ZEleconfig',
        children:[
          {
            title:'一、标准field',
            path:'/ZEleconfig/标准field'
          },
          {
            title:" -> 1. 表单标准字段",
            path:'/ZEleconfig/标准field/form-field'
          },
          {
            title:" --> ( 1 ) 自定义表单field",
            path:"/ZEleconfig/标准field/form-field/自定义表单field"
          },
          {
            title:" --> ( 2 ) 标准表单字段配置项",
            path:"/ZEleconfig/标准field/form-field/common"
          },
          {
            title:" --> ( 3 ) date",
            path:"/ZEleconfig/标准field/form-field/date"
          },
          {
            title:" --> ( 4 ) modal-radio",
            path:"/ZEleconfig/标准field/form-field/modal-radio"
          },
          {
            title:" --> ( 5 ) one-mary",
            path:"/ZEleconfig/标准field/form-field/one-mary"
          },
          {
            title:" --> ( 6 ) plain",
            path:"/ZEleconfig/标准field/form-field/plain"
          },
          {
            title:" --> ( 7 ) range",
            path:"/ZEleconfig/标准field/form-field/range"
          },
          {
            title:' -> 2. 列表标准字段',
            path:'/ZEleconfig/标准field/list-field'
          },
          {
            title:" --> ( 1 ) 自定义列表valueType",
            path:"/ZEleconfig/标准field/list-field/自定义列表value-type"
          },
          {
            title:" --> ( 2 ) currency",
            path:"/ZEleconfig/标准field/list-field/currency"
          },
          {
            title:" --> ( 3 ) ellipsis",
            path:"/ZEleconfig/标准field/list-field/ellipsis"
          },
          {
            title:" --> ( 4 ) image",
            path:"/ZEleconfig/标准field/list-field/image"
          },
          {
            title:" --> ( 5 ) map",
            path:"/ZEleconfig/标准field/list-field/map"
          },
          {
            title:" --> ( 6 ) percentage",
            path:"/ZEleconfig/标准field/list-field/percentage"
          },
          {
            title:" --> ( 7 ) plain",
            path:"/ZEleconfig/标准field/list-field/plain"
          },
          {
            title:" --> ( 8 ) tag",
            path:"/ZEleconfig/标准field/list-field/tag"
          },
          {
            title:"二、component",
            path:"/ZEleconfig/component"
          },
          {
            title:" -> 1. Table",
            path:"/ZEleconfig/component/Table"
          },
          {
            title:" --> ( 1 ). 自定义actions",
            path:"/ZEleconfig/component/Table/自定义actions"
          },
          {
            title:" --> ( 2 ). operation",
            path:"/ZEleconfig/component/Table/自定义operation"
          },
          {
            title:" --> ( 3 ). AutoReport",
            path:"/ZEleconfig/component/Table/auto-report"
          },
          {
            title:" --> ( 4 ). ItemList",
            path:"/ZEleconfig/component/Table/Item-list"
          },
          {
            title:" -> 2. 自定义component",
            path:"/ZEleconfig/component/自定义component"
          },
          {
            title:" -> 3. Form",
            path:"/ZEleconfig/component/form"
          },
          {
            title:" -> 4. search",
            path:"/ZEleconfig/component/search"
          },
          {
            title:"三、layout",
            path:"/ZEleconfig/layout"
          },
          {
            title:" -> 1.自定义layout",
            path:"/ZEleconfig/layout/自定义layout"
          },
          {
            title:"四、expect",
            path:"/ZEleconfig/expect"
          },
        ]
      },
      {
        title:'数据域说明',
        path:'/ZElenamespace',
      },
      {
        title:'脚手架说明',
        path:'/code-admin',
      }
    ],
    '/ZElenamespace':[
      {
        title:'配置说明',
        path:'/ZEleconfig',
      },
      {
        title:'数据域说明',
        path:'/ZElenamespace',
        children:[
          
        ]
      },
      {
        title:'脚手架说明',
        path:'/code-admin',
      }
    ],
    '/code-admin':[
      {
        title:'配置说明',
        path:'/ZEleconfig',
      },
      {
        title:'数据域说明',
        path:'/ZElenamespace',
      },
      {
        title:'脚手架说明',
        path:'/code-admin',
        children:[

        ]
      }
    ],
  }
});
