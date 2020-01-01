const UcgenAlani = () => {
    function hesaplaUcgenAlani(taban, yukseklik) {
        if (taban <= 0 || yukseklik <= 0) {
            return 'Taban ve Yukseklik sıfırdan küçük olamaz!';
        }
        
        return taban * yukseklik / 2;

    }

    return {
        hesaplaUcgenAlani: hesaplaUcgenAlani
    }
};
module.exports = UcgenAlani();