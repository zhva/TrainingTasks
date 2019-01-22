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
        //     assert.isTrue(primeNumberCheck_VN(Math.pow(2,31) - 1));
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

describe('Nth Fibonacci Number', function(){
    it('should return 0 for invalid index', function(){
        assert.equal(nthFibonacciNumberCounter("dagad"), 0);
        assert.equal(nthFibonacciNumberCounter(null), 0);
        assert.equal(nthFibonacciNumberCounter(NaN), 0);
        assert.equal(nthFibonacciNumberCounter(0), 0);
        assert.equal(nthFibonacciNumberCounter(-5), 0);
    });
    it('should return nth Fibonacci number', function(){
        assert.equal(nthFibonacciNumberCounter(1), 1);
        assert.equal(nthFibonacciNumberCounter(5), 5);
        assert.equal(nthFibonacciNumberCounter(13), 233);
        assert.equal(nthFibonacciNumberCounter(55), 139583862445);
        assert.equal(nthFibonacciNumberCounter(12345), Infinity);
    });
});

describe('Greatest common divisor of two numbers', function(){
    it('should return 0 for invalid index', function(){
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

    var funcs = [deleteDuplicateMembers_v1, deleteDuplicateMembers_v2, deleteDuplicateMembers_v3, 
                 deleteDuplicateMembers_v4, deleteDuplicateMembers_v5, deleteDuplicateMembers_v6, 
                 deleteDuplicateMembers_v7];
    
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
//     this.timeout(60000);
//     var funcs = [deleteDuplicateMembers_v1, deleteDuplicateMembers_v2, deleteDuplicateMembers_v3, 
//         deleteDuplicateMembers_v4, deleteDuplicateMembers_v5, deleteDuplicateMembers_v6, 
//         deleteDuplicateMembers_v7];

//     var output = [1,2,3,4,5,6,7,8,9,0];
//     var a = output;
//     a = a.concat(a).concat(a).concat(a).concat(a).concat(a).concat(a).concat(a).concat(a);
//     a = a.concat(a).concat(a).concat(a).concat(a).concat(a).concat(a).concat(a).concat(a);
//     var input = [];
//     for (var i=0;i<50;i++)
//     {
//         input = input.concat(a);
//     }
//     var i = 0;
//     funcs.forEach(function(deleteDuplicateMembers_vN){
//         it('Test (V' + (i+1) + ') (N = ' + input.length + ')', function(){
//             assert.sameDeepOrderedMembers(deleteDuplicateMembers_vN(input), output);
//         });
//         i++;
//     });

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
        assert.sameDeepOrderedMembers(mergeSortedArrays(['a', 'b', 'c'], ['b', 'd', 'e']), []);
        assert.sameDeepOrderedMembers(mergeSortedArrays([1, 2, 3, null], [4, 7, 9]), [1, 2, 3, 4, 7, 9]);
        assert.sameDeepOrderedMembers(mergeSortedArrays([1, 2], [1, 2, 3]), [1, 1, 2, 2, 3, ]);
        assert.sameDeepOrderedMembers(mergeSortedArrays([2, 4, 5], [1, 2, 3]), [1, 2, 2, 3, 4, 5]);
        assert.sameDeepOrderedMembers(mergeSortedArrays([1, 2, 3, 'b'], [1, 2, 'a']), [1, 1, 2, 2, 3]);

        
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
        it('should return reverced number(V' + (i+1) + ')', function(){
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
//     this.timeout(60000);
//     var funcs = [isNumberUgly_V1, isNumberUgly_V2];

//     var input = [];
//     var N = 100000;
//     var mults = [2,3,5];

//     for (var i=0; i<N; i++)
//     {
//         input[i] = 1;
//         var R = Math.round(Math.random() * 7);
//         var mult_i = Math.round(Math.random() * 2);
//         for (var j=0; j<R; j++)
//         {
//             input[i] *= mults[mult_i];
//         }
//     }

//     var i = 0;
//     funcs.forEach(function(isNumberUgly_VN){
//         it('Test (V' + (i+1) + ') (N = ' + input.length + ')', function(){
//             for (var k=0; k<N; k++){
//                 assert.isTrue(isNumberUgly_VN(input[k]), true);
//             }
//         });
//         i++;
//     });

// });


