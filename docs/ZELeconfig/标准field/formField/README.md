# 表单标准字段 [[自定义](/ZEleconfig/标准field/form-field/自定义表单field.md)]

`表单标准字段` 通常用于 `Search` `Form` `ChildrenForm` 等表单组件

一个标准的 `表单标准字段` 通常由以下配置项组成

```javascript
// 表单标准字段示意
{
  field: 'status',
  label: '状态',
  type: 'select', // 渲染为下拉框
  options: [
    { label: '正常', value: 'NORMAL' },
    { label: '禁用', value: 'FORBIDDEN' },
  ],
  rules: ['required']
},
{
  field: 'status',
  label: '状态',
  type: 'select-fetch', // 从 fetch 取到的数据中渲染为一个下拉框
  options: {
    API: '/api/example', // 发起的 API 请求地址
    label: 'title', // API 返回列表值的 title 作为下拉框的 label
    value: 'id', // API 返回列表值的 id 作为下拉框的 value
  },
  rules: ['required']
}
```

请注意, 同样是渲染一个下拉框, 两者使用的 `options` 的格式却不相同

- `type: 'select'` 使用的 `options` 为 数组格式
- `type: 'select-fetch'` 使用的 `options` 为 对象格式

这是因为它们分别是 `普通 type` 和 `高级 type`, 故而造成了这其中的差异

## type

### 普通 type

所谓 `普通 type`, 即为:

> - 或是功能过于简单而无需配置
> - 或是对 `antd` 的组件进行了简单的引用, 或者仅仅是简单的封装了一些参数再引用，然后注入到了 `zero-element` 里面的表单字段 type

`普通 type` 有以下可选值:

- [input](/ZEleconfig/标准field/form-field/common.md#props) `antd` 的单行的输入框
- [number](/ZEleconfig/标准field/form-field/common.md#props) `antd` 的数值输入框
- [password](/ZEleconfig/标准field/form-field/common.md#props) `antd` 的密码输入框
- [text-area](/ZEleconfig/标准field/form-field/common.md#props) `antd` 的多行文本输入
- [radio](/ZEleconfig/标准field/form-field/common.md#options) `antd` 的单选
- [select](/ZEleconfig/标准field/form-field/common.md#options) `antd` 的下拉框
- [checkbox](/ZEleconfig/标准field/form-field/common.md#options) `antd` 的复选框
- [group](/ZEleconfig/标准field/form-field/common.md#value) 显示为一个特殊的文本块, 用于分割布局
- [hidden](/ZEleconfig/标准field/form-field/common.md#value) 一个隐藏的字段, 不过仍然会占用一个布局的空间. 它的数值会随着表单提交
- [plain](/ZEleconfig/标准field/form-field/common.md#value) 以纯文本的形式显示一个字段. 它的数值会随着表单提交
- rich-text 富文本编辑器

### 高级 type

`高级 type` 有以下可选值:

- [plain](/ZEleconfig/标准field/form-field/plain.md) `plain` 并不仅仅可当作 `普通 type` 来使用
- [date](/ZEleconfig/标准field/form-field/date.md) 日期选择
- [week](/ZEleconfig/标准field/form-field/date.md) 周选择
- [month](/ZEleconfig/标准field/form-field/date.md) 月选择
- [range](/ZEleconfig/标准field/form-field/range.md) 日期区间选择
- [modal-radio](/ZEleconfig/标准field/form-field/modal-radio.md) 在弹出的模态框中选择一条数据
- [modal-checkbox](/ZEleconfig/标准field/form-field/modal-checkbox.md) 在弹出的模态框中选择多条数据
- [upload-image](/ZEleconfig/标准field/form-field/upload-image.md) 上传图片
- [upload-file](/ZEleconfig/标准field/form-field/upload-file.md) 上传文件
- [select-fetch](/ZEleconfig/标准field/form-field/select-fetch.md) 从 API 中获取返回的列表作为下拉框的选项
- [checkbox-fetch](/ZEleconfig/标准field/form-field/checkbox-fetch.md) 从 API 中获取返回的列表作为复选框的选项
- [one-mary](/ZEleconfig/标准field/form-field/one-mary.md) 一对多关系
- [number-range](/ZEleconfig/标准field/form-field/number-range.md) 数值区间输入

## rules 表单数据校验

可通过 `rules` 来完成表单数据的校验

有如下的预设校验规则:

- required
- email
- phone
- url

可直接将预设规则的名称传入 `rules`

如果想要自定义警告提示, 也可传入 `{ type: '', message: '' }`, 然后在 `message` 里面自定义

```javascript
{ label: '', field: '', type: '', 
  rules: ['required']
},
{ label: '', field: '', type: '', 
  rules: [{
    type: 'required',
    message: '该项是必填的'
  }]
},
```

### rules.expect

可以让校验规则在满足某些条件下才生效, [参见](/ZEleconfig/expect.md#rules.expect)
