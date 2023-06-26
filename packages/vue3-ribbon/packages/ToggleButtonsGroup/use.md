```javascript
tools: [
  {
    ...
  },
  {
    type: 'toggle-buttons', // define the type of the tool
    name: 'toggle-buttons:bold-italic-underline-strikethrough', // group name
    size: 'small', // size of the buttons - "small" or "large"
    commands: [
      {
        name: 'bold', // command name
        hint: 'Bold (Ctrl+B)', // optional button tooltip
        label: 'Bold', // optional // optional button label
        icon: 'format_bold' // optional button icon
      },
      {
        name: 'italic',
        hint: 'Italic (Ctrl+I)',
        label: 'Italic',
        icon: 'format_italic'
      }
    ]
  },
  {
    ...
  }
]
```
