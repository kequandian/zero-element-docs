# type `date`, type `week`, type `month`

提供了不同类型的时间录入方式

它们的配置项大同小异

## options

### nowTime

选填项 `boolean`

是否自动选择当前 日期/月/周

> 默认值: false

### format

选填项 `string`

时间格式

> type `date` 默认值: "YYYY-MM-DD"

> type `week` 默认值: "YYYY-W"

> type `month` 默认值: "YYYY-MM"

### props

选填项 `{}`

可以通过 `props` 来传入一些 `antd` 原始支持的配置项

## 完整示例

```javascript
{ label: '', field: '', type: 'date', options: {
    format: 'YYYY-MM-DD',
    nowTime: true,
    props: {
      allowClear: true,
    }
}
```
