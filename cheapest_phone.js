// You can have object inside an array and also you can have array inside an array. pretty cool right?




const smartphones = [
    {
        brand: "Apple",
        model: "iPhone 12",
        storage: "128GB",
        color: "Blue",
        price: 999
    },
    {
        brand: "Samsung",
        model: "Galaxy S21",
        storage: "256GB",
        color: "Phantom Black",
        price: 1099
    },
    {
        brand: "Google",
        model: "Pixel 5",
        storage: "128GB",
        color: "Just Black",
        price: 699
    },
    {
        brand: "OnePlus",
        model: "9 Pro",
        storage: "256GB",
        color: "Morning Mist",
        price: 1069
    },
    {
        brand: "Xiaomi",
        model: "Mi 11",
        storage: "128GB",
        color: "Midnight Gray",
        price: 799
    }
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(const phone of phones){
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const cheapest = cheapestPhone(smartphones);    

console.log(cheapest);