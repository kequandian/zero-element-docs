# valueType `map`

以纯字符串的形式映射返回的值

## options

### *map

必填项

传入一个 `{}`

表明映射关系

`{}` 的 `key` 为后端返回的原始值, `value` 为映射后的值

## 完整示例

```javascript
{ label: '', field: '', valueType: 'map', options: {
    map: {
      0: '不可用',
      test: '测试'
    }
}
```
