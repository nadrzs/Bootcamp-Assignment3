function isAritmaticProgession(numbers) {
    let result

    for(let i = 0; i < numbers.length - 1; i++) {
        if(numbers[i + 1] - numbers[i] === numbers[0]) {
            result = true
        }
        else {
            result = false
        }
    }

    return result
}

console.log(isAritmaticProgession([1, 2, 3, 4, 5, 6]))
console.log(isAritmaticProgession([2, 4, 6, 12, 24]))
console.log(isAritmaticProgession([2, 4, 6, 8]))
console.log(isAritmaticProgession([2, 6, 18, 54]))
console.log(isAritmaticProgession([1, 2, 3, 4, 7, 9]))