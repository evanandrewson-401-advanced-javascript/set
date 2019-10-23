class Set {
  constructor(array) {
    this.values = array || [];
  }
  add(value) {
    this.values.push(value);
  }
}

module.exports = Set;