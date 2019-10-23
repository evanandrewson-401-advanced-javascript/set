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
  it('intersection instance method returns the intersection', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([1, 2, 4]);
    const intersection = set1.intersection(set2)
    expect(intersection.values).toEqual([1, 2]);
  });
  it('union instance method returns the union', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([1, 2, 4]);
    const union = set1.union(set2)
    expect(union.values).toEqual([1, 2, 3, 4]);
  });
  it('difference instance method returns the difference', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([1, 2, 4]);
    const difference = set1.difference(set2)
    expect(difference.values).toEqual([3, 4]);
  });
  it('intersection static method returns the intersection', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([1, 2, 4]);
    const staticIntersection = Set.staticIntersection(set1, set2)
    expect(staticIntersection.values).toEqual([1, 2]);
  });
  it('union static method returns the union', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([1, 2, 4]);
    const staticUnion = Set.staticUnion(set1, set2)
    expect(staticUnion.values).toEqual([1, 2, 3, 4]);
  });
})