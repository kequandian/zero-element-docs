# type `plain`

`plain` 以纯文本的形式提交一份数据

## options

### format

选填项  `string`

根据传入的字符串模板来格式化回显, 提交的时候提交格式化后的回显值

一般需要配合 `placeholder` 一起使用

在下面的 `完整示例` 里, 演示了如何将 开始时间/结束时间显示在一起并提交

`<key>` 里面的 `key` 可以是同一个 `namespace` 里面的任意的表单字段名称

### placeholder

选填项 `string`

处理模板里面的空值显示

> 默认值: "-"

### map

选填项 `{}`

将数据做映射后再回显, 提交的时候提交映射后的回显值

`{}` 的 `key` 为后端返回的原始值, `value` 为映射后的值

## 完整示例

```javascript
{ label: '', field: '', type: 'plain', options: {
    format: '<startDate> ~ <endDate>',
    placeholder: '暂无',
    map: {
      0: '不可用',
      test: '测试'
    },
}
```
