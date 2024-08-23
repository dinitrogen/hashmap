# Hash Map
A hashmap (or hashtable) data structure built as a javascript class. This type of structure can be used to store key/value pairs in an effective manner. Retrieval, insertion and removal of data is generally very efficient for a hashmap, with average time complexity of O(1) and worst case O(n) (i.e. when buckets are "full" and must be traversed). In this example, the hash table max capacity will double every time it gets filled beyond 75% capacity (i.e. loadFactor = 0.75).

This hashmap example also leverages a custom-built LinkedList class, which is used to handle collisions by storing multiple key/values pairs.

## Usage

### Import and create list
1. `import { HashMap } from "./HashMap.js";` import the HashMap class
2. `const hashMap = new HashMap()` instantiates a new hashmap.

### Available methods
- `hashMap.hash(key)` calculates a hash code for a given key
- `hashMap.set(key, value)` adds a new entry to the hashmap with specified key and value
- `hashMap.get(key)` returns the value assigned to the provided key (or null if not found)
- `hashMap.has(key)` returns true if the hashmap contains the key, otherwise false
- `hashMap.remove(key)` deletes the entry with the provided key and returns true; if the key doesn't exist, returns false
- `hashMap.length()` returns the number of keys/value pairs in the hashmap
- `hashMap.clear()` removes all data from the hashmap
- `hashMap.keys()` returns an array of all keys in the hashmap
- `hashMap.values()` returns an array of all values in the hashmap
- `hashMap.entries()` returns an array of all key/value pairs
