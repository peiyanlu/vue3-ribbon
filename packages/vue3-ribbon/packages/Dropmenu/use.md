```javascript
tools: [
  {
    ...
  },
  {
    type: 'dropmenu', // define type of the tool
    name: 'menu:change-case', // menu name
    size: 'small', // tool size - "small" or "large"
    hint: 'Change Case', // optional menu tooltip
    dropDownCssClasses: [
      'custom-css-class-1',
      'custom-css-class-2'
    ], // optional array of custom CSS classes to apply to the menu dropdown
    activator: {
      label: 'Change Case', // menu main item label
      icon: 'mdi-format-font', // menu main item icon
      iconType: ''
    },
    commands: [
      {
        name: 'sentence-case', // command name
        label: 'Sentence case', // command label
        icon: 'mdi-format-font' // optional command icon
      },
      {
        name: 'lower-case',
        label: 'lowercase',
        icon: 'mdi-format-font'
      },
      {
        name: 'uppercase',
        label: 'UPPERCASE',
        icon: 'mdi-format-font'
      },
      {
        name: 'capitalize-each-word',
        label: 'Capitalize Each Word',
        icon: 'mdi-format-font'
      },
      {
        name: 'toggle-case',
        label: 'tOGGLE cASE',
        icon: 'mdi-format-font'
      }
    ]
  },
  {
    ...
  }
]
```
