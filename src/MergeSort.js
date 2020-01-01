const MergeSort = () => {

    function getResult(array) {
        var half = array.length / 2;
        if (array.length < 2) {
            return array;
        } else {
            const left = array.splice(0, half); //left part of the array
            return merger(getResult(left), getResult(array));
        }
    }

    function merger(left, right) {
        const arr = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                arr.push(left.shift());
            } else {
                arr.push(right.shift());
            }
        }
        return [...arr, ...left, ...right];
    }

    return {
        getResult: getResult
    };
}
module.exports = MergeSort();