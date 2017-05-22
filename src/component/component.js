export default {
  props: {
    releases: Array
  },
  methods: {
    tagColor (changeType) {
      if (colorMap.has(changeType)) {
        return colorMap.get(changeType)
      } else {
        return 'blue'
      }
    }
  }
}

const colorMap = new Map([
  ['new', 'green'],
  ['fix', 'orange']
])
