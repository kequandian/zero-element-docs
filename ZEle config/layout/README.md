# layout

`layout` 决定内容的布局, 通常用于一个页面的整体布局, 部分 `component` 也会提供 `子 layout 配置项` 来完成某些组件内部的布局

## 已有的 layout

- Empty 无特殊功能, 默认 layout
- BaseTitle 无底色, 带有 title 功能的 layout
- Content 有白色的背景色, 同时提供了 title 功能; 如果用在 [Table](../Table/README.md), 那么 `Table action` 将会显示在 title 的下方
- TitleContent 有白色的背景色, 同时提供了 title 功能; 如果用在 [Table](../Table/README.md), 那么 `Table action` 将会显示在 title 同级的右边
- NotTitleContent 有白色的背景色
- Grid 使用 `Grid` 布局, 每行划分为 `24` 列, 通过给子元素的 props 传递 `span` 来指定占据多少列

### [自定义layout](./自定义layout.md)