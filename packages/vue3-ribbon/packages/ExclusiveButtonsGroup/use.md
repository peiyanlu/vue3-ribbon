```javascript
tools: [
  {
    ...
  },
  {
    type: 'exclusive-buttons', // define the type of the tool
    name: 'exclusive-buttons:format-align', // group name
    size: 'small', // size of the buttons - "small" or "large"
    commands: [
      {
        name: 'align-left', // command name
        hint: 'Align Text Left', // optional button tooltip
        label: 'Align Text Left', // optional button label
        icon: 'format_align_left' // optional button icon
      },
      {
        name: 'align-center',
        hint: 'Center',
        label: 'Center',
        icon: 'format_align_center'
      }
    ]
  },
  {
    ...
  }
]
```
