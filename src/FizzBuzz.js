const FizzBuzz = () => {
    function getResult(number) {

        if (number < 1 || 100 < number || typeof number === 'string') {
            return '1-100 arası tamsayı değer girilmeli!';
        }
        if (isMultipleOfThree(number) && isMultipleOfFive(number)) { return "fizzbuzz"; }
        if (isMultipleOfThree(number)) { return "fizz"; }
        if (isMultipleOfFive(number)) { return "buzz"; }
        
        return number.toString();

    }
    const isMultipleOfThree = (number) => {
        return number % 3 == 0 && number != 0;
    }

    const isMultipleOfFive = (number) => {
        return number % 5 == 0 && number != 0;
    }

    return {
        getResult: getResult
    };
}

module.exports = FizzBuzz();