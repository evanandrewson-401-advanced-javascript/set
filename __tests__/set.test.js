const Set = require('../set');

describe('Set', () => {
  it('adds a value to the set', () => {
    const newSet = new Set();
    newSet.add(1);
    expect(newSet.values).toEqual([1]);
  });
})