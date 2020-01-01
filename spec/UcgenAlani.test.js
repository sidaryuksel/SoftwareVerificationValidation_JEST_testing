const UcgenAlani = require('../src/UcgenAlani');

var result;
test("Taban:3 Yukseklik:8, alan 12 olmalı", function () {
    result = UcgenAlani.hesaplaUcgenAlani(3, 8);
    expect(result).toBe(12);
});
test("Taban:4 Yukseklik:-5, alan 12 olmalı", function () {
    result = UcgenAlani.hesaplaUcgenAlani(4, -8);
    expect(result).toBe('Taban ve Yukseklik sıfırdan küçük olamaz!');
});
test("Taban:-4 Yukseklik:5, hata mesajı alınmalı", function () {
    result = UcgenAlani.hesaplaUcgenAlani(-4, 8);
    expect(result).toBe('Taban ve Yukseklik sıfırdan küçük olamaz!');
});