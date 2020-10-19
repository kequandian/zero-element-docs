# component `AutoReport`

自动报表 `AutoReport` 展示数据几乎全部由 api 返回的数据决定

## config `API`

### listAPI

`AutoReport` 初始化时自动访问的 api, 该 api 要求返回报表所需的全部数据

api 返回的数据结构示意

```json
{
  "code": 200,
  "data": {
    "columns": [ // 列表的数据类型
      "S", "D", "S",
    ],
    "header": [ // 列表的表头
      "时间", "金额", "明细"
    ],
    "rows": [ // 列表的具体数据
      {
        "时间": "2020-01-01",
        "金额": "123.45",
        "明细": "张三/出差-车费报销",
      }
    ],
    "searchColumns": [ // 搜索过滤字段, 需要配合 component AutoReportSearch 使用
      "时间", "明细"
    ],
    "current": 1, // 以下是常规的分页数据信息
    "size": 10,
    "total": 13,
  }
}
```

其中的列表的数据类型 `columns`, 目前支持以下几种:

- C 数量, 展示数据时自动右对齐
- D 金钱, 展示数据时自动右对齐, 同上加上货币符号
- P 百分比, 展示数据时自动右对齐, 同时加上百分号
- S 展示为普通的文本字符串, 无特殊处理
- T 展示为普通的文本字符串, 无特殊处理

## 完整示例 (含 AutoReportSearch)

```javascript
{
  layout: 'Content',
  title: '员工数据报表',
  items: [
    {
      component: 'AutoReportSearch',
      config: {},
    },
    {
      component: 'AutoReport',
      config: {
        pageSize: 20,
        API: {
          listAPI: '/api/report/user',
        },
        actions: [
          {
            title: '导出 pdf', type: 'export',
            options: {
              API: '/api/io/pdf/export/员工报表',
              method: 'get',
            },
          },
        ],
        fields: [],
        operation: []
      },
    },
  ],
}
```
