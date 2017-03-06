/**
* Created by Antoine Janvier
* on 06/03/17.
*/
'use strict';
module.exports = function (v) {
    let sum = 0;
    let res = "";
    // let nb = scanf("%d");
    for(let i = 1; i <= v; i++) {
        if(i != 1)
            res += '+';
        res += i;
        sum += i;
    }
    console.log(res + '-->' + sum);
};