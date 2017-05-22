export default {
  props: {
    releases: Array
  },
  methods: {
    tagColor (changeType) {
      if (colorMap.has(changeType)) {
        return colorMap.get(changeType)
      } else {
        return '_blue'
      }
    }
  }
}

const colorMap = new Map([
  ['new', '_green'],
  ['fix', '_orange']
])
