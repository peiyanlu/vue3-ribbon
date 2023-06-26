```javascript
tools: [
  {
    ...
  },
  {
    type: 'color-picker', // define type of the tool
    name: 'Color Selection', // color picker name
    size: 'small', // size of the tool - "small" or "large"
    hint: '设置激活颜色', // optional tool hint
    pattern: 'custom', // color picker pattern
    icon: 'gis', // color picker icon
    iconType: 'svg', // color picker icon type
    predefine: [
      '#FFFFCC',
      '#CCFFFF',
      '#FFCCCC'
    ],
    showAlpha: true,
    colorFormat: 'hex',
    disabled: false,
    value: '#fff000'
  },
  {
    ...
  }
]
```
