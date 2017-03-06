/**
 * Created by antoine on 06/03/17.
 */
'use strict';

module.exports = function (arr) {
    if(arr.length <= 0) return;

    let maxVal = undefined;
    let maxIndex = -1;
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(maxVal === undefined || arr[i] > maxVal) {
            maxVal = arr[i];
            maxIndex = i;
        }
        sum += arr[i];
    }
    let moy = sum / arr.length;
    console.log('Max index : ' + maxIndex);
    console.log('Moyenne : ' + moy);
};