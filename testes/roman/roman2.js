/*
http://dojopuzzles.com/problemas/exibe/numeros-romanos/
 */

function romano (number) {
    var r;
    var positions = [1,5,10,50,100,500,1000];
    var position = positions.indexOf(number);

    if (number === 0){
        return '';
    }
    if (position >= 0) {
        if (number === 1) { r = 'I'; }
        if (number === 5) { r = 'V'; }
        if (number === 10) { r = 'X'; }
        if (number === 50) { r = 'L'; }
        if (number === 100) { r = 'C'; }
        if (number === 500) { r = 'D'; }
        if (number === 1000) { r = 'M'; }
    } else {
        for (var l = positions.length - 1; l>=0; l--) {
            position = positions[l];
            var difference = number - position;

            if (difference + positions[l-1] === 0) {
                r = romano(positions[l-1]) + romano(positions[l]);
                break;
            } else if (difference === -1) {
                r = 'I' + romano(positions[l]);
                break;
            } else if (number > position) {
                r = romano(position) + romano(difference);
                break;
            }
        }
    }

    return r;
}
