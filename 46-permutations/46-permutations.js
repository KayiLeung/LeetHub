/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length === 1){
        return [nums];
    }
    
    const permutations = [];
        
    for(let i=0; i<nums.length; i++){
        const num = nums[i];
        const nextPermutations = permute(nums.filter(n => n !== num));
        
        for(let j=0; j<nextPermutations.length; j++){
            nextPermutations[j].unshift(num);
        }
        permutations.push(...nextPermutations);
    }
    
    return permutations;
//     if (nums.length === 0) return [[]]
    
//     const firstEl = nums[0]
//     const rest = nums.slice(1)
    
//     const permsWithoutFirst = permute(rest)
//     const allPermutations = []
    
//     for (let perm of permsWithoutFirst) {
//         for (let i = 0; i < perm.length; i++) {
//             const permWithFirst = [...perm.slice(0, i), firstEl, ...perm.slice(i)]
//             allPermutations.push(permWithFirst)
//         }
//     }
//     return allPermutations
};