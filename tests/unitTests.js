var assert = chai.assert;

describe('Prime numbers', function() {
  var funcs = [primeNumberCheck_V1, primeNumberCheck_V2];
   
  var i = 0;
  funcs.forEach(function(primeNumberCheck_VN){
    it('should be false for numbers < 0 (V' + (i+1) + ')', function() {
      assert.isFalse(primeNumberCheck_VN(-1));
      assert.isFalse(primeNumberCheck_VN(-9999999));
    });
    it('should be false for 0, 1 (V' + (i+1) + ')', function() {
      assert.isFalse(primeNumberCheck_VN(0));
      assert.isFalse(primeNumberCheck_VN(1));
    });
    it('should be false for invalid input (V' + (i+1) + ')', function() {
      assert.isFalse(primeNumberCheck_VN("sadasd"));
      assert.isFalse(primeNumberCheck_VN());
      assert.isFalse(primeNumberCheck_VN(null));
      assert.isFalse(primeNumberCheck_VN(NaN));
    });
    it('should be false for numbers with floating point (V' + (i+1) + ')', function() {
      assert.isFalse(primeNumberCheck_VN(3.5));
      assert.isFalse(primeNumberCheck_VN(7.0000000001));
    });

    // it('schould be true for M31 (V' + (i+1) + ')', function() {
    //   assert.isTrue(primeNumberCheck_VN(Math.pow(2,31) - 1));
    // });

    it('should be true for prime numbers (V' + (i+1) + ')', function() {
      assert.isTrue(primeNumberCheck_VN(2));
      assert.isTrue(primeNumberCheck_VN(13));
      assert.isTrue(primeNumberCheck_VN(173));
       // assert.isTrue(primeNumberCheck_VN(992093291443));
    });
    it('should be false for non-prime numbers (V' + (i+1) + ')', function() {
      assert.isFalse(primeNumberCheck_VN(15));
       // assert.isFalse(primeNumberCheck_VN(331973133));
       // assert.isFalse(primeNumberCheck_VN(992093291442));
    });
    i++;
  });
  });

