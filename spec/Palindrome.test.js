const Palindrome = require('../src/Palindrome');

var result;
test("A man, a plan, a canal. Panama", function () {
    result = Palindrome.palindromeBul('A man, a plan, a canal. Panama');
    expect(result).toBe(true);
});

test("Ey Edip Adana'da pide ye", function () {
    result = Palindrome.palindromeBul("Ey Edip Adana'da pide ye");
    expect(result).toBe(true);
});
test("12 345 678 9 0 9 8765 4321", function () {
    result = Palindrome.palindromeBul("12 345 678 9 0 9 8765 4321");
    expect(result).toBe(true);
});

test("kızım okulda neler yapmış", function () {
    result = Palindrome.palindromeBul("kızım okulda neler yapmış");
    expect(result).toBe(false);
});
test("123456789", function () {
    result = Palindrome.palindromeBul("123456789");
    expect(result).toBe(false);
});
