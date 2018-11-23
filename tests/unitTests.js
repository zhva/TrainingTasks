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

describe('Zeros counter', function() {
    it('should return -1 for numbers < 1', function() {
        assert.equal(countZeros(0), -1);
        assert.equal(countZeros(-1),-1);
        assert.equal(countZeros(-9999999),-1);
        assert.equal(countZeros(-9900999),-1);
    });
    it('should return -1 for invalid input', function() {
        assert.equal(countZeros("fghzdfg"),-1);
        assert.equal(countZeros("fg0034300hzg"),-1);
        assert.equal(countZeros(435624635676857879879879889878968676587678768768678769876876857575876575788657),-1);
        assert.equal(countZeros(),-1);
        assert.equal(countZeros(null),-1);
        assert.equal(countZeros(NaN),-1);
        assert.equal(countZeros(70.404),-1);
    });
    it('should return 0 for numbers without 0 ', function(){
        assert.equal(countZeros(1), 0);
        assert.equal(countZeros(453456), 0);
        assert.equal(countZeros(5674563567), 0);
    });
    it('should return amount of zeros', function() {
        assert.equal(countZeros(30),1);
        assert.equal(countZeros(100),2);
        assert.equal(countZeros(901098900),4);
        assert.equal(countZeros(0123),0);
    });
    it('should ignore trailing zeroes', function() {
        assert.equal(countZeros(0123),0);
    });
    it('should count zeroes as 10-based number in HEX', function() {
        assert.equal(countZeros(0xA),1);
    });
  });

describe('Duplicate array', function(){
    it('should return an empty array', function(){
        assert.isEmpty(duplicate("jsdhdsjh"));
        assert.isEmpty(duplicate("js dh ds jh"));
        assert.isEmpty(duplicate(null));
        assert.isEmpty(duplicate(NaN));
        assert.isEmpty(duplicate([]));
    });
    it('should return a duplicated array', function(){
        assert.sameDeepOrderedMembers(duplicate([1, 2, 3, 4, 5]),[1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
        assert.sameDeepOrderedMembers(duplicate([1, 'd', 3, 4, 'c']),[1, 'd', 3, 4, 'c', 1, 'd', 3, 4, 'c']);
        assert.sameDeepOrderedMembers(duplicate([1, 2, 3, 4, null]),[1, 2, 3, 4, null, 1, 2, 3, 4, null]);
        assert.sameDeepOrderedMembers(duplicate([1, [1,2], [1,2,3], 4]),[1, [1,2], [1,2,3], 4, 1, [1,2], [1,2,3], 4]);

        var funcObj = function(param) { return duplicate(param); };
        assert.sameDeepOrderedMembers(duplicate([1, 2, 3, duplicate([1, 2])]),[1, 2, 3, [1,2,1,2], 1, 2, 3, [1,2,1,2]]);
        assert.sameDeepOrderedMembers(duplicate([1, 2, 3, funcObj([1, 2])]),[1, 2, 3, [1,2,1,2], 1, 2, 3, [1,2,1,2]]);
    });
});

describe('String reverse', function(){
    it('should return an empty String for invalide value', function(){
        assert.isEmpty(reverseString());
        assert.isEmpty(reverseString(""));
        assert.isEmpty(reverseString(null));
    });
    it('should return reversed String', function(){
        assert.equal(reverseString("qwerty"),"ytrewq");
        assert.equal(reverseString("qwerty12345"),"54321ytrewq");
        assert.equal(reverseString("üäßsdfva"),"avfdsßäü");
        assert.equal(reverseString("qwertyuiop[]asdfghjkl;'zxcvbnm,.1234567890"),"0987654321.,mnbvcxz';lkjhgfdsa][poiuytrewq");
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