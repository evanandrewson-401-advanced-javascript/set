class Set {
  constructor(array) {
    this.values = array || [];
  }
  add(value) {
    this.values.push(value);
  }
  remove(value) {
    this.values.splice(this.values.indexOf(value), 1);
  }
}

module.exports = Set;