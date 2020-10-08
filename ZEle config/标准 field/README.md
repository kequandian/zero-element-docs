# 标准 field

在 `zero-element` 里面, 各式各样的组件里都会涉及到 `数据字段` 的概念, 这里会对这些字段的配置格式做出规范

目前, `标准 field` 里面包括了 `列表标准字段` 和 `表单标准字段` 两种:

## [列表标准字段](./listField/README.md) [[自定义valueType](./listField/自定义列表valueType.md)]

```javascript
// 列表标准字段基本格式
{
  field: 'string',
  label: 'string',
  valueType: 'string',
  options: {}
}
```

## [表单标准字段](./formField/README.md) [[自定义field](./formField/自定义表单field.md)]

```javascript
// 表单标准字段基本格式
{
  field: 'string',
  label: 'string',
  type: 'string',
  options: [] || {},
}
```
