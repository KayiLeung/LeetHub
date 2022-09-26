/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
	var findAnagrams = function (s, p) {

// 		const arr = [];
// 		const obj = {};

// 		for (let i of p) {
// 			obj[i] ? obj[i] += 1 : obj[i] = 1;
// 		}

// 		let left = 0;
// 		let right = 0;
// 		let count = p.length;

// 		while (right < s.length) {
// 			if (obj[s[right]] > 0) count--;

// 			obj[s[right]]--;
// 			right++;

// 			if (count === 0) arr.push(left);

// 			if (right - left == p.length) {

// 				if (obj[s[left]] >= 0) count++;

// 				obj[s[left]]++;
// 				left++;
// 			}
// 		}
// 		return arr;
        const res = []
        const chars = {}
        for (let char of p) {
            if(!(char in chars)) chars[char] = 0
            chars[char] += 1
        }
        let left = 0
        let right = 0
        let count = p.length
        
        while (right < s.length) {
            const char = s[right]
            if (chars[char] > 0) count--
            chars[char]--
            right++
            if (count === 0) res.push(left)
            if (right - left === p.length) {
                const ch = s[left]
                if (chars[ch] >= 0) count++
                chars[ch]++
                left++
            }
        }
        return res
        
	};