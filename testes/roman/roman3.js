/*
http://dojopuzzles.com/problemas/exibe/numeros-romanos/
 */

Number.prototype.roman = function() {
    var number = parseInt(this,10),
        roman,
        positions = [1,5,10,50,100,500,1000],
    position = positions.indexOf(number);

    if (number === 0){
        return '';
    }
    if (position >= 0) {
        if (number === 1) { roman = 'I'; }
        if (number === 5) { roman = 'V'; }
        if (number === 10) { roman = 'X'; }
        if (number === 50) { roman = 'L'; }
        if (number === 100) { roman = 'C'; }
        if (number === 500) { roman = 'D'; }
        if (number === 1000) { roman = 'M'; }
    } else {
        for (var l = positions.length - 1; l>=0; l--) {
            position = positions[l];
            var difference = number - position;

            if (difference + positions[l-1] === 0) {
                roman = (positions[l-1]).roman() + (positions[l]).roman();
                break;
            } else if (difference === -1) {
                roman = 'I' + (positions[l]).roman();
                break;
            } else if (number > position) {
                roman = (position).roman() + (difference).roman();
                break;
            }
        }
    }

    return roman;
};

