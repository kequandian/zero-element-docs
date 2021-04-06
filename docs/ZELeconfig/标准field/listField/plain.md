# valueType `plain`

返回单行或多行可变的字符串

## options

### format

选填项 `string` or `array`

可用将别的字段一起显示在这个 `valueType plain` 里面 这里将用作回显的模板

传入 `array` 可以分行显示

一般需要配合 `placeholder` 一起使用

在下面的 `完整示例` 里, 演示了如何将 姓名/电话 信息显示在一个表格单页, 并分行

`<key>` 里面的 `key` 可以是当前行数据里面的任意字段名称

### placeholder

选填项 `string`

处理模板里面的空值显示

> 默认值为空字符: ""

## 完整示例

```javascript
{ label: '', field: '', valueType: 'plain', options: {
    format: ['姓名: <name>', '电话: <phone>'],
    placeholder: '-',
}

// 该 valueType 没有必填项, 故而也可以
{ label: '', field: '', valueType: 'plain' }
```
