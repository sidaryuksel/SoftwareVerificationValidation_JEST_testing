const MergeSort = require('../src/MergeSort');

var result;
test("MergeSort algoritmasıyla verilen arrayin küçükten büyüğe doğru dizilimi", function () {
  result = MergeSort.getResult([111]);
  expect(result).toEqual(expect.arrayContaining([111]));
});

test("MergeSort algoritmasıyla verilen arrayin küçükten büyüğe doğru dizilimi", function () {
  result = MergeSort.getResult([5, 4, 8, 2, 8]);
  expect(result).toEqual(expect.arrayContaining([2, 4, 5, 8, 8]));
});

test("Daha komplex bir arrayin merge algoritmasıyla düzenlenmesi", function () {
  result = MergeSort.getResult([34, 23, 23, 1, 2, 46, 6, 7, 98, 65, 5, 4, 3, 45, 41, 89, 76, 3, 4, 5, 72]);
  expect(result).toEqual(expect.arrayContaining([1, 2, 3, 3, 4, 4, 5, 5, 6, 7, 23, 23, 34, 41, 45, 46, 65, 72, 76, 89, 98]));
});

test("Daha komplex bir arrayin merge algoritmasıyla düzenlenmesi", function () {
  result = MergeSort.getResult([-1, 0, -5, -9, -7]);
  expect(result).toEqual(expect.arrayContaining([-9, -7, -5, -1, 0]));
});

test("Daha komplex bir arrayin merge algoritmasıyla düzenlenmesi", function () {
  result = MergeSort.getResult([-1, 0, -5, -9, -7, 1, 8, 5, 9, 7]);
  expect(result).toEqual(expect.arrayContaining([-9, -7, -5, -1, 0, 1, 5, 7, 8, 9]));
});

test("Daha komplex bir arrayin merge algoritmasıyla düzenlenmesi", function () {
  result = MergeSort.getResult(['kalem', 'silgi', 'defter', 'kalem traş', 'parşomen kağıdı', 'çanta', 'boya kalemi']);
  expect(result).toEqual(expect.arrayContaining(["boya kalemi", "defter", "kalem", "kalem traş", "parşomen kağıdı", "silgi", "çanta"]));
});