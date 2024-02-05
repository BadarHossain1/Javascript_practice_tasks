// Task-1

function addNumbers(a,b,c,d){
    return a +b+c+d;

}

// console.log(addNumbers(1,2,3,4));


// Task-4

function binaryString(arr){
    let count = 0;
    for(const item of arr){
        if(item == 0){
            count++;
        }
        else{
            continue;
        }
    }
    return count;
}

const arr = '10010010100';
// console.log(binaryString(arr));

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
     console.log(i);
  }, 100);
}  