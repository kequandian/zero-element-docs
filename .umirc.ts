import { defineConfig } from 'dumi';

export default defineConfig({
  favicon: 'https://avatars.githubusercontent.com/u/44112389?s=200&v=4',
  title: 'zero-element',
  mode: 'site', //注释掉为doc模式
  logo: 'https://avatars.githubusercontent.com/u/44112389?s=200&v=4',
  navs: [
    // null, //默认为null，直接显示目录结构里的导航
    {
      title: '开发文档',
      path: 'http://docs.smallsaas.cn',
    },
    {
      title: 'zero-element',
      path: '/guide',
    },
    {
      title: 'Github',
      path: 'http://github.com/kequandian/zero-element-docs',
    },
  ],
  menus: {
    '/guide': [
      {
        title: '简介',
        path: '/guide',
      },
      {
        title: '配置说明',
        path: '/guide/config',
      },
      {
        title: '数据域说明',
        path: '/guide/namespace',
        children: [],
      },
      {
        title: '脚手架说明',
        path: '/guide/codeadmin',
      },
      {
        title: 'schema的自定义组件',
        path: '/guide/schema自定义组件',
      },
      {
        title: '常见问题',
        path: '/guide/issue',
      },
    ],
  },
});
