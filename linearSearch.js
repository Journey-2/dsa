function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1
}

const arr = [1,2,3,4,5]
target = 4
const getIndex = linearSearch(arr,target);

if(getIndex!=-1){
    console.log(`Target ${target} Found at position ${getIndex}`)
}
else{
    console.log("Target Not found")
}