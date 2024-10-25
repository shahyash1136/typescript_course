function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(30, 20, 'as-number');
console.log(combineAges);
var combineStringAges = combine('30', '20', 'as-number');
console.log(combineStringAges);
var combineName = combine('yash', 'charmi', 'as-text');
console.log(combineName);
