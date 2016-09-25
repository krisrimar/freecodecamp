function largestOfFour(arr) {
    // You can do this!
    var i = 0, k = 1, newArr = [], num;
    for (i; i < arr.length; i++) {
        num = arr[i][0];
        for (k; k < arr[i].length; k++) {
            arr[i][k] > num ? num = arr[i][k] : num = num;
        }
        k = 0;
        newArr.push(num);
        num = 0;
    }
    console.log(newArr);
    return newArr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);