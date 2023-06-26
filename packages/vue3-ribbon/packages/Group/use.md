```javascript
tools: [
  {
    ...
  },
  {
    type: 'group', // define the type of the tool
    name: 'group:undo-redo', // tool name
    items: 'break', // optionally display the buttons list vertically
    width: '120px',
    members: [
      {
        type: 'split-button', // define the type of the tool
        name: 'split-button:paste-options', // group name
        size: 'large', // size of the buttons - "small" or "large"
        dropDownCssClasses: [
          'custom-css-class-1',
          'custom-css-class-2'
        ], // optional array of CSS classes to apply to the menu dropdown
        commands: [
          {
            name: 'paste', // command name
            hint: 'Paste', // optional button tooltip
            label: 'Paste', // optional button label
            icon: 'mdi-content-paste', // optional button icon
            iconType: 'svg' // optional iconType
          },
          {
            name: 'paste-special',
            hint: 'Paste Special',
            label: 'Paste Special',
            icon: 'mdi-content-paste',
            iconType: 'svg'
          }
        ]
      },
      {
        ...
      }
    ]
  },
  {
    ...
  }
]
```

0
