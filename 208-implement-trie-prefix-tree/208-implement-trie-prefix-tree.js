class TrieNode {
    constructor(child = {}, end = false) {
        this.child = child
        this.end = end
    }

}


var Trie = function() {
    this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let current = this.root
    for (const char of word) {
        if (!current.child[char]) {
            current.child[char] = new TrieNode();
        }
        current = current.child[char];
    }

    current.end = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let current = this.root
    for (const char of word) {
        if (current.child[char]) {
            current = current.child[char];
        } else {
            return false;
        }
    }
    return current.end
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let current = this.root
    for (const char of prefix) {
        if (current.child[char]) {
            current = current.child[char];
        } else {
            return false;
        }
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */