```javascript
tools: [
  {
    ...
  },
  {
    type: 'buttons', // define the type of the tool
    size: 'small', // button size - "small" or "large"
    name: 'buttons:undo-redo', // tool name
    items: 'break', // optionally display the buttons list vertically
    showlabel: false, // label show or not
    width: '80px',
    commands: [
      {
        name: 'undo', // command name
        hint: 'Undo (Ctl+Z)', // optional button tooltip
        label: 'Undo', // optional button label
        icon: 'undo', // optional icon
        iconType: 'svg' // optional iconType
      },
      {
        name: 'redo',
        hint: 'Redo (Ctl+Y)',
        label: 'Redo',
        icon: 'redo',
        iconType: 'svg'
      }
    ]
  },
  {
    ...
  }
]
```
