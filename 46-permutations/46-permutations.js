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
        console.log(nextPermutations)
        permutations.push(...nextPermutations);
    }
    
    return permutations;
};