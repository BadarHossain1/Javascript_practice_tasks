const numbs = [23,56,75,23,56,65];

function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item)==false){
            unique.push(item);
        }

    }
    return unique;
}

const unique = noDuplicate(numbs);
console.log(unique);