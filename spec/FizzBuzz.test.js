const FizzBuzz = require('../src/FizzBuzz');

var result;
test("Should return fizz for multiples of three", function() {
    result = FizzBuzz.getResult(3);
    expect(result).toBe('fizz');
  });

  test("Should return buzz for multiples of five", function() {
    result = FizzBuzz.getResult(5);
    expect(result).toBe('buzz');
  });

  test("Should return fizzbuzz for multiples of five&three", function() {
    result = FizzBuzz.getResult(15);
    expect(result).toBe('fizzbuzz');
  });

  test("Should return value for not-multiples of three&five", function() {
    result = FizzBuzz.getResult(8);
    expect(result).toBe('8');
  });

  test("Should return error message for zero", function() {
    result = FizzBuzz.getResult(0);
    expect(result).toBe('1-100 arası tamsayı değer girilmeli!');
  });

  test("Should return 5.348 for 5.348 ", function() {
    result = FizzBuzz.getResult(5.348);
    expect(result).toBe('5.348');
  });

  test("Should return error message for 101", function() {
    result = FizzBuzz.getResult(101);
    expect(result).toBe('1-100 arası tamsayı değer girilmeli!');
  });

  test('Should return error message for string variable Ali', function() {
    result = FizzBuzz.getResult('Ali gel');
    expect(result).toBe('1-100 arası tamsayı değer girilmeli!'); 
  });
