# type `range`

录入时间的区间

## options

### nowTime

选填项 `boolean`

是否自动选择当前 日期/月/周

> 默认值: false

### format

选填项 `string`

时间格式

> 默认值: "YYYY-MM-DD"

### props

选填项 `{}`

可以通过 `props` 来传入一些 `antd` 原始支持的配置项

### startDate 和 endDate

选填项 `string`

默认情况下, `range` 选择的两个数值将会以 `["YYYY-MM-DD", "YYYY-MM-DD"]` 的形式提交到 `field`

可以通过同时配置 `startDate` 和 `endDate` 来将时间区间额外提交到两个不同的字段

## 完整示例

```javascript
{ label: '', field: '', type: 'range', options: {
    format: 'YYYY-MM-DD',
    nowTime: true,
    props: {
      allowClear: true,
    },
    startDate: 'startDateField',
    endDate: 'endDateField',
}
```
