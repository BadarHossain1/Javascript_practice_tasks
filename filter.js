let arr = [150, 600, 500,320, 100];

const filterpurchaseHistory2 = arr.filter(function(currentelement){
    return currentelement<=200;
})
console.log(filterpurchaseHistory2);


// discounted pric eusing map

const discountedPriceUsingMap = arr.map(function(currentelement){
    if(currentelement>200){
        const calculateDiscount  = currentelement - currentelement*0.5;
        return calculateDiscount;

    }
    else{
        return currentelement;
    }
})

console.log(discountedPriceUsingMap);

//splice

let array = [1,23,4,5,6,6,7,8,9];

array.splice(2,1,100,200);

// array.splice(start,deleteCount, element1, element2);
