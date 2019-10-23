const Set = require('../set');

describe('Set', () => {
  it('adds a value to the set', () => {
    const newSet = new Set();
    newSet.add(1);
    expect(newSet.values).toEqual([1]);
  });
  it('removes a value from the set', () => {
    const newSet = new Set([1, 2, 3]);
    newSet.remove(2);
    expect(newSet.values).toEqual([1, 3]);
  });
  it('has returns true if a value is in the set', () => {
    const newSet = new Set([1, 2, 3]);
    expect(newSet.has(1)).toBeTruthy();
  });
  it('has returns false if a value is not in the set', () => {
    const newSet = new Set([1, 2, 3]);
    expect(newSet.has(4)).toBeFalsy();
  });
})