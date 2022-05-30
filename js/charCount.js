function charCount(str) {
    let filteredStr = remove_whitespace(str.split(''))
    let unsortedObj = {};
    for(let i = 0; i < filteredStr.length; i++){
        if(unsortedObj[filteredStr[i]]){
            unsortedObj[filteredStr[i]] += 1
        } else {
            unsortedObj[filteredStr[i]] = 1
        }
    }

    const unsortedMap = new Map(Object.entries(unsortedObj))
    
    let unsortedArr = [...unsortedMap]
    
    //sort by numeric
    const sortedArrNumeric = unsortedArr.sort(([key1, value1], [key2, value2]) => value2 - value1)

    //sort by alphabetical if numeric is same 
    const sortedArrAlph = sortedArrNumeric.sort(([key1, value1], [key2, value2]) => {
        if(value1 === value2) return key1.localeCompare(key2)
    })
    const sortedMap = new Map(sortedArrAlph)
    
    return sortedMap
};

function remove_whitespace(str){
    return str.filter(x => x !== ' ')
}

console.log(charCount("aaabbbc"))
console.log(charCount("an apple a day will keep the doctor away"))