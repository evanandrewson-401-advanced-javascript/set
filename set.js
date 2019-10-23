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
        result.add(value);
      }
    });
    return result;
  }
  union(set) {
    let result = new Set();
    this.values.forEach(value => {
      if(!result.has(value)) {
        result.add(value);
      }
    });
    set.values.forEach(value => {
      if(!result.has(value)) {
        result.add(value);
      }
    });
    return result;
  }
  difference(set) {
    let result = new Set();
    this.values.forEach(value => {
      if(!set.has(value)) {
        result.add(value);
      }
    });
    set.values.forEach(value => {
      if(!this.has(value)) {
        result.add(value);
      }
    });
    return result;
  }
  static staticIntersection(set1, set2) {
    let result = new Set();
    set1.values.forEach(value => {
      if(set2.has(value)) {
        result.add(value);
      }
    });
    return result;
  }
  static staticUnion(set1, set2) {
    let result = new Set();
    set1.values.forEach(value => {
      if(!result.has(value)) {
        result.add(value);
      }
    });
    set2.values.forEach(value => {
      if(!result.has(value)) {
        result.add(value);
      }
    });
    return result;
  }
}

module.exports = Set;