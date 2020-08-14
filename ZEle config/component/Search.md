# component `Search`

`Search` 将渲染为一个用于搜索的表单, 通常与 component [Table](./Table.md) 搭配使用

`Search` 会和同一个 `namespace` 下面的 [Table](./Table.md) 自动绑定, 点击 `Search` 的搜索会自动触发 [Table](./Table.md) 的数据更新

> 与之相对的, 同一个 `namespace` 里面应当只有一对 `Search` 与 [Table](./Table.md) 的组合, 不然无法保证搜索逻辑绑定正确

--------------------------------------------------------------------------------

## config `fields`

由 [表单标准字段](../标准%20field/formField/README.md) 组成的列表, 将会渲染具体的表单域

--------------------------------------------------------------------------------

## 完整示例

```javascript
{
  component: 'Search',
  config: {
    fields: [
      { label: '', field: '', type: '' },
      ...
    ],
  }
}
```
