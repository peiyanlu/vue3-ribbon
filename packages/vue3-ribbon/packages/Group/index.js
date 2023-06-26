import Group from './src/Group'

Group.install = (Vue) => {
  Vue.component(Group.name, Group)
}

export default Group
