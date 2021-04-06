# ZEle namespace

本文档将会介绍传入 `Zele` 的 `namespace`

```javascript
<ZEle
    namespace=""  //  <---- 本文档介绍内容
    config={  }
/>
```

`namespace` 是 `Zele` 里面的必填参数

`namespace` 无需全局唯一, 但是在同一时间渲染的 `Zele` 里面应当唯一

`ZEle` 会通过 `namespace` 来保存一些数据, 并且在合适的时候销毁这些数据

## `namespace` 与 `namespace` 之间的关联

通常来说, 旧的 `namespace` 的数据将会在切换到一个新的 `namespace` 的时候销毁

不过也有例外的情况

两个页面之间可以通过下横线 `_` 来表示父子关联, 这会带来一些额外的特性

例如存在以下 `namespace` :

```
user
user_add
user_edit
```

那么, `user` 视为 `user_add` 和 `user_edit` 的父页面

从 父页面 跳转到 子页面 的时候, 父页面的数据将会保留

在实际的应用中, 通过这样声明了 父子关系, 那么可以使得用户在跳转到新增或编辑页面操作之后，返回列表时恢复翻页等列表状态
