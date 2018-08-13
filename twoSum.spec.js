const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum()', function() {
    it('returns an empty array if empty array is provided', function() {
      expect(twoSum([], 3)).to.eql([]);
    });
    it('returns the sum of the elements in array of length 2', function() {
        expect(twoSum([1, 2], 3)).to.eql([1, 2]);
    });
    it('returns the correct numbers that add up to target', function(){
        expect(twoSum([1,3,5], 8)).to.eql([3,5]);
    });
    it('for cases where there are multiple sums that equal target, return the earliest two terms', function(){
        expect(twoSum([7, 8, 6, 5], 13)).to.eql([7,6]);
    });
    it('returns an empty array if no sum matches target', function(){
        expect(twoSum([1, 2, 3, 4], 50)).to.eql([]);
    })
});