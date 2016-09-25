function largestOfFour(arr) {
    // You can do this!
    var i, k, newArr = [];
    for (i = 0; i < arr.length; i++) {
        newArr[i] = arr[i][0];
        for (k = 1; k < arr[i].length; k++) {
            arr[i][k] > newArr[i] ? newArr[i] = arr[i][k] : newArr[i];
        }
    }
    console.log(newArr);
    return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);