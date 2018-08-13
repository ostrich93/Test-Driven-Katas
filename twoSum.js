function twoSum(arr, target){
    const uniqueTerms = Array.from(new Set(arr));
    if (uniqueTerms.length < 2) {
        return [];
    }

    console.log('arr', arr[0] + arr[1]);

    //another method is to keep an object of seen items and use only one loop.

    for (let a=0; a < uniqueTerms.length-1; a++){
        for (let b=a+1; b < uniqueTerms.length; b++){
            if (uniqueTerms[a] + uniqueTerms[b] === target){
                return [uniqueTerms[a], uniqueTerms[b]];
            }
        }
    }

    return [];
}

module.exports = twoSum;