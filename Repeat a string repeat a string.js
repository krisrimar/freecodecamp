function repeat(str, num) {
    var accumulatedStr = "";
    while (num > 0) {
        accumulatedStr += str;
        num--;
    }
    return accumulatedStr;
}

repeatStringNumTimes("*", 3)