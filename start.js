const isDogBetter = true
const isCatBetter = false
const atoms = 5
const sandGrains = 10
const starsInSky = 15

console.log(isDogBetter && isCatBetter) + "this is logic";
console.log(isDogBetter || isCatBetter);
console.log(!(isDogBetter && isCatBetter));
console.log((atoms > starsInSky) && (atoms > sandGrains));
console.log(atoms !== sandGrains);
console.log((starsInSky < sandGrains) || (starsInSky > atoms));
console.log((atoms === starsInSky) || (atoms !== sandGrains));
console.log((atoms >= 10) && (sandGrains <= 10));
console.log(((atoms * starsInSky) < 100) || ((atoms * sandGrains) > 100));