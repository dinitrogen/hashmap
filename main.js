import { HashMap } from "./HashMap.js";

// instantiate a new hashmap
const hashMap = new HashMap();

// populate the hashmap with key/value pairs
hashMap.set('apple', 'red')
hashMap.set('banana', 'yellow')
hashMap.set('carrot', 'orange')
hashMap.set('dog', 'brown')
hashMap.set('elephant', 'gray')
hashMap.set('frog', 'green')
hashMap.set('grape', 'purple')
hashMap.set('hat', 'black')
hashMap.set('ice cream', 'white')
hashMap.set('jacket', 'blue')
hashMap.set('kite', 'pink')
hashMap.set('lion', 'golden')

// log all entries
console.log(hashMap.entries());

// update values of existing keys
hashMap.set('banana', 'ripe');
hashMap.set('lion', 'scary');

// log updated hashmap
console.dir(hashMap, {depth: null});

// add new entry that exceeds load factor and expands capacity
hashMap.set('moon', 'silver');

// log updated entries
console.log(hashMap.entries());

// log updated hashmap with expanded capacity
console.dir(hashMap, {depth: null});







