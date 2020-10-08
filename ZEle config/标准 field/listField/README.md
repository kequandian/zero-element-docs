# 列表标准字段

`列表标准字段` 通常用于 `Table` `ChildrenTable` `ReportTable` 等列表组件

一个标准的 `列表标准字段` 通常由以下配置项组成

```javascript
// 列表标准字段示意
// 这里将后台返回的 status 字段, 映射为 '正常' '禁用' 这样的中文
// 同时, '正常' 是个绿色的标签, '禁用' 是个红色的标签
{
  field: 'status',
  label: '状态',
  valueType: 'tag', // 以标签的形式渲染 status
  options: { // options 的配置项由 valueType 决定
    map: {  // 映射后端的 status 字典
      NORMAL: '正常',
      FORBIDDEN: '禁用',
    },
    color: {
      NORMAL: '#3f6600',
      FORBIDDEN: 'red',
    },
  }
}
```

## 字段配置

例如后端返回了如下假数据:

```javascript
// GET API response body
{
  code: 200,
  data: [
    { id: 1, name: '小明', sex: 0 },
    { id: 2, name: '小红', sex: 1 },
  ]
}
```

### field

配置后端的返回的字段值

以上面的假数据举例的话, 应该这样配置:

```javascript
[
  { field: 'id' },
  { field: 'name' },
  { field: 'sex' },
]
```

### label

配置表格的表头, 通常是后端返回字段的中文名

以上面的假数据举例的话, 并且与 `field` 相结合的话, 应该这样配置:

```javascript
[
  { label: 'ID', field: 'id' },
  { label: '名称', field: 'name' },
  { label: '性别', field: 'sex' },
]
```

### [可选配置项] valueType 与 options [[自定义](./自定义列表valueType.md)]

通常来说, 表格都是直接将后端返回的数据以字符串的形式直接渲染出来, 通过这两个配置可以将数据渲染为其它形式

`options` 必须配合 `valueType` 使用, 因为 `valueType` 决定了 `options` 的可配置项

以上面的假数据举例的话, 并且与 `label` `field` 相结合的话, 应该这样配置:

```javascript
[
  { label: 'ID', field: 'id' },
  { label: '名称', field: 'name' },
  { label: '性别', field: 'sex', valueType: 'map', options: {
      map: {
        0: '男',
        1: '女',
      }
    } 
  },
]
```

最终上面的假数据将会渲染为类似这样的表格:

ID | 名称 | 性别
-- | -- | --
1  | 小明 | 男
2  | 小红 | 女

可用的 `valueType`:

- [plain](./plain.md) 返回单行或多行模板字符串
- [map](./map.md) 以纯字符串的形式映射返回的值
- [tag](./tag.md) 以带有颜色的标签的形式映射返回的值
- [currency](./currency.md) 将返回的值渲染为货币形式
- [percentage](./percentage.md) 将返回的值渲染为百分号形式
- [image](./image.md) 将返回的值渲染为图片, 点击图片可预览大图
- [ellipsis](./ellipsis.md) 超过长度限制的文本显示为省略号, 鼠标移上去可显示完整文本
