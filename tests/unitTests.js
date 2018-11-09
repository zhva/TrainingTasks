var assert = chai.assert;

describe('Prime numbers', function() {
    it('Should check prime numbers', function() {
        assert.isFalse(primeNumberCheck(0));
        assert.isFalse(primeNumberCheck(1));
        assert.isTrue(primeNumberCheck(2));
        assert.isTrue(primeNumberCheck(4));
      });
  });