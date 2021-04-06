# `标准表单字段` 配置项

## props

基于 `antd` 直接封装的 `type` 都支持 `props`

可以通过 `props` 来传入一些 `antd` 原始支持的配置项

```javascript
{
  field: '', label: '', type: 'text-area', props: {
    placeholder: '请输入内容……',
    autoSize: {
      minRows: 4,
    }
  }
},
```

## options

以下的 `type` 都使用同一种 `options` 格式

- radio
- select
- checkbox

```javascript
{
  field: '', label: '', type: 'radio', options: [
    { label: '男', value: 0 },
    { label: '女', value: 1 },
  ]
},
```

## value

所有的 `标准表单字段` 都支持 `value`

通常情况下, `value` 的值将会随着表单一起提交

> 在 `field` 中以下横线 `_` 开头的 `value` 不会提交, 例如下面的 `_group_1`

```javascript
{
  field: '_group_1', type: 'group', value: '基本信息'
},
{
  field: '', label: '', type: 'hidden', value: ''
},
```
