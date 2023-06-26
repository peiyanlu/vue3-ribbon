```javascript
const config = {
  quickLaunchToolbar: [
    {
      name: 'save', // command name
      hint: 'Save (Ctrl+S)', // optional button tooltip
      icon: 'save' // button icon
    },
    {
      name: 'cut',
      hint: 'Cut (Ctrl+X)',
      icon: 'content_cut'
    },
    {
      name: 'copy',
      hint: 'Copy (Ctrl+C)',
      icon: 'content_copy'
    },
    {
      name: 'paste',
      hint: 'Paste (Paste+V)',
      icon: 'content_paste'
    }
  ],
  fileTabMenu: {
    ...
  },
  tabs: [
    {
      ...
    }
  ]
}
```
