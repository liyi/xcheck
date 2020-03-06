export default class XCheck {
  constructor (options) {
    this.options = options
    this.log = []
  }
  get count () {
    return this.log.length
  }
  setOptions (currentOptions) {}
  validate (data) {
    console.log(this.options)
    return new Promise(function (resolve, reject) {})
  }
}
