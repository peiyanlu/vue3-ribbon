```javascript
tools: [
  {
    ...
  }, {
    type: 'spinners',
    units: 'in', // spinner units (in, cm, pt, px, pc, etc)
    name: 'spinners:indent', // spinner group name
    label: 'Indent', // spinner group label
    spinners: [
      {
        label: 'Left', // optional spinner label
        name: 'indent-left', // spinner name
        icon: 'mdi-format-indent-decrease', // spinner icon
        min: -5, // optional spinner min value
        max: 5, // optional spinner max value
        step: 0.5, // optional spinner step
        value: 0
      },
      {
        label: 'Right', // optional
        name: 'indent-right',
        icon: 'mdi-format-indent-increase',
        min: -5,
        max: 5,
        step: 0.5,
        value: 0
      }
    ]
  },
  {
    ...
  }
]
```
