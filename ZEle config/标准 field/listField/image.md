# valueType `image`

将返回的值渲染为图片, 点击图片可预览大图

## options

### max

选填项

传入 `number`

如若有多张图片, 最多只渲染多少张

> 默认值: 9

### width

选填项

传入 `number` 或 `string`

渲染的图片的宽度

> 默认值: 60

### height

选填项

传入 `number` 或 `string`

渲染的图片的高度

> 默认值: 60

### circle

选填项

传入 `boolean`

是否将图片渲染为圆形

> 默认值: false

### border

选填项

传入 `boolean`

是否在图片周围渲染一条边框, 在纯白色的背景颜色里建议加上这个配置项

> 默认值: false

### border

选填项

传入 `boolean`

是否在图片周围渲染一条边框, 在纯白色的背景颜色里建议加上这个配置项

> 默认值: false

### background

选填项

传入 `boolean`

是否以背景图片的样式进行渲染

背景图片的样式将会带有居中的效果

> 默认值: false

## 完整示例

```javascript
{ label: '', field: '', valueType: 'image', options: {
    max: 1,
    width: 60, // 等效 '60px'
    height: '60px',
    circle: true,
    border: true,
    background: true,
}

// 该 valueType 没有必填项, 故而也可以
{ label: '', field: '', valueType: 'image' }
```
