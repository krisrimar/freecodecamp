function truncateString(str, num) {

    if (num >= str.length) {
        return str;
    }

    num - 3 <= 0 ? str = str.slice(0, num) + "..." : str = str.slice(0, num - 3) + "...";

    return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
