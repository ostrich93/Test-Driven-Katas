const {expect} = require('chai');
const wrap = require('./wrap');

describe('wrap()', function(){
    it('returns an empty string if empty string was provided.', function(){
        expect(wrap("", 10)).to.equal("");
    });
    
});
