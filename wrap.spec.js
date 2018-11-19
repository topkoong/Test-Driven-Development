const {
    expect
} = require('chai');
const wrap = require('./wrap');


describe('wrap', () => {

    it('Returns empty string if empty string was provided', () => {
        let emptyInput = '';
        if (emptyInput.length === 0) expect(wrap(emptyInput, 9)).to.equal(emptyInput);
    });
    it('Return string if column is greater than length', () => {
        let col = 10;
        let word = 'dog';
        if (word.length < col)
            expect(wrap(word, col)).to.equal(word);
    })

    it('will insert a newline at the nearest word boundary', () => {
        expect(wrap('Lorem ipsum dolor sit eu amet, elit na magna', 20)).to.equal('Lorem ipsum dolor\nsit eu amet, elit na\nmagna');
    })

});