var assert = chai.assert;

describe('Prime numbers', function() {
    it('should be false for numbers < 0', function() {
        assert.isFalse(primeNumberCheck(-1));
        assert.isFalse(primeNumberCheck(-9999999));
    });
    it('should be false for 0, 1', function() {
        assert.isFalse(primeNumberCheck(0));
        assert.isFalse(primeNumberCheck(1));
    });
    it('should be false for invalid input', function() {
        assert.isFalse(primeNumberCheck("sadasd"));
        assert.isFalse(primeNumberCheck());
        assert.isFalse(primeNumberCheck(null));
        assert.isFalse(primeNumberCheck(NaN));
    });
    it('should be false for numbers with floating point', function() {
        assert.isFalse(primeNumberCheck(3.5));
        assert.isFalse(primeNumberCheck(7.0000000001));
    });

    it('schould be true for M31', function() {
        assert.isTrue(primeNumberCheck(Math.pow(2,31) - 1));
    });

    it('should be true for prime numbers', function() {
        assert.isTrue(primeNumberCheck(2));
        assert.isTrue(primeNumberCheck(13));
        assert.isTrue(primeNumberCheck(173));
        assert.isTrue(primeNumberCheck(992093291443));
    });
    it('should be false for non-prime numbers', function() {
        assert.isFalse(primeNumberCheck(15));
        assert.isFalse(primeNumberCheck(331973133));
        assert.isFalse(primeNumberCheck(992093291442));
    });
  });
describe('Unique characters in String', function(){
    it('should return false for invalid value', function(){
        assert.isFalse(isStringConsistOfUniqueCharacters());
        assert.isFalse(isStringConsistOfUniqueCharacters(null));
    });
    it('should return false for String with repeating characters', function(){
        assert.isFalse(isStringConsistOfUniqueCharacters("123233234456"));
        assert.isFalse(isStringConsistOfUniqueCharacters("qwertfghrtbyuiop[asdfgdthnhjkl;'zxcvbnm"));
    });
    it('should return true for String with all unique characters', function(){
        assert.isTrue(isStringConsistOfUniqueCharacters(""));
        assert.isTrue(isStringConsistOfUniqueCharacters("123456"));
        assert.isTrue(isStringConsistOfUniqueCharacters("qwertyuiop[asdfghjkl;'zxcvbnm"));
        assert.isTrue(isStringConsistOfUniqueCharacters("üäßsdfva"));
    });
});