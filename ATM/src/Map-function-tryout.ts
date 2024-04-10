const map1 = new Map();

map1.set(1, "1p");
map1.set(2, "2p");
map1.set(3, "3p");

// console.log(map1);

const object1 = {
  200: 3,
  500: 2,
  100: 5,
  5: 100,
  2: 250,
  50: 12,
  20: 20,
  1: 500,
  10: 50,
};

const object2 = {
  brian: 2,
  alan: 1,
  charlie: 3,
  eric: 5,
  dez: 4,
};

// sorts ascending
const array = Object.entries(object2);

const sorted = array.sort((a, b) => Number(a[1]) - Number(b[1]));

// also sorts ascending
// const sorted = array.sort(
//   ([keya], [keyb]) => Number(keyb) - Number(keya)
// )

const sortedMap = new Map<string, number>(sorted);

console.log(array);
console.log(sorted, sortedMap, sortedMap.get("5"));
