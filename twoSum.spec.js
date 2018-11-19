const { expect } = require('chai');
const twoSum = require('./twoSum');


// no number
it('If no number is provided', () => {
    expect(twoSum([],[])).to.eql([]);
})

it('If the sum of two numbers does not equal the target', () => {
    expect(twoSum([1,2],[4])).to.eql([]);
})

it('Does not count the same number twice', () => {
    expect(twoSum([1,2],[4])).to.eql([]); // we check 1 and 1 twice
    // we check 2 and 2 twice
})


it('If the sum of two numbers equals the target', () => {
    expect(twoSum([1,2,3],[3])).to.eql([0, 1]);
})