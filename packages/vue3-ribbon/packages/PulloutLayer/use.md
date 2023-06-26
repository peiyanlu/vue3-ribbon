```vue
<PulloutLayer
  :show.sync="show"
  container="#content"
  :right="30"
  :top="30"
  title="标题"
  :component="popup"
  @message="handleMessage"
>
  <div id="modelContainer" />
</PulloutLayer>
```

```text
1、container: PulloutLayer父元素选择器
2、component: 组件name
```
