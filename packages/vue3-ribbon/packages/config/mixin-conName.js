export default {
  methods: {
    getKebabCase(str) {
      return getKebabCase(str)
    },
    getCamelCase(str) {
      getCamelCase(str)
    },
  },
}
const getKebabCase = (() => {
  const cache = {}
  return (str) => {
    if (cache[str]) return cache[str]

    cache[str] = str.replace(/^([A-Z])/, (i) => i.toLowerCase()).replace(/[A-Z]/g, (i) => '-' + i.toLowerCase())

    return cache[str]
  }
})()
const getCamelCase = (() => {
  const cache = {}
  return (str) => {
    if (cache[str]) return cache[str]

    cache[str] = str.replace(/^([a-z])/, (i) => i.toUpperCase()).replace(/-([a-z])/g, (o, i) => i.toUpperCase())

    return cache[str]
  }
})()
