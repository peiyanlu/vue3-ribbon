```javascript
tools: [
  {
    ...
  },
  {
    type: 'dropdown', // define tool type
    name: 'dropdown:font-family', // dropdown
    width: '120px', // optional width of the dropdown in pixels ("120px") or percentage ("20%")
    items: [
      {
        name: 'Arial', // item name
        value: 'Arial, Helvetica, Sans-serif', // item value
        label: 'Arial' // item label
      },
      {
        name: 'Comic Sans MS',
        label: 'Comic Sans MS',
        value: 'Comic Sans MS'
      },
      {
        name: 'Consolas',
        label: 'Consolas',
        value: 'Consolas'
      }
    ]
  },
  {
    ...
  }
]
```
