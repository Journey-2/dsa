function binarySearch(arr,target){
    let start = 0
    let end = arr.length-1

    while(start<=end){
        let mid = Math.floor((start+end)/2)

        if(arr[mid]===target){
            return mid
        }
        else if(arr[mid]<target){
            let start = mid + 1
        }
        else{
            let end = mid - 1
        }
    }
    return -1
}

console.log(binarySearch([1,3,5,7,9],5))