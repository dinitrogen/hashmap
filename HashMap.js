import { LinkedList } from "./LinkedList.js";

export class HashMap {
    constructor() {
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.buckets = [];
    }

    // For this excercise we will self-restrict such that we cannot access any out-of-bound index in the buckets array.
    validateIndex(index) {
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }
        return hashCode;
    }

    set(key, value) {
        let hash = this.hash(key);
        
        if (!this.buckets[hash]) {
            const list = new LinkedList();
            list.append(key,value);
            this.buckets[hash] = list;
        } else {
            let index = this.buckets[hash].findKey(key);
            if (index !== null) {
                this.validateIndex(index);
                this.buckets[hash].insertAt(key, value, index);
                this.buckets[hash].removeAt(index + 1);
            } else {
                this.buckets[hash].append(key, value);
            }
        }

        if (this.length() > this.loadFactor * this.capacity) {
            this.increaseCapacity();
        }
    }

    increaseCapacity() {
        this.capacity *= 2;
        let entries = this.entries();
        this.buckets = [];
        for (let i = 0; i < entries.length; i++) {
            this.set(entries[i][0], entries[i][1]);
        }
    }

    get(key) {
        let hash = this.hash(key);
        if (!this.buckets[hash]) {
            return null;
        } else {
            return this.buckets[hash].findValueOfKey(key);
        }
    }

    has(key) {
        let hash = this.hash(key);
        if (!this.buckets[hash]) {
            return false;
        } else {
            let index = this.buckets[hash].findKey(key);
            if (index !== null) {
                this.validateIndex(index);
                return true;
            } else {
                return false;
            }
        }
    }

    remove(key) {
        if (this.has(key)) {
            let hash = this.hash(key);
            let index = this.buckets[hash].findKey(key);
            this.validateIndex(index);
            this.buckets[hash].removeAt(index);
            return true;
        } else {
            return false;
        }
    }

    length() {
        let count = 0;
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] instanceof LinkedList) {
                count += this.buckets[i].size();
            }
        }
        return count;
    }

    clear() {
        this.buckets = [];
        this.capacity = 16;
    }

    keys() {
        let keysArr = [];
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] instanceof LinkedList) {
                let arr = this.buckets[i].getKeys();
                keysArr = keysArr.concat(arr);
            }
        }
        return keysArr;
    }

    values() {
        let valuesArr = [];
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] instanceof LinkedList) {
                let arr = this.buckets[i].getValues();
                valuesArr = valuesArr.concat(arr);
            }
        }
        return valuesArr;
    }

    entries() {
        let entriesArr = [];
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] instanceof LinkedList) {
                let arr = this.buckets[i].getKeyValuePairs();
                entriesArr = entriesArr.concat(arr);
            }
        }
        return entriesArr;
    }


}