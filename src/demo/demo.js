import Component from '../Component'
import {releases} from './release-notes'

export default {
  components: {'vue-release-page': Component},
  data () {
    return {
      releases
    }
  }
}
