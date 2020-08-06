# valueType `ellipsis`

超过长度限制的文本显示为省略号, 鼠标移上去可显示完整文本

## options

### max

选填项

传入 `number`

文本的长度限制, 超出部分将会显示为省略号

> 默认值 16

### textTemp

选填项

传入 `string`

可用将别的字段一起显示在这个 `valueType ellipsis` 里面 这里将用作回显的模板

需要配合 `textTempFields` `textTempNull` 一起使用

在下面的 `完整示例` 里, 演示了如何将 电话/省市区 信息显示在一起

### textTempFields

选填项

传入 `string[]`

标识出 `textTemp` 里面会使用的字段列表

### textTempNull

选填项

传入 `string`

处理模板里面的空值显示

> 默认值为空字符: ""

## 完整示例

```javascript
{ label: '', field: '', valueType: 'ellipsis', options: {
    max: 30,
    textTemp: '联系电话: {phone}, 联系地址: {province} {city} {district}',
    textTempFields: ['phone', 'province', 'city', 'district'],
    textTempNull: '-',
}

// 该 valueType 没有必填项, 故而也可以
{ label: '', field: '', valueType: 'ellipsis' }
```
