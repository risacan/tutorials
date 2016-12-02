var assert = require('assert');
var calcUtil = require('../src/calc-util.js');

describe('add関数のテスト', function() {
    it('1+2は3である', function() {
        assert(calcUtil.add(1, 2) === 3);
    });
    it("3+4は7である", function () {
      assert(calcUtil.add(3, 4) === 7)
    })
});
