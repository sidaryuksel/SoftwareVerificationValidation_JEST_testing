var number = 6;
function deneme(number) {
        if (typeof number === 'float' && typeof number === 'string') {
            console.log('burada');
            return new Error('Sayı tam sayı olmalıdır!');
        }
        else {
            if (1 <= number <= 100) {
                if (isMultipleOfThree(number) && isMultipleOfFive(number)) { return "fizzbuzz"; }
                if (isMultipleOfThree(number)) { return "fizz"; }
                if (isMultipleOfFive(number)) { return "buzz"; }
            }
            else {
                return new Error('Sayi 1-100 aralığında olmalıdır!');
            }
        }
        console.log('burada2');

        return number.toString();
    }

    const isFloat = (number) => {
        return number % 1 !== 0;
    }

    const isMultipleOfThree = (number) => {
        return number % 3 == 0 && number != 0;
    }

    const isMultipleOfFive = (number) => {
        return number % 5 == 0 && number != 0;
    }
