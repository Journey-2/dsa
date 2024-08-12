// function removeStuff(nums, val) {
//     let k = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== val) {
//             nums[k] = nums[i];
//             k++;
//         }
//     }

//     return k;    
// };

// console.log(removeStuff([1,2,3,4,5,6],3))

function removeThings(nums,val){
    let nonTarget = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=val){
            nums[nonTarget]=nums[i]
            nonTarget++
        }
    }
    
    nums.length=5
    return nums
}

let results=removeThings([1,2,3,4],3)

console.log(results)