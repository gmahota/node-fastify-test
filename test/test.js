var assert = require('assert');

describe('Array', function(){
    it('should return -1 when -1 the value not present',function(){
        assert.equal([1,2,3].indexOf(4),-1);
    })
})