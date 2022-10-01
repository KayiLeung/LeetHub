class TrieNode {
    constructor(child = {}, end = false) {
        this.child = child
        this.end = false
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
    let curr = this.root
    for (const char of word) {
        if (!curr.child[char]) {
            curr.child[char] = new TrieNode()
        }
        curr = curr.child[char]
    }
    curr.end = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this.root
    for (const char of word) {
        if (curr.child[char]) {
            curr = curr.child[char]
        } else {
            return false
        }
    }
    return curr.end
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this.root
    for (const char of prefix) {
        if (curr.child[char]) {
            curr = curr.child[char]
        } else return false
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