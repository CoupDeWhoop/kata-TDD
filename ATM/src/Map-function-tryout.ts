const map1 = new Map();

map1.set(1, "1p");
map1.set(2, "2p");
map1.set(3, "3p");

console.log(map1);

const tillContents = {
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

// sorts ascending
const sorted = Object.entries(tillContents).sort(
  (a, b) => Number(b[0]) - Number(a[0])
);

const sortedMap = new Map<string, number>(sorted);
console.log(
  sortedMap,
  sortedMap.get("5")

  // also sorts ascending
  // Object.entries(tillContents).sort(
  //   ([keya], [keyb]) => Number(keyb) - Number(keya)
  // )
);
