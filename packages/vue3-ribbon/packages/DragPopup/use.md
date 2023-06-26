```vue
<drag-popup
  :show.sync="show"
  container="#content"
  :right="30"
  :top="30"
  title="标题"
  :component="popup"
  @message="handleMessage"
>
  <div id="modelContainer" />
</drag-popup>
```

```text
1、container: 可拖拽区域元素选择器
2、component: 组件name
```
