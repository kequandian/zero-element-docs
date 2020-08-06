# expect

`expect` 可决定字段的渲染时机, 数据不满足预期的情况下对应的字段就不会渲染

## options

- field 需要检测的字段
- value 该字段的预期值

### formfields.expect

`expcet` 可以在 [表单标准字段](./标准%20field/formField/README.md) 里使用

例如, 默认的情况下只显示单选框, 若用户选择了 `其它`, 那么就让用户输入 `其它方式`

```javascript
{ label: '出行方式', field: 'travelMode', type: 'radio', options: [
    { label: '汽车', value: 'car' },
    { label: '其它', value: 'other' },
  ]
},
{ label: '其它方式', field: '', type: 'input', 
  props: {
    placeholder: '请输入出行方式……'
  },
  expect: {
    field: 'travelMode',
    value: 'other',
  }
}
```

此外, `expect.value` 也有一些预设的校验规则

- `IS_NULL` 表示数据是 空对象, 空数组, 空字符, null, false 其中之一
- `IS_NOT_NULL` 表示数据不是 空对象, 空数组, 空字符, null, false 其中之一

### rules.expect

`expcet` 可以在 `rules` 里使用

例如, 必须让用户填入 电话号码/微信/邮箱 三者中的其中一个

一开始三个字段都是必填, 在用户输入了其中某一个字段之后, 其它两个字段就会变成非必填

```javascript
{
  field: 'contactPhone', label: '电话号码', type: 'input',
  rules: ['phone', {
    type: 'required',
    expect: {
      field: ['contactWechat', 'contactEmail'],
      value: ['IS_NULL', 'IS_NULL'],
    },
  }],
},
{
  field: 'contactWechat', label: '微信', type: 'input',
  rules: [{
    type: 'required',
    expect: {
      field: ['contactPhone', 'contactEmail'],
      value: ['IS_NULL', 'IS_NULL'],
    },
  }],
},
{
  field: 'contactEmail', label: '邮箱', type: 'input',
  rules: ['email', {
    type: 'required',
    expect: {
      field: ['contactPhone', 'contactWechat'],
      value: ['IS_NULL', 'IS_NULL'],
    },
  }],
},
```
