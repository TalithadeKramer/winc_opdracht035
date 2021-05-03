const woord = ["nice", "awesome", "tof"];
const newLength = woord.push('cool');
console.log(woord);

const fruit = ['appels', 'peren', 'citroenen'];
console.log(fruit.length); // 3

const land = ["Belgie", "Nederland", "Luxemburg"];
console.log(land[0]);

const dier = ["Haas", "Cavia", "Kip", "Schildpad"];
console.log(dier[3]);

const presidents = ["Trump", "Obama", "Bush", "Clinton"];
let n = 1;

const impeachTrumpSplice = presidents.splice(n);
console.log(impeachTrumpSplice); // ["Obama", "Bush", "Clinton"]

const impeachTrumpSlice = presidents.slice([1, -1]);
console.log(impeachTrumpSlice); // ["Obama", "Bush", "Clinton"]

const text = ['Winc', 'Academy', 'is', 'leuk', ';-}'];
console.log(text.join(' '));

const combineArrays1 = [1, 2, 3]
const combineArrays2 = [4, 5, 6]
console.log(combineArrays1.concat(combineArrays2))
