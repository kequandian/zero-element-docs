# valueType `percentage`

将返回的值渲染为百分号形式

## options

### color

选填项

传入 `string` 

可用来调整文本颜色

### nullPlaceholder

选填项

传入 `string`

当后端数据返回 `null` 时, 将会显示为 `nullPlaceholder` 传入的值

## 完整示例

```javascript
{ label: '', field: '', valueType: 'percentage', options: {
    color: '#3f6600',
    nullPlaceholder: '暂无',
}

// 该 valueType 没有必填项, 故而也可以
{ label: '', field: '', valueType: 'percentage' }
```
