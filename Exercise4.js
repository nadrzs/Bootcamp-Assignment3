function maxSubArray(arr) {
    let size = arr.length
    let maxSoFar = arr[0]
    let maxEndingHere = arr[0]
    let start = 0
    let end = 0
    let temp = 0
   
    for (let i = 1; i < size; i++) {
       maxEndingHere = Math.max(arr[i], maxEndingHere + a[i])
   
       if (maxSoFar < maxEndingHere) {
         maxSoFar = maxEndingHere
         start = temp
         end = i
       }
   
       if (maxEndingHere < 0) {
         maxEndingHere = 0
         temp = i + 1
       }
    }
   
    return [arr.slice(start, end + 1), maxSoFar]
   }
   
   let a = [-2, -3, 4, -1, -2, 1, 5, -3]
   let result = maxSubArray(a)
   
   console.log(result)