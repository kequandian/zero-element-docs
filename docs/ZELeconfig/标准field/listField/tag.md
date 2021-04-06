# valueType `tag`

以带有颜色的标签的形式映射返回的值

## options

### *map

必填项 `{}`

表明映射关系

`{}` 的 `key` 为后端返回的原始值, `value` 为映射后的值

### color

选填项 `{}`

表明映射关系的颜色

`{}` 的 `key` 为后端返回的原始值, `value` 为映射后的标签颜色

> 没有被枚举到的映射, 将会使用默认颜色 `#108ee9`

## 完整示例

```javascript
{ label: '', field: '', valueType: 'tag', options: {
    map: {
      0: '不可用',
      test: '测试'
    },
    color: {
      0: '#3f6600',
      test: 'red'
    },
}
```
