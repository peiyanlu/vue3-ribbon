```javascript
const config = {
  quickLaunchToolbar: {
    ...
  },
  fileTabMenu: {
    name: 'file-tab-menu:generic-actions',
    activator: {
      label: 'File'
    },
    items: [
    {
        label: 'Info',
        icon: 'info',
        commands: [
          {
            label: 'Info 1',
            icon: 'info',
            name: 'info-1'
          },
          {
            type: 'NewFile', // 加载自定义组件
            custom: true
          }
        ]
      },
      {
        label: 'New',
        icon: 'star',
        commands: [
          {
            label: 'New 1',
            icon: 'info',
            name: 'star-1'
          },
          {
            label: 'New 2',
            icon: 'info',
            name: 'star-2'
          },
          {
            type: 'NewFile',
            custom: true
          }
        ]
      }
    ]
  },
  tabs: [
    {
      ...
    }
  ]
}
```