describe('Zero counter', function() {
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
  it('should return an empty String for invalid value', function(){
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

describe('Prime factorization of Number', function(){
  it('should return an empty array for invalid value', function(){
    assert.isEmpty(numberPrimeFactorization("jsdhdsjh"));
    assert.isEmpty(numberPrimeFactorization(null));
    assert.isEmpty(numberPrimeFactorization(NaN));
    assert.isEmpty(numberPrimeFactorization([]));
    assert.isEmpty(numberPrimeFactorization(0));
    assert.isEmpty(numberPrimeFactorization(1));
    assert.isEmpty(numberPrimeFactorization(-78));
  });
  it('should return a list of prime factors of Number', function(){
    assert.sameDeepOrderedMembers(numberPrimeFactorization(2),[2]);
    assert.sameDeepOrderedMembers(numberPrimeFactorization(78),[2, 3, 13]);
    assert.sameDeepOrderedMembers(numberPrimeFactorization(54),[2, 3, 3, 3]);
    assert.sameDeepOrderedMembers(numberPrimeFactorization(1024),[2, 2, 2, 2, 2, 2, 2, 2, 2, 2]);
    assert.sameDeepOrderedMembers(numberPrimeFactorization(53581),[11, 4871]);
    assert.sameDeepOrderedMembers(numberPrimeFactorization(987987),[3, 7, 7, 11, 13, 47]);
  });

});

describe('Prime factors of Number', function(){
  it('should return an empty array for invalid value', function(){
    assert.isEmpty(primeFactorsOfNumber("jsdhdsjh"));
    assert.isEmpty(primeFactorsOfNumber(null));
    assert.isEmpty(primeFactorsOfNumber(NaN));
    assert.isEmpty(primeFactorsOfNumber([]));
    assert.isEmpty(primeFactorsOfNumber(0));
    assert.isEmpty(primeFactorsOfNumber(1));
    assert.isEmpty(primeFactorsOfNumber(-78));
  });
  it('should return a list of prime factors of Number', function(){
    assert.sameDeepOrderedMembers(primeFactorsOfNumber(2),[2]);
    assert.sameDeepOrderedMembers(primeFactorsOfNumber(13),[13]);
    assert.sameDeepOrderedMembers(primeFactorsOfNumber(78),[2, 3, 13]);
    assert.sameDeepOrderedMembers(primeFactorsOfNumber(54),[2, 3]);
    assert.sameDeepOrderedMembers(primeFactorsOfNumber(1024),[2]);
    assert.sameDeepOrderedMembers(primeFactorsOfNumber(53581),[11, 4871]);
    assert.sameDeepOrderedMembers(primeFactorsOfNumber(987987),[3, 7, 11, 13, 47]);
  });

});

describe('N-th Fibonacci Number', function(){
  it('should return 0 for invalid value', function(){
    assert.equal(nthFibonacciNumberCounter("dagad"), 0);
    assert.equal(nthFibonacciNumberCounter(null), 0);
    assert.equal(nthFibonacciNumberCounter(NaN), 0);
    assert.equal(nthFibonacciNumberCounter(0), 0);
    assert.equal(nthFibonacciNumberCounter(-5), 0);
  });
  it('should return n-th Fibonacci number', function(){
    assert.equal(nthFibonacciNumberCounter(1), 1);
    assert.equal(nthFibonacciNumberCounter(5), 5);
    assert.equal(nthFibonacciNumberCounter(13), 233);
    assert.equal(nthFibonacciNumberCounter(55), 139583862445);
    assert.equal(nthFibonacciNumberCounter(12345), Infinity);
  });
});

describe('Greatest common divisor of two numbers', function(){
  it('should return 0 for invalid values', function(){
    assert.equal(greatestCommonDivisorCounter("dagad", 23), 0);
    assert.equal(greatestCommonDivisorCounter(null), 0);
    assert.equal(greatestCommonDivisorCounter(NaN), 0);
    assert.equal(greatestCommonDivisorCounter(0), 0);
  });
  it('should return greatest common divisor', function(){
    assert.equal(greatestCommonDivisorCounter(1, 1), 1);
    assert.equal(greatestCommonDivisorCounter(21, 49), 7);
    assert.equal(greatestCommonDivisorCounter(58, 4), 2);
    assert.equal(greatestCommonDivisorCounter(-5, 25), 5);
    assert.equal(greatestCommonDivisorCounter(-36, -6), 6);
    assert.equal(greatestCommonDivisorCounter(26, 546), 26);
    assert.equal(greatestCommonDivisorCounter(1024, 1024), 1024);
    assert.equal(greatestCommonDivisorCounter(56784, 5465464561986), 1014);
  });
});

describe('Delete duplicates from an Array', function(){

  var funcs = [deleteDuplicateMembers_V1, deleteDuplicateMembers_V2, deleteDuplicateMembers_V3, 
         deleteDuplicateMembers_V4, deleteDuplicateMembers_V5, deleteDuplicateMembers_V6, 
         deleteDuplicateMembers_V7];
  
  var i = 0;
  funcs.forEach(function(deleteDuplicateMembers_vN){
    it('should return an empty array (V' + (i+1) + ')', function(){
      assert.isEmpty(deleteDuplicateMembers_vN("jsdhdsjh"));
      assert.isEmpty(deleteDuplicateMembers_vN("js dh ds jh"));
      assert.isEmpty(deleteDuplicateMembers_vN(null));
      assert.isEmpty(deleteDuplicateMembers_vN(NaN));
      assert.isEmpty(deleteDuplicateMembers_vN([]));
    });
    it('should return an array without duplicates (V' + (i+1) + ')', function(){
      assert.sameDeepOrderedMembers(deleteDuplicateMembers_vN([1, 2, 3, 1, 4, 5, 2, 8, 4]), [1, 2, 3, 4, 5, 8]);
      assert.sameDeepOrderedMembers(deleteDuplicateMembers_vN([1, 1, 1, 1, 1, 1, 1]), [1]);
      assert.sameDeepOrderedMembers(deleteDuplicateMembers_vN([1, 'd', 3, 1, 'c', 2,'c']), [1, 'd', 3, 'c', 2]);
      assert.sameDeepOrderedMembers(deleteDuplicateMembers_vN([8, 4, 3, 4, null]), [8, 4, 3, null]);
       // assert.sameDeepOrderedMembers(deleteDuplicateMembers_vN([1, 2, , 1, 4, 5, 2, 8, 4, ]), [1, 2, , 4, 5, 8, ]);
    });
    i++;
  });

});

// describe('Performance test', function(){
//   this.timeout(60000);
//   var funcs = [deleteDuplicateMembers_v1, deleteDuplicateMembers_v2, deleteDuplicateMembers_v3, 
//     deleteDuplicateMembers_v4, deleteDuplicateMembers_v5, deleteDuplicateMembers_v6, 
//     deleteDuplicateMembers_v7];

//   var output = [1,2,3,4,5,6,7,8,9,0];
//   var a = output;
//   a = a.concat(a).concat(a).concat(a).concat(a).concat(a).concat(a).concat(a).concat(a);
//   a = a.concat(a).concat(a).concat(a).concat(a).concat(a).concat(a).concat(a).concat(a);
//   var input = [];
//   for (var i=0;i<50;i++)
//   {
//     input = input.concat(a);
//   }
//   var i = 0;
//   funcs.forEach(function(deleteDuplicateMembers_vN){
//     it('Test (V' + (i+1) + ') (N = ' + input.length + ')', function(){
//       assert.sameDeepOrderedMembers(deleteDuplicateMembers_vN(input), output);
//     });
//     i++;
//   });

// });

describe('Megre of two sorted arrays', function(){
  it('should return first array for invalid input of array2', function(){
    assert.sameDeepOrderedMembers(mergeSortedArrays([1, 2, 3, 4], []), [1, 2, 3, 4]);
    assert.sameDeepOrderedMembers(mergeSortedArrays([1, 2, 3, 4], "jygiu"), [1, 2, 3, 4]);
    assert.sameDeepOrderedMembers(mergeSortedArrays([1, 2, 3, 4], null), [1, 2, 3, 4]);
    assert.sameDeepOrderedMembers(mergeSortedArrays([1, 2, 3, 4], NaN), [1, 2, 3, 4]);
  });
  it('should return second array for invalid input of array1', function(){
    assert.sameDeepOrderedMembers(mergeSortedArrays([], [1, 2, 3, 4]), [1, 2, 3, 4]);
    assert.sameDeepOrderedMembers(mergeSortedArrays("jygiu", [1, 2, 3, 4]), [1, 2, 3, 4]);
    assert.sameDeepOrderedMembers(mergeSortedArrays(null, [1, 2, 3, 4]), [1, 2, 3, 4]);
    assert.sameDeepOrderedMembers(mergeSortedArrays(NaN, [1, 2, 3, 4]), [1, 2, 3, 4]);
  });
  it('should return an empty array for invalid values of both arrays', function(){
    assert.isEmpty(mergeSortedArrays("jsdhdsjh", "dfgdsf"));
    assert.isEmpty(mergeSortedArrays("js dh ds jh", "hj hj hj"));
    assert.isEmpty(mergeSortedArrays(null, null));
    assert.isEmpty(mergeSortedArrays(NaN, NaN));
    assert.isEmpty(mergeSortedArrays([], []));
  });
  it('should return merged sorted array', function(){
    assert.sameDeepOrderedMembers(mergeSortedArrays([1, 2, 3], [1, 2, 3]), [1, 1, 2, 2, 3, 3]);
    assert.sameDeepOrderedMembers(mergeSortedArrays([1, 2, 3, null], [4, 7, 9]), [1, 2, 3, 4, 7, 9]);
    assert.sameDeepOrderedMembers(mergeSortedArrays([1, 2], [1, 2, 3]), [1, 1, 2, 2, 3, ]);
    assert.sameDeepOrderedMembers(mergeSortedArrays([2, 4, 5], [1, 2, 3]), [1, 2, 2, 3, 4, 5]);
    assert.sameDeepOrderedMembers(mergeSortedArrays([1, 2, 3, 'b'], [1, 2, 'a']), [1, 1, 2, 2, 3]);
    assert.sameDeepOrderedMembers(mergeSortedArrays(['a', 'b', 'c'], ['b', 'd', 'e']), []);

    
  });
});

describe('Fizz Buzz Task', function(){
  it('should return an empty array for invalid value', function(){
    assert.isEmpty(fizzBuzzOutput([]));
    assert.isEmpty(fizzBuzzOutput("jygiu"));
    assert.isEmpty(fizzBuzzOutput (null));
    assert.isEmpty(fizzBuzzOutput(NaN));
    assert.isEmpty(fizzBuzzOutput(200));
    assert.isEmpty(fizzBuzzOutput(26.5));
    assert.isEmpty(fizzBuzzOutput(0));
  });
  it('should return string with Fizz for /3, Buzz for /5, FizzBuzz for /5 & /3 and other number', function(){
    assert.equal(fizzBuzzOutput(1), 1);
    assert.equal(fizzBuzzOutput(5), "1 2 Fizz 4 Buzz");
    assert.equal(fizzBuzzOutput(15), "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz");
    assert.equal(fizzBuzzOutput(56), "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz 31 32 Fizz 34 Buzz Fizz 37 38 Fizz Buzz 41 Fizz 43 44 FizzBuzz 46 47 Fizz 49 Buzz Fizz 52 53 Fizz Buzz 56");

  });
});

describe('Reverse digits of an integer.', function(){
  var funcs = [didgitsReverser_V1, didgitsReverser_V2];

  var i = 0;
  funcs.forEach(function(didgitsReverser_VN){
    it('should return -1 for invalid value (V' + (i+1) + ')', function(){
      assert.equal(didgitsReverser_VN(), -1);
      assert.equal(didgitsReverser_VN("jygiu"), -1);
      assert.equal(didgitsReverser_VN(null), -1);
      assert.equal(didgitsReverser_VN(NaN), -1);
      assert.equal(didgitsReverser_VN(26.5), -1);
      assert.equal(didgitsReverser_VN(0), -1);
    });
    it('should return reversed number(V' + (i+1) + ')', function(){
      assert.equal(didgitsReverser_VN(1234), 4321);
      assert.equal(didgitsReverser_VN(35146540), 4564153);
      assert.equal(didgitsReverser_VN(-1234), -4321);
    });
  i++;
  });
});

describe('Count prime factor of a number', function() {
  var funcs = [primeNumbersCounter_V1, primeNumbersCounter_V2];

  var i = 0;
  funcs.forEach(function(primeNumbersCounter_VN){
    it('should return -1 for invalid input (V' + (i+1) + ')', function() {
      assert.equal(primeNumbersCounter_VN(-9999999), -1);
      assert.equal(primeNumbersCounter_VN(0), -1);
      assert.equal(primeNumbersCounter_VN(1), -1);
      assert.equal(primeNumbersCounter_VN("sadasd"), -1);
      assert.equal(primeNumbersCounter_VN(), -1);
      assert.equal(primeNumbersCounter_VN(null), -1);
      assert.equal(primeNumbersCounter_VN(NaN), -1);
      assert.equal(primeNumbersCounter_VN(3.00000000005), -1);
    });
    it('should return amount of prime numbers (V' + (i+1) + ')', function() {
      assert.equal(primeNumbersCounter_VN(2), 0);
      assert.equal(primeNumbersCounter_VN(15), 6);
      assert.equal(primeNumbersCounter_VN(173), 39);
      assert.equal(primeNumbersCounter_VN(1234), 202);
      assert.equal(primeNumbersCounter_VN(324150), 27931);
    });
    i++;
  });
  });

describe('Ugly numbers', function() {
  var funcs = [isNumberUgly_V1, isNumberUgly_V2];

  var i = 0;
  funcs.forEach(function(isNumberUgly_VN){
    it('should return -1 for invalid input (V' + (i+1) + ')', function() {
      assert.isFalse(isNumberUgly_VN(-9999999));
      assert.isFalse(isNumberUgly_VN(0));
      assert.isFalse(isNumberUgly_VN("sadasd"));
      assert.isFalse(isNumberUgly_VN());
      assert.isFalse(isNumberUgly_VN(null));
      assert.isFalse(isNumberUgly_VN(NaN));
      assert.isFalse(isNumberUgly_VN(3.00000000005));
    });
    it('should return false for not ugly numbers (V' + (i+1) + ')', function() {
      assert.isFalse(isNumberUgly_VN(7));
      assert.isFalse(isNumberUgly_VN(14));
      assert.isFalse(isNumberUgly_VN(156));
      assert.isFalse(isNumberUgly_VN(324150));
    });
    it('should return true of for ugly numbers (V' + (i+1) + ')', function() {
      assert.isTrue(isNumberUgly_VN(1));
      assert.isTrue(isNumberUgly_VN(2));
      assert.isTrue(isNumberUgly_VN(15));
      assert.isTrue(isNumberUgly_VN(125));
      assert.isTrue(isNumberUgly_VN(324000));
    });
    i++;
  });
  });

//   describe('Performance test', function(){
//   this.timeout(60000);
//   var funcs = [isNumberUgly_V1, isNumberUgly_V2];

//   var input = [];
//   var N = 100000;
//   var mults = [2,3,5];

//   for (var i=0; i<N; i++)
//   {
//     input[i] = 1;
//     var R = Math.round(Math.random() * 7);
//     var mult_i = Math.round(Math.random() * 2);
//     for (var j=0; j<R; j++)
//     {
//       input[i] *= mults[mult_i];
//     }
//   }

//   var i = 0;
//   funcs.forEach(function(isNumberUgly_VN){
//     it('Test (V' + (i+1) + ') (N = ' + input.length + ')', function(){
//       for (var k=0; k<N; k++){
//         assert.isTrue(isNumberUgly_VN(input[k]), true);
//       }
//     });
//     i++;
//   });

// });

describe('Happy numbers', function() {
  var funcs = [isHappyNumber_V1, isHappyNumber_V2];

  var i = 0;
  funcs.forEach(function(isHappyNumber_VN){
    it('should return false for invalid input (V' + (i+1) + ')', function() {
      assert.isFalse(isHappyNumber_VN(-9999999));
      assert.isFalse(isHappyNumber_VN(0));
      assert.isFalse(isHappyNumber_VN("sadasd"));
      assert.isFalse(isHappyNumber_VN());
      assert.isFalse(isHappyNumber_VN(null));
      assert.isFalse(isHappyNumber_VN(NaN));
      assert.isFalse(isHappyNumber_VN(3.00000000005));
    });
    it('should return false for not happy numbers (V' + (i+1) + ')', function() {
      assert.isFalse(isHappyNumber_VN(2));
      assert.isFalse(isHappyNumber_VN(14));
      assert.isFalse(isHappyNumber_VN(56));
      assert.isFalse(isHappyNumber_VN(324150));
    });
    it('should return true of for happy numbers (V' + (i+1) + ')', function() {
      assert.isTrue(isHappyNumber_VN(1));
      assert.isTrue(isHappyNumber_VN(7));
      assert.isTrue(isHappyNumber_VN(19));
      assert.isTrue(isHappyNumber_VN(236));
      assert.isTrue(isHappyNumber_VN(1111111));
    });
    i++;
  });
  });
  
describe('Power of 3 numbers', function(){
  it('should return false for numbers < 1', function(){
      assert.isFalse(isPowerOfThree(0));
      assert.isFalse(isPowerOfThree(-9));
  });
  it('should return false for numbers that are not power of 3', function(){
    assert.isFalse(isPowerOfThree(15));
    assert.isFalse(isPowerOfThree(45));
  });
  it('should return true for numbers that are power of 3', function(){
    assert.isTrue(isPowerOfThree(3));
    assert.isTrue(isPowerOfThree(9));
    assert.isTrue(isPowerOfThree(27));
    assert.isTrue(isPowerOfThree(243));
    assert.isTrue(isPowerOfThree(19683));
  });
  });

describe('Square root of a number', function() {
  var funcs = [squareRoot_V1, squareRoot_V2];

  var i = 0;
  funcs.forEach(function(squareRoot_VN){
    it('should return 0 for invalid input (V' + (i+1) + ')', function() {
      assert.equal(squareRoot_VN(-999999999), 0);
      assert.equal(squareRoot_VN(0), 0);
      assert.equal(squareRoot_VN("sadasd"), 0);
      assert.equal(squareRoot_VN(), 0);
      assert.equal(squareRoot_VN(null), 0);
      assert.equal(squareRoot_VN(NaN) , 0);
    });
    it('should return square root of a number (V' + (i+1) + ')', function() {
      assert.equal(squareRoot_VN(1), 1);
      assert.equal(squareRoot_VN(2), 1);
      assert.equal(squareRoot_VN(36), 6);
      assert.equal(squareRoot_VN(49), 7);
      assert.equal(squareRoot_VN(125), 11);
      assert.equal(squareRoot_VN(65536), 256);
      assert.equal(squareRoot_VN(2147395599), 46339);
    });
    i++;
  });
  });

describe('N-element shift of an array', function() {
  var funcs = [arrayShift_V1, arrayShift_V2];

  var i = 0;
  funcs.forEach(function(arrayShift_VN){
    it('should return an empty array for invalid input (V' + (i+1) + ')', function() {
      assert.isEmpty(arrayShift_VN([], 2), []);
      assert.isEmpty(arrayShift_VN("sadasd", null), []);
      assert.isEmpty(arrayShift_VN(), []);
      assert.isEmpty(arrayShift_VN(null, 2), []);
      assert.isEmpty(arrayShift_VN(NaN ,"fsgsdfg") , []);
    });
    it('should return a shifted array (V' + (i+1) + ')', function() {
      assert.sameDeepOrderedMembers(arrayShift_VN([1, 2, 3, 4], 2), [3, 4, 1, 2]);
      assert.sameDeepOrderedMembers(arrayShift_VN([1, 2, 3, 4], -2), [3, 4, 1, 2]);
      assert.sameDeepOrderedMembers(arrayShift_VN([1, 2, 3, 4, 5, 6],  5), [2, 3, 4, 5, 6, 1]);
      assert.sameDeepOrderedMembers(arrayShift_VN([1, 2], 3), [2, 1]);
      assert.sameDeepOrderedMembers(arrayShift_VN([1, 2], 0), [1, 2]);
      assert.sameDeepOrderedMembers(arrayShift_VN([1], 1), [1]);
    });
    i++;
  });
  });

  describe('Moove zeros to the end of the array', function() {
  it('should return an empty array for invalid input', function() {
    assert.isEmpty(moveZeros([]), []);
    assert.isEmpty(moveZeros("dfasdf"), []);
    assert.isEmpty(moveZeros(), []);
    assert.isEmpty(moveZeros(null), []);
    assert.isEmpty(moveZeros(NaN), []);
  });
  it('should return an array with all 0 in the end of the array', function() {
    assert.sameDeepOrderedMembers(moveZeros([1, 0, 3, 0, 12]), [1, 3, 12, 0, 0]);
    assert.sameDeepOrderedMembers(moveZeros([1, 0, 0, 2, 8, 4, 0, 3, 1]), [1, 2, 8, 4, 3, 1, 0, 0, 0]);
    assert.sameDeepOrderedMembers(moveZeros([0, 0, 0, 0]), [0, 0, 0, 0]);
    assert.sameDeepOrderedMembers(moveZeros([0, 0, 0, 7, 3, 0]), [7, 3, 0, 0, 0, 0]);
    assert.sameDeepOrderedMembers(moveZeros([0, 0, 0, 4]), [4, 0, 0, 0]);
  });
  });

  describe('Single element in an array', function() {
    it('should return null for invalid input', function() {
      assert.isNull(singleNumber());
      assert.isNull(singleNumber(null));
      assert.isNull(singleNumber([]));
      assert.isNull(singleNumber("dfdgbh rfgh"));
    });
    it('should return single element in an array', function() {
      assert.equal(singleNumber([1, 0, 1]), 0);
      assert.equal(singleNumber([4, 1, 2, 1, 2]), 4);
      assert.equal(singleNumber([2, 2, 1]), 1);
      assert.equal(singleNumber([3]), 3);
    });
  });

  describe('Major element in an array', function() {
    it('should return null for invalid input', function() {
      assert.isNull(majorityElement());
      assert.isNull(majorityElement(null));
      assert.isNull(majorityElement([]));
      assert.isNull(majorityElement("dfdgbh rfgh"));
    });
    it('should return major element in an array', function() {
      assert.equal(majorityElement([3, 2, 3, 1, 3]), 3);
      assert.equal(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
      assert.equal(majorityElement([2, 2, 1]), 2);
      assert.equal(majorityElement([3]), 3);
      assert.equal(majorityElement([1, 2, 1, 1, 1, 4, 1, 5, 2, 3, 1]), 1);
    });
  });

  describe('Valid anagram', function() {
    it('should return an empty string for invalid input', function() {
      assert.isEmpty(isAnagram());
      assert.isEmpty(isAnagram(null, null));
      assert.isEmpty(isAnagram(null, ""));
    });
    it('should return true for anagram', function() {
      assert.isTrue(isAnagram("", ""));
      assert.isTrue(isAnagram("anagram", "nagaram"));
      assert.isTrue(isAnagram("aaa", "aaa"));
      assert.isTrue(isAnagram("caaa", "aaac"));
      assert.isTrue(isAnagram("c", "c"));
    });
    it('should return false for anagram', function() {
      assert.isFalse(isAnagram("qwqer", "dsfddds"));
      assert.isFalse(isAnagram("anagramr", "nagaram"));
      assert.isFalse(isAnagram("cat", "rat"));
      assert.isFalse(isAnagram("aaabb", "aabbb"));
      assert.isFalse(isAnagram("a", "A"));
    });
  });

  describe('Missing number in an array', function() {
    it('should return an empty array for invalid input', function() {
      assert.isEmpty(missingNumber());
      assert.isEmpty(missingNumber(null));
      assert.isEmpty(missingNumber("dfsgffdgfdg"));
    });
    it('should return a missing number in the array', function() {
      assert.equal(missingNumber([]), 0);
      assert.equal(missingNumber([3, 0, 1]), 2);
      assert.equal(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8);
      assert.equal(missingNumber([1, 0, 2]), 3);
    });
  });

  describe('Linked List Cycle', function() {
    it('should return false for invalid input', function() {
      assert.isFalse(hasCycle());
      assert.isFalse(hasCycle([]));
      assert.isFalse(hasCycle(null));
      assert.isFalse(hasCycle("dfsgffdgfdg"));
      assert.isFalse(hasCycle(generateLinkedList()));
      assert.isFalse(hasCycle(generateLinkedList([])));
      assert.isFalse(hasCycle(generateLinkedList(null)));
      assert.isFalse(hasCycle(generateLinkedList("dfsgffdgfdg")));
    });
    it('should return true in the provided list has a cycle', function() {
      assert.isTrue(hasCycle(generateLinkedList([1], 0)));
      assert.isTrue(hasCycle(generateLinkedList([1, 2, 3, 4], 1)));
      assert.isTrue(hasCycle(generateLinkedList([3, 2, 0, -4], 3)));
      assert.isTrue(hasCycle(generateLinkedList([1, 2], 1)));
    });
    it('should return false in the provided list has no cycle', function() {
      assert.isFalse(hasCycle(generateLinkedList([], 0)));
      assert.isFalse(hasCycle(generateLinkedList([1], 1)));
      assert.isFalse(hasCycle(generateLinkedList([1, 2, 3, 4], -1)));
      assert.isFalse(hasCycle(generateLinkedList([1, 2, 3, 4], 5)));
    });
  });

  describe('Transpose Matrix', function() {
    it('should return an empty array for invalid input', function() {
      assert.isEmpty(transposeMatrix([]));
      assert.isEmpty(transposeMatrix("dfasdf"));
      assert.isEmpty(transposeMatrix());
      assert.isEmpty(transposeMatrix(null));
      assert.isEmpty(transposeMatrix(NaN));
    });
    it('should return a transposed Matrix', function() {
      assert.sameDeepOrderedMembers(transposeMatrix([[1,2,3],[4,5,6],[7,8,9]]), [[1,4,7],[2,5,8],[3,6,9]]);
      assert.sameDeepOrderedMembers(transposeMatrix([[1,2,3],[4,5,6]]), [[1,4],[2,5],[3,6]]);
      assert.sameDeepOrderedMembers(transposeMatrix( [[1,4],[2,5],[3,6]]), [[1,2,3],[4,5,6]]);
      assert.sameDeepOrderedMembers(transposeMatrix([[1,2,3]]), [[1],[2],[3]]);
      assert.sameDeepOrderedMembers(transposeMatrix([[1]]), [[1]]);
    });
  });

    describe('Sort array by evenness', function() {
      it('should return an empty array for invalid input', function() {
        assert.isEmpty(sortArrayByParity([]));
        assert.isEmpty(sortArrayByParity("dfasdf"));
        assert.isEmpty(sortArrayByParity());
        assert.isEmpty(sortArrayByParity(null));
        assert.isEmpty(sortArrayByParity(NaN));
      });
      it('should return a sorted by evenness array', function() {
        assert.sameDeepOrderedMembers(sortArrayByParity([3, 1, 2, 4]), [2, 4, 1, 3]);
        assert.sameDeepOrderedMembers(sortArrayByParity([3, 1, 2, 5, 4]), [2, 4, 5, 1, 3]);
        assert.sameDeepOrderedMembers(sortArrayByParity([0, 1]), [0, 1]);
        assert.sameDeepOrderedMembers(sortArrayByParity([1, 0]), [0, 1]);
        assert.sameDeepOrderedMembers(sortArrayByParity([1]), [1]);
        assert.sameDeepOrderedMembers(sortArrayByParity([1, 3, 5, 7]), [7, 5, 3, 1]);
        assert.sameDeepOrderedMembers(sortArrayByParity([0, 2, 4, 6]), [0, 2, 4, 6]);
        assert.sameDeepOrderedMembers(sortArrayByParity([1, 1, 1, 1]), [1, 1, 1, 1]);
      });
    });

    describe('To lower case', function() {
      it('should return an empty string for invalid input', function() {
        assert.isEmpty(toLowerCase());
        assert.isEmpty(toLowerCase(null));
        assert.isEmpty(toLowerCase(""));
      });
      it('should return the string in lower case', function() {
        assert.equal(toLowerCase("Anagram"), "anagram");
        assert.equal(toLowerCase("aaa"), "aaa");
        assert.equal(toLowerCase("LOVELY"), "lovely");
        assert.equal(toLowerCase("Cdasfa1"), "cdasfa1");
      });
    });

    describe('Big numbers multiplication', function() {
      it('should return an empty string for invalid input', function() {
        assert.isEmpty(bigNumbersMultipier());
        assert.isEmpty(bigNumbersMultipier(null));
        assert.isEmpty(bigNumbersMultipier(""));
      });
      it('should return multiplication of two big numbers result', function() {
        assert.equal(bigNumbersMultipier("0", "0"), "0");
        assert.equal(bigNumbersMultipier("123", "456"), "56088");
        assert.equal(bigNumbersMultipier("23", "456"), "10488");
        assert.equal(bigNumbersMultipier("123", "45"), "5535");
        assert.equal(bigNumbersMultipier("1000000000001", "7000000000002"), "7000000000009000000000002");
        assert.equal(bigNumbersMultipier("123456789", "987654321"), "121932631112635269");
      });
    });

    describe('Arabic to Roman', function() {
      it('should return an empty string for invalid input', function() {
        assert.isEmpty(intToRoman());
        assert.isEmpty(intToRoman(null));
        assert.isEmpty(intToRoman(""));
        assert.isEmpty(intToRoman(-45));
        assert.isEmpty(intToRoman(0));
        assert.isEmpty(intToRoman(4000));
      });
      it('should return Roman number', function() {
        assert.equal(intToRoman(1), "I");
        assert.equal(intToRoman(123), "CXXIII");
        assert.equal(intToRoman(999), "CMXCIX");
        assert.equal(intToRoman(1000), "M");
        assert.equal(intToRoman(1994), "MCMXCIV");
        assert.equal(intToRoman(3999), "MMMCMXCIX");
      });
    });

    describe('Flipping an Image', function() {
      it('should return an empty array for invalid input', function() {
        assert.isEmpty(flipAndInvertImage());
        assert.isEmpty(flipAndInvertImage(null));
        assert.isEmpty(flipAndInvertImage(""));
        assert.isEmpty(flipAndInvertImage([1]));
        assert.isEmpty(flipAndInvertImage([[1, 2, 3],[1, 3]]));
        assert.isEmpty(flipAndInvertImage([[1, 2],[2, 1]]));
        assert.isEmpty(flipAndInvertImage(4000));
      });
      it('should return flipped horizontally and inverted array', function() {
        assert.sameDeepOrderedMembers(flipAndInvertImage([[1]]), [[0]]);
        assert.sameDeepOrderedMembers(flipAndInvertImage([[1,0],[0,1]]), [[1,0],[0,1]]);
        assert.sameDeepOrderedMembers(flipAndInvertImage([[0,0],[0,0]]), [[1,1],[1,1]]);
        assert.sameDeepOrderedMembers(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]), [[1,0,0],[0,1,0],[1,1,1]]);
        assert.sameDeepOrderedMembers(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]), [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]);
      });
    });

    describe('Valid palindrome', function() {
      it('should return an empty string for invalid input', function() {
        assert.isEmpty(isPalindrome());
        assert.isEmpty(isPalindrome(""));
        assert.isEmpty(isPalindrome(null));
        assert.isEmpty(isPalindrome(undefined));
      });
      it('should return false for string that isn\'t palindrome', function() {
        assert.isTrue(isPalindrome("aaa"));
        assert.isTrue(isPalindrome("Racecar"));
        assert.isTrue(isPalindrome("No lemon, no melon"));
        assert.isTrue(isPalindrome("A man, a plan, a canal: Panama"));
      });
      it('should return true for string that is palindrome', function() {
        assert.isFalse(isPalindrome("baaa"));
        assert.isFalse(isPalindrome("race a car"));
        assert.isFalse(isPalindrome("Cdasfa1"));
      });
    });

    describe('Valid palindrome II', function() {
      it('should return an empty string for invalid input', function() {
        assert.isEmpty(isPalindrome());
        assert.isEmpty(isPalindrome(""));
        assert.isEmpty(isPalindrome(null));
        assert.isEmpty(isPalindrome(undefined));
      });
      it('should return false for string that isn\'t palindrome', function() {
        assert.isTrue(validPalindrome("aba"));
        assert.isTrue(validPalindrome("raceacar"));
        assert.isTrue(validPalindrome("nolemongnomelon"));
        assert.isTrue(validPalindrome("amanaplangacanalpanama"));
      });
      it('should return true for string that is palindrome', function() {
        assert.isFalse(validPalindrome("babaa"));
        assert.isFalse(validPalindrome("race a carbb"));
        assert.isFalse(validPalindrome("Cdasfa1bdfg"));
      });
    });
    
    describe('Buddy Strings', function() {
      it('should return an empty string for invalid input', function() {
        assert.isEmpty(isBuddyStrings());
        assert.isEmpty(isBuddyStrings("", "a"));
        assert.isEmpty(isBuddyStrings(null, "aa"));
        assert.isEmpty(isBuddyStrings(undefined));
      });
      it('should return false for string that isn\'t buddy strings', function() {
        assert.isTrue(isBuddyStrings("ab", "ba"));
        assert.isTrue(isBuddyStrings("aa", "aa"));
        assert.isTrue(isBuddyStrings("aaaaaaabc", "aaaaaaacb"));
      });
      it('should return true for string that is buddy strings', function() {
        assert.isFalse(isBuddyStrings("ab", "ab"));
        assert.isFalse(isBuddyStrings("raceacarbb", "racgbcarbb"));
        assert.isFalse(isBuddyStrings("dsfaefgegvwaw", "ddffgcfesfc"));
      });
    });