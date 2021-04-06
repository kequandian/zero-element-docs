// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'D:/work/githublib/zero-element-docs/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('D:/work/githublib/zero-element-docs/node_modules/@umijs/preset-dumi/lib/theme/layout').default],
    "component": (props) => {
        const { default: getDemoRenderArgs } = require('D:/work/githublib/zero-element-docs/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/src/builtins/Previewer.tsx');
        const { default: demos } = require('@@/dumi/demos');
        const { usePrefersColor } = require('dumi/theme');

        
      const renderArgs = getDemoRenderArgs(props, demos);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        }
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('D:/work/githublib/zero-element-docs/node_modules/@umijs/preset-dumi/lib/theme/layout').default, require('D:/work/githublib/zero-element-docs/node_modules/dumi-theme-default/src/layout.tsx').default],
    "routes": [
      {
        "path": "/",
        "component": require('D:/work/githublib/zero-element-docs/docs/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/README.md",
          "updatedTime": 1617677928000,
          "title": "可圈点-Zero-element框架",
          "hero": {
            "title": "Zero-element",
            "desc": "<div class=\"markdown\"><p>📝基于 React、antd 的后台页面快速开发框架</p></div>",
            "actions": [
              {
                "text": "了解Zero-element!",
                "link": "/guide"
              }
            ]
          },
          "features": [
            {
              "title": null
            },
            {
              "title": "框架支持"
            },
            {
              "title": null
            },
            {
              "icon": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fyoomark.com%2Fsites%2Fdefault%2Ffiles%2Ffield%2Fimage%2Flogo_native.png&refer=http%3A%2F%2Fyoomark.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620206292&t=68bacaa6e219575ac90c76d9760adf4c",
              "title": "React",
              "desc": "<div class=\"markdown\"><p>一个常用的js框架</p></div>"
            },
            {
              "title": "Zero-element",
              "icon": "https://avatars.githubusercontent.com/u/44112389?s=30&v=4",
              "desc": "<div class=\"markdown\"><p>React和Ant Design的组合</p></div>"
            },
            {
              "icon": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1386406274,2652719356&fm=26&gp=0.jpg",
              "title": "Ant Design",
              "desc": "<div class=\"markdown\"><p>一个常用的UI框架</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p><img src=\"https://avatars.githubusercontent.com/u/44112389?s=18&#x26;v=4\" />可圈点科技有限公司 @ 2021 Zero-element 操作手册</p></div>",
          "slugs": [
            {
              "depth": 1,
              "value": "索引",
              "heading": "索引"
            }
          ]
        },
        "title": "可圈点-Zero-element框架"
      },
      {
        "path": "/code-admin",
        "component": require('D:/work/githublib/zero-element-docs/docs/CodeAdmin/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/CodeAdmin/README.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "Zero Code Admin",
              "heading": "zero-code-admin"
            },
            {
              "depth": 2,
              "value": "导航风格定义",
              "heading": "导航风格定义"
            },
            {
              "depth": 2,
              "value": "颜色风格定义",
              "heading": "颜色风格定义"
            },
            {
              "depth": 3,
              "value": "例子:",
              "heading": "例子"
            }
          ],
          "title": "Zero Code Admin",
          "nav": {
            "path": "/code-admin",
            "title": "Code-admin"
          }
        },
        "title": "Zero Code Admin"
      },
      {
        "path": "/guide",
        "component": require('D:/work/githublib/zero-element-docs/docs/guide/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/README.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "zero-element",
              "heading": "zero-element"
            },
            {
              "depth": 2,
              "value": "特性",
              "heading": "特性"
            },
            {
              "depth": 2,
              "value": "安装",
              "heading": "安装"
            },
            {
              "depth": 2,
              "value": "使用",
              "heading": "使用"
            },
            {
              "depth": 3,
              "value": "在已有的项目中使用",
              "heading": "在已有的项目中使用"
            },
            {
              "depth": 3,
              "value": "在新项目中使用",
              "heading": "在新项目中使用"
            },
            {
              "depth": 4,
              "value": "使用 hash 路由",
              "heading": "使用-hash-路由"
            },
            {
              "depth": 2,
              "value": "开发索引",
              "heading": "开发索引"
            }
          ],
          "title": "zero-element",
          "nav": {
            "path": "/guide",
            "title": "Guide"
          }
        },
        "title": "zero-element"
      },
      {
        "path": "/zeleconfig/expect",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/expect.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/expect.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "expect",
              "heading": "expect"
            },
            {
              "depth": 2,
              "value": "options",
              "heading": "options"
            },
            {
              "depth": 3,
              "value": "formfields.expect",
              "heading": "formfieldsexpect"
            },
            {
              "depth": 3,
              "value": "listField.expect",
              "heading": "listfieldexpect"
            },
            {
              "depth": 3,
              "value": "rules.expect",
              "heading": "rulesexpect"
            }
          ],
          "title": "expect",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          }
        },
        "title": "expect"
      },
      {
        "path": "/zeleconfig",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/README.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "ZEle config 数据格式",
              "heading": "zele-config-数据格式"
            },
            {
              "depth": 2,
              "value": "config 数据结构",
              "heading": "config-数据结构"
            },
            {
              "depth": 2,
              "value": "一个标准的 config 示例",
              "heading": "一个标准的-config-示例"
            },
            {
              "depth": 3,
              "value": "属性配置",
              "heading": "属性配置"
            }
          ],
          "title": "ZEle config 数据格式",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          }
        },
        "title": "ZEle config 数据格式"
      },
      {
        "path": "/zeleconfig/component/form",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/component/Form.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/component/Form.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "component Form",
              "heading": "component-form"
            },
            {
              "depth": 2,
              "value": "config API",
              "heading": "config-api"
            },
            {
              "depth": 3,
              "value": "createAPI",
              "heading": "createapi"
            },
            {
              "depth": 3,
              "value": "getAPI",
              "heading": "getapi"
            },
            {
              "depth": 3,
              "value": "updateAPI",
              "heading": "updateapi"
            },
            {
              "depth": 2,
              "value": "config fields",
              "heading": "config-fields"
            },
            {
              "depth": 2,
              "value": "完整示例",
              "heading": "完整示例"
            }
          ],
          "title": "component Form",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/component",
            "title": "Component"
          }
        },
        "title": "component Form"
      },
      {
        "path": "/zeleconfig/component",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/component/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/component/README.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "component",
              "heading": "component"
            }
          ],
          "title": "component",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/component",
            "title": "Component"
          }
        },
        "title": "component"
      },
      {
        "path": "/zeleconfig/component/search",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/component/Search.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/component/Search.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "component Search",
              "heading": "component-search"
            },
            {
              "depth": 2,
              "value": "config fields",
              "heading": "config-fields"
            },
            {
              "depth": 2,
              "value": "完整示例",
              "heading": "完整示例"
            }
          ],
          "title": "component Search",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/component",
            "title": "Component"
          }
        },
        "title": "component Search"
      },
      {
        "path": "/zeleconfig/component/自定义component",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/component/自定义component.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/component/自定义component.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "自定义 component",
              "heading": "自定义-component"
            },
            {
              "depth": 1,
              "value": "使用自定义 component",
              "heading": "使用自定义-component"
            }
          ],
          "title": "自定义 component",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/component",
            "title": "Component"
          }
        },
        "title": "自定义 component"
      },
      {
        "path": "/zeleconfig/component/table/auto-report",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/component/Table/AutoReport.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/component/Table/AutoReport.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "component AutoReport",
              "heading": "component-autoreport"
            },
            {
              "depth": 2,
              "value": "config API",
              "heading": "config-api"
            },
            {
              "depth": 3,
              "value": "listAPI",
              "heading": "listapi"
            },
            {
              "depth": 2,
              "value": "完整示例 (含 AutoReportSearch)",
              "heading": "完整示例-含-autoreportsearch"
            }
          ],
          "title": "component AutoReport",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/component/table",
            "title": "Component/table"
          }
        },
        "title": "component AutoReport"
      },
      {
        "path": "/zeleconfig/component/table/item-list",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/component/Table/ItemList.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/component/Table/ItemList.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "component ItemList",
              "heading": "component-itemlist"
            },
            {
              "depth": 2,
              "value": "props Item",
              "heading": "props-item"
            },
            {
              "depth": 2,
              "value": "完整示例",
              "heading": "完整示例"
            },
            {
              "depth": 3,
              "value": "文件 index.js",
              "heading": "文件-indexjs"
            },
            {
              "depth": 3,
              "value": "文件 MyItem.js",
              "heading": "文件-myitemjs"
            },
            {
              "depth": 3,
              "value": "文件 config.js",
              "heading": "文件-configjs"
            }
          ],
          "title": "component ItemList",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/component/table",
            "title": "Component/table"
          }
        },
        "title": "component ItemList"
      },
      {
        "path": "/zeleconfig/component/table",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/component/Table/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/component/Table/README.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "component Table",
              "heading": "component-table"
            },
            {
              "depth": 2,
              "value": "config API",
              "heading": "config-api"
            },
            {
              "depth": 3,
              "value": "listAPI",
              "heading": "listapi"
            },
            {
              "depth": 3,
              "value": "deleteAPI",
              "heading": "deleteapi"
            },
            {
              "depth": 2,
              "value": "config actions [自定义]",
              "heading": "config-actions-自定义"
            },
            {
              "depth": 3,
              "value": "actions type path",
              "heading": "actions-type-path"
            },
            {
              "depth": 4,
              "value": "options",
              "heading": "options"
            },
            {
              "depth": 5,
              "value": "path string",
              "heading": "path-string"
            },
            {
              "depth": 4,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 3,
              "value": "actions type modal",
              "heading": "actions-type-modal"
            },
            {
              "depth": 4,
              "value": "options",
              "heading": "options-1"
            },
            {
              "depth": 5,
              "value": "modalTitle string",
              "heading": "modaltitle-string"
            },
            {
              "depth": 5,
              "value": "modalWidth string",
              "heading": "modalwidth-string"
            },
            {
              "depth": 5,
              "value": "modalStyle int",
              "heading": "modalstyle-int"
            },
            {
              "depth": 5,
              "value": "items config[]",
              "heading": "items-config"
            },
            {
              "depth": 4,
              "value": "示例",
              "heading": "示例-1"
            },
            {
              "depth": 2,
              "value": "config fields",
              "heading": "config-fields"
            },
            {
              "depth": 2,
              "value": "config operation [自定义]",
              "heading": "config-operation-自定义"
            },
            {
              "depth": 3,
              "value": "operation type path",
              "heading": "operation-type-path"
            },
            {
              "depth": 4,
              "value": "options",
              "heading": "options-2"
            },
            {
              "depth": 5,
              "value": "path string",
              "heading": "path-string-1"
            },
            {
              "depth": 4,
              "value": "示例",
              "heading": "示例-2"
            },
            {
              "depth": 3,
              "value": "operation type request",
              "heading": "operation-type-request"
            },
            {
              "depth": 4,
              "value": "options",
              "heading": "options-3"
            },
            {
              "depth": 5,
              "value": "outside (true or false: ) 默认展示或收起按钮",
              "heading": "outside-true-or-false--默认展示或收起按钮"
            },
            {
              "depth": 5,
              "value": "API string",
              "heading": "api-string"
            },
            {
              "depth": 5,
              "value": "method post",
              "heading": "method-post"
            },
            {
              "depth": 3,
              "value": "expect",
              "heading": "expect"
            },
            {
              "depth": 4,
              "value": "示例",
              "heading": "示例-3"
            },
            {
              "depth": 3,
              "value": "operation type modal",
              "heading": "operation-type-modal"
            },
            {
              "depth": 4,
              "value": "options",
              "heading": "options-4"
            },
            {
              "depth": 5,
              "value": "modalTitle string",
              "heading": "modaltitle-string-1"
            },
            {
              "depth": 5,
              "value": "modalWidth string",
              "heading": "modalwidth-string-1"
            },
            {
              "depth": 5,
              "value": "items config[]",
              "heading": "items-config-1"
            },
            {
              "depth": 4,
              "value": "示例",
              "heading": "示例-4"
            },
            {
              "depth": 3,
              "value": "operation type delete",
              "heading": "operation-type-delete"
            },
            {
              "depth": 4,
              "value": "options",
              "heading": "options-5"
            },
            {
              "depth": 2,
              "value": "完整示例",
              "heading": "完整示例"
            }
          ],
          "title": "component Table",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/component",
            "title": "Component"
          }
        },
        "title": "component Table"
      },
      {
        "path": "/zeleconfig/component/table/自定义actions",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/component/Table/自定义actions.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/component/Table/自定义actions.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "自定义 actions",
              "heading": "自定义-actions"
            },
            {
              "depth": 1,
              "value": "使用自定义 actions",
              "heading": "使用自定义-actions"
            }
          ],
          "title": "自定义 actions",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/component/table",
            "title": "Component/table"
          }
        },
        "title": "自定义 actions"
      },
      {
        "path": "/zeleconfig/component/table/自定义operation",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/component/Table/自定义operation.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/component/Table/自定义operation.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "自定义 operation",
              "heading": "自定义-operation"
            },
            {
              "depth": 1,
              "value": "使用自定义 operation",
              "heading": "使用自定义-operation"
            }
          ],
          "title": "自定义 operation",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/component/table",
            "title": "Component/table"
          }
        },
        "title": "自定义 operation"
      },
      {
        "path": "/zeleconfig/layout",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/layout/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/layout/README.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "layout",
              "heading": "layout"
            },
            {
              "depth": 2,
              "value": "已有的 layout",
              "heading": "已有的-layout"
            },
            {
              "depth": 3,
              "value": "自定义layout",
              "heading": "自定义layout"
            }
          ],
          "title": "layout",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/layout",
            "title": "Layout"
          }
        },
        "title": "layout"
      },
      {
        "path": "/zeleconfig/layout/自定义layout",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/layout/自定义layout.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/layout/自定义layout.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "自定义 layout",
              "heading": "自定义-layout"
            },
            {
              "depth": 1,
              "value": "使用自定义 layout",
              "heading": "使用自定义-layout"
            },
            {
              "depth": 2,
              "value": "改进后的 Empty.js 文件代码参考",
              "heading": "改进后的-emptyjs-文件代码参考"
            }
          ],
          "title": "自定义 layout",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/layout",
            "title": "Layout"
          }
        },
        "title": "自定义 layout"
      },
      {
        "path": "/zeleconfig/标准field",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/标准field/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/标准field/README.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "标准 field",
              "heading": "标准-field"
            },
            {
              "depth": 2,
              "value": "列表标准字段 [自定义valueType]",
              "heading": "列表标准字段-自定义valuetype"
            },
            {
              "depth": 2,
              "value": "表单标准字段 [自定义field]",
              "heading": "表单标准字段-自定义field"
            }
          ],
          "title": "标准 field",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/标准field",
            "title": "标准field"
          }
        },
        "title": "标准 field"
      },
      {
        "path": "/zeleconfig/标准field/form-field/common",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/标准field/formField/common.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/标准field/formField/common.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "标准表单字段 配置项",
              "heading": "标准表单字段-配置项"
            },
            {
              "depth": 2,
              "value": "props",
              "heading": "props"
            },
            {
              "depth": 2,
              "value": "options",
              "heading": "options"
            },
            {
              "depth": 2,
              "value": "value",
              "heading": "value"
            }
          ],
          "title": "标准表单字段 配置项",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/标准field/form-field",
            "title": "标准field/form-field"
          }
        },
        "title": "标准表单字段 配置项"
      },
      {
        "path": "/zeleconfig/标准field/form-field/date",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/标准field/formField/date.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/标准field/formField/date.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "type date, type week, type month",
              "heading": "type-date-type-week-type-month"
            },
            {
              "depth": 2,
              "value": "options",
              "heading": "options"
            },
            {
              "depth": 3,
              "value": "nowTime",
              "heading": "nowtime"
            },
            {
              "depth": 3,
              "value": "format",
              "heading": "format"
            },
            {
              "depth": 3,
              "value": "props",
              "heading": "props"
            },
            {
              "depth": 2,
              "value": "完整示例",
              "heading": "完整示例"
            }
          ],
          "title": "type date, type week, type month",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/标准field/form-field",
            "title": "标准field/form-field"
          }
        },
        "title": "type date, type week, type month"
      },
      {
        "path": "/zeleconfig/标准field/form-field/modal-radio",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/标准field/formField/modal-radio.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/标准field/formField/modal-radio.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "type modal-radio",
              "heading": "type-modal-radio"
            },
            {
              "depth": 2,
              "value": "options",
              "heading": "options"
            },
            {
              "depth": 3,
              "value": "*API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "*fields",
              "heading": "fields"
            },
            {
              "depth": 3,
              "value": "searchFields",
              "heading": "searchfields"
            },
            {
              "depth": 3,
              "value": "pagination",
              "heading": "pagination"
            },
            {
              "depth": 3,
              "value": "title",
              "heading": "title"
            },
            {
              "depth": 3,
              "value": "modalWidth",
              "heading": "modalwidth"
            },
            {
              "depth": 3,
              "value": "label",
              "heading": "label"
            },
            {
              "depth": 3,
              "value": "editLabel",
              "heading": "editlabel"
            },
            {
              "depth": 3,
              "value": "saveData",
              "heading": "savedata"
            },
            {
              "depth": 2,
              "value": "完整示例",
              "heading": "完整示例"
            }
          ],
          "title": "type modal-radio",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/标准field/form-field",
            "title": "标准field/form-field"
          }
        },
        "title": "type modal-radio"
      },
      {
        "path": "/zeleconfig/标准field/form-field/one-mary",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/标准field/formField/one-mary.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/标准field/formField/one-mary.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "type one-mary",
              "heading": "type-one-mary"
            },
            {
              "depth": 2,
              "value": "options",
              "heading": "options"
            },
            {
              "depth": 3,
              "value": "actions",
              "heading": "actions"
            },
            {
              "depth": 4,
              "value": "type children-modal-add",
              "heading": "type-children-modal-add"
            },
            {
              "depth": 3,
              "value": "*fields",
              "heading": "fields"
            },
            {
              "depth": 3,
              "value": "operation",
              "heading": "operation"
            },
            {
              "depth": 4,
              "value": "type childEditModal",
              "heading": "type-childeditmodal"
            },
            {
              "depth": 2,
              "value": "完整示例",
              "heading": "完整示例"
            }
          ],
          "title": "type one-mary",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/标准field/form-field",
            "title": "标准field/form-field"
          }
        },
        "title": "type one-mary"
      },
      {
        "path": "/zeleconfig/标准field/form-field/plain",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/标准field/formField/plain.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/标准field/formField/plain.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "type plain",
              "heading": "type-plain"
            },
            {
              "depth": 2,
              "value": "options",
              "heading": "options"
            },
            {
              "depth": 3,
              "value": "format",
              "heading": "format"
            },
            {
              "depth": 3,
              "value": "placeholder",
              "heading": "placeholder"
            },
            {
              "depth": 3,
              "value": "map",
              "heading": "map"
            },
            {
              "depth": 2,
              "value": "完整示例",
              "heading": "完整示例"
            }
          ],
          "title": "type plain",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/标准field/form-field",
            "title": "标准field/form-field"
          }
        },
        "title": "type plain"
      },
      {
        "path": "/zeleconfig/标准field/form-field/range",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/标准field/formField/range.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/标准field/formField/range.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "type range",
              "heading": "type-range"
            },
            {
              "depth": 2,
              "value": "options",
              "heading": "options"
            },
            {
              "depth": 3,
              "value": "nowTime",
              "heading": "nowtime"
            },
            {
              "depth": 3,
              "value": "format",
              "heading": "format"
            },
            {
              "depth": 3,
              "value": "props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "startDate 和 endDate",
              "heading": "startdate-和-enddate"
            },
            {
              "depth": 2,
              "value": "完整示例",
              "heading": "完整示例"
            }
          ],
          "title": "type range",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/标准field/form-field",
            "title": "标准field/form-field"
          }
        },
        "title": "type range"
      },
      {
        "path": "/zeleconfig/标准field/form-field",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/标准field/formField/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/标准field/formField/README.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "表单标准字段 [自定义]",
              "heading": "表单标准字段-自定义"
            },
            {
              "depth": 2,
              "value": "type",
              "heading": "type"
            },
            {
              "depth": 3,
              "value": "普通 type",
              "heading": "普通-type"
            },
            {
              "depth": 3,
              "value": "高级 type",
              "heading": "高级-type"
            },
            {
              "depth": 2,
              "value": "rules 表单数据校验",
              "heading": "rules-表单数据校验"
            },
            {
              "depth": 3,
              "value": "rules.expect",
              "heading": "rulesexpect"
            }
          ],
          "title": "表单标准字段 [自定义]",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/标准field",
            "title": "标准field"
          }
        },
        "title": "表单标准字段 [自定义]"
      },
      {
        "path": "/zeleconfig/标准field/form-field/自定义表单field",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/标准field/formField/自定义表单field.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/标准field/formField/自定义表单field.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "自定义表单 field",
              "heading": "自定义表单-field"
            },
            {
              "depth": 1,
              "value": "使用自定义表单 field",
              "heading": "使用自定义表单-field"
            }
          ],
          "title": "自定义表单 field",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/标准field/form-field",
            "title": "标准field/form-field"
          }
        },
        "title": "自定义表单 field"
      },
      {
        "path": "/zeleconfig/标准field/list-field/currency",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/标准field/listField/currency.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/标准field/listField/currency.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "valueType currency",
              "heading": "valuetype-currency"
            },
            {
              "depth": 2,
              "value": "options",
              "heading": "options"
            },
            {
              "depth": 3,
              "value": "symbol",
              "heading": "symbol"
            },
            {
              "depth": 3,
              "value": "color",
              "heading": "color"
            },
            {
              "depth": 3,
              "value": "nullPlaceholder",
              "heading": "nullplaceholder"
            },
            {
              "depth": 2,
              "value": "完整示例",
              "heading": "完整示例"
            }
          ],
          "title": "valueType currency",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/标准field/list-field",
            "title": "标准field/list-field"
          }
        },
        "title": "valueType currency"
      },
      {
        "path": "/zeleconfig/标准field/list-field/ellipsis",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/标准field/listField/ellipsis.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/标准field/listField/ellipsis.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "valueType ellipsis",
              "heading": "valuetype-ellipsis"
            },
            {
              "depth": 2,
              "value": "options",
              "heading": "options"
            },
            {
              "depth": 3,
              "value": "max",
              "heading": "max"
            },
            {
              "depth": 3,
              "value": "format",
              "heading": "format"
            },
            {
              "depth": 3,
              "value": "placeholder",
              "heading": "placeholder"
            },
            {
              "depth": 2,
              "value": "完整示例",
              "heading": "完整示例"
            }
          ],
          "title": "valueType ellipsis",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/标准field/list-field",
            "title": "标准field/list-field"
          }
        },
        "title": "valueType ellipsis"
      },
      {
        "path": "/zeleconfig/标准field/list-field/image",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/标准field/listField/image.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/标准field/listField/image.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "valueType image",
              "heading": "valuetype-image"
            },
            {
              "depth": 2,
              "value": "options",
              "heading": "options"
            },
            {
              "depth": 3,
              "value": "max",
              "heading": "max"
            },
            {
              "depth": 3,
              "value": "width",
              "heading": "width"
            },
            {
              "depth": 3,
              "value": "height",
              "heading": "height"
            },
            {
              "depth": 3,
              "value": "circle",
              "heading": "circle"
            },
            {
              "depth": 3,
              "value": "border",
              "heading": "border"
            },
            {
              "depth": 3,
              "value": "background",
              "heading": "background"
            },
            {
              "depth": 2,
              "value": "完整示例",
              "heading": "完整示例"
            }
          ],
          "title": "valueType image",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/标准field/list-field",
            "title": "标准field/list-field"
          }
        },
        "title": "valueType image"
      },
      {
        "path": "/zeleconfig/标准field/list-field/map",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/标准field/listField/map.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/标准field/listField/map.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "valueType map",
              "heading": "valuetype-map"
            },
            {
              "depth": 2,
              "value": "options",
              "heading": "options"
            },
            {
              "depth": 3,
              "value": "*map",
              "heading": "map"
            },
            {
              "depth": 2,
              "value": "完整示例",
              "heading": "完整示例"
            }
          ],
          "title": "valueType map",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/标准field/list-field",
            "title": "标准field/list-field"
          }
        },
        "title": "valueType map"
      },
      {
        "path": "/zeleconfig/标准field/list-field/percentage",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/标准field/listField/percentage.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/标准field/listField/percentage.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "valueType percentage",
              "heading": "valuetype-percentage"
            },
            {
              "depth": 2,
              "value": "options",
              "heading": "options"
            },
            {
              "depth": 3,
              "value": "color",
              "heading": "color"
            },
            {
              "depth": 3,
              "value": "nullPlaceholder",
              "heading": "nullplaceholder"
            },
            {
              "depth": 2,
              "value": "完整示例",
              "heading": "完整示例"
            }
          ],
          "title": "valueType percentage",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/标准field/list-field",
            "title": "标准field/list-field"
          }
        },
        "title": "valueType percentage"
      },
      {
        "path": "/zeleconfig/标准field/list-field/plain",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/标准field/listField/plain.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/标准field/listField/plain.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "valueType plain",
              "heading": "valuetype-plain"
            },
            {
              "depth": 2,
              "value": "options",
              "heading": "options"
            },
            {
              "depth": 3,
              "value": "format",
              "heading": "format"
            },
            {
              "depth": 3,
              "value": "placeholder",
              "heading": "placeholder"
            },
            {
              "depth": 2,
              "value": "完整示例",
              "heading": "完整示例"
            }
          ],
          "title": "valueType plain",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/标准field/list-field",
            "title": "标准field/list-field"
          }
        },
        "title": "valueType plain"
      },
      {
        "path": "/zeleconfig/标准field/list-field",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/标准field/listField/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/标准field/listField/README.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "列表标准字段",
              "heading": "列表标准字段"
            },
            {
              "depth": 2,
              "value": "字段配置",
              "heading": "字段配置"
            },
            {
              "depth": 3,
              "value": "field",
              "heading": "field"
            },
            {
              "depth": 3,
              "value": "label",
              "heading": "label"
            },
            {
              "depth": 3,
              "value": "[可选配置项] valueType 与 options [自定义]",
              "heading": "可选配置项-valuetype-与-options-自定义"
            }
          ],
          "title": "列表标准字段",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/标准field",
            "title": "标准field"
          }
        },
        "title": "列表标准字段"
      },
      {
        "path": "/zeleconfig/标准field/list-field/tag",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/标准field/listField/tag.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/标准field/listField/tag.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "valueType tag",
              "heading": "valuetype-tag"
            },
            {
              "depth": 2,
              "value": "options",
              "heading": "options"
            },
            {
              "depth": 3,
              "value": "*map",
              "heading": "map"
            },
            {
              "depth": 3,
              "value": "color",
              "heading": "color"
            },
            {
              "depth": 2,
              "value": "完整示例",
              "heading": "完整示例"
            }
          ],
          "title": "valueType tag",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/标准field/list-field",
            "title": "标准field/list-field"
          }
        },
        "title": "valueType tag"
      },
      {
        "path": "/zeleconfig/标准field/list-field/自定义列表value-type",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZELeconfig/标准field/listField/自定义列表valueType.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZELeconfig/标准field/listField/自定义列表valueType.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "自定义列表 valueType",
              "heading": "自定义列表-valuetype"
            },
            {
              "depth": 1,
              "value": "使用自定义列表 valueType",
              "heading": "使用自定义列表-valuetype"
            }
          ],
          "title": "自定义列表 valueType",
          "nav": {
            "path": "/zeleconfig",
            "title": "Zeleconfig"
          },
          "group": {
            "path": "/zeleconfig/标准field/list-field",
            "title": "标准field/list-field"
          }
        },
        "title": "自定义列表 valueType"
      },
      {
        "path": "/zelenamespace",
        "component": require('D:/work/githublib/zero-element-docs/docs/ZElenamespace/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ZElenamespace/README.md",
          "updatedTime": 1617677928000,
          "slugs": [
            {
              "depth": 1,
              "value": "ZEle namespace",
              "heading": "zele-namespace"
            },
            {
              "depth": 2,
              "value": "namespace 与 namespace 之间的关联",
              "heading": "namespace-与-namespace-之间的关联"
            }
          ],
          "title": "ZEle namespace",
          "nav": {
            "path": "/zelenamespace",
            "title": "Zelenamespace"
          }
        },
        "title": "ZEle namespace"
      }
    ],
    "title": "可圈点",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
