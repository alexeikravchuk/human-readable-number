module.exports = function toReadable (number = 0) {
    if (number === 0) return 'zero';
    let str = '';
    if(number % 100 < 20) {
        str = toTwenty(number % 100);
    } 
    else if(number % 100 < 100) {
        str = toOneHundred(number % 100);
    }
    if(number / 100 >= 1) {
        str = toTwenty(Math.floor(number / 100)) + " hundred " + str;
    }

    function toTwenty(n) {
        s = '';
        switch(n) {
            case 1: s = 'one'; break;
            case 2: s = 'two'; break;
            case 3: s = 'three'; break;
            case 4: s = 'four'; break;
            case 5: s = 'five'; break;
            case 6: s = 'six'; break;
            case 7: s = 'seven'; break;
            case 8: s = 'eight'; break;
            case 9: s = 'nine'; break;
            case 10: s = 'ten'; break;
            case 11: s = 'eleven'; break;
            case 12: s = 'twelve'; break;
            case 13: s = 'thirteen'; break;
            case 14: s = 'fourteen'; break;
            case 15: s = 'fifteen'; break;
            case 16: s = 'sixteen'; break;
            case 17: s = 'seventeen'; break;
            case 18: s = 'eighteen'; break;
            case 19: s = 'nineteen';
        }
        return s;
    }

    function toOneHundred (n) {
        s = toTwenty(n % 10);
        switch(Math.floor(n / 10)) {
            case 2: s = 'twenty ' + s; break;
            case 3: s = 'thirty ' + s; break;
            case 4: s = 'forty ' + s; break;
            case 5: s = 'fifty ' + s; break;
            case 6: s = 'sixty ' + s; break;
            case 7: s = 'seventy ' + s; break;
            case 8: s = 'eighty ' + s; break;
            case 9: s = 'ninety ' + s;
        }
        return s;
    }
    return str.trim();
}
