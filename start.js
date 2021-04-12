const isDogBetter = true
const isCatBetter = false
const atoms = 5
const sandGrains = 10
const starsInSky = 15

console.log((isDogBetter && isCatBetter) + " The value is false since they have diff values");
console.log((isDogBetter || isCatBetter) + ` The value is true since only one of them has to be true`);
console.log((!(isDogBetter && isCatBetter)) + ` The value is true as it is the opposite of the first statement`);
console.log(((atoms > starsInSky) && (atoms > sandGrains)) + ` The value is false since both results are false`);
console.log((atoms !== sandGrains) + ` The result is true since atoms is indeed not equal to sandGrains`);
console.log(((starsInSky < sandGrains) || (starsInSky > atoms)) + ` The result is true because the second statement is true`);
console.log(((atoms === starsInSky) || (atoms !== sandGrains)) + ` The results is true since the second statement is true`);
console.log(((atoms >= 10) && (sandGrains <= 10)) + ` The result is false because only one of the results is true `);
console.log((((atoms * starsInSky) < 100) || ((atoms * sandGrains) > 100)) + ` The result is true since the second statement is true and only one has to be true`);