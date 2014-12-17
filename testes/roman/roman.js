function romano (n) {
    var r;
    var transforma = function (r) {
        if (!r) {return false}
        r = r.replace("IIII", "IV"); // 5-1 = 4
        r = r.replace("VIV", "IX"); // 10 - 1 =9
        r = r.replace("XXXX", "XL"); // 50 - 10 = 40
        r = r.replace("LXL", "XC"); // 100 - 10 = 90
        r = r.replace("CCCC", "CD"); // 500 - 100 = 400
        r = r.replace("DCD", "CM"); // 1000 - 100 = 900
        return r;
    };
    if (n <= 0) {
        r = "";
    } else if (n === 1) {
        r = "I";
    } else if (n < 5) {
        r = "I" + romano(n-1);
    } else if (n === 5) {
        r = "V";
    } else if (n < 10) {
        r = "V" + romano(n-5);
    } else if (n === 10) {
        r = "X";
    } else if (n < 50) {
        r = "X" + romano(n-10);
    } else if (n === 50) {
        r = "L";
    } else if (n < 100) {
        r = "L" + romano(n-50);
    } else if (n === 100) {
        r = "C";
    } else if (n < 500) {
        r = "C" + romano(n-100);
    } else if (n === 500) {
        r = "D";
    } else if (n < 1000) {
        r = "D" + romano(n-500);
    } else if (n === 1000) {
        r = "M";
    } else if (n < 4000) {
        r = "M" + romano(n-1000);
    }

    return transforma(r);
}




romano(3999);
