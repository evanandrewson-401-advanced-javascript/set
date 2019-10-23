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
  has(value) {
    return this.values.includes(value)
  }
  intersection(set) {
    let result = new Set();
    this.values.forEach(value => {
      if(set.has(value)) {
        result.values.push(value);
      }
    });
    return result
  }
}

module.exports = Set;