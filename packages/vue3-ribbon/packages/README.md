```text
1、图标大小规范
大：32px = content + border(1px) + padding(1px) === content + 4px
小：24px = content + border(1px) + padding(1px) === content + 4px
eg:
$small: 20px;
.ribbon-button-small {
  width: $small + 4px;
  height: $small + 4px;

  & > * {
    width: $small;
    height: $small;
    font-size: $small;
    display: block;
  }
}
```
