const today = new Date();

const date  = new Date('2062-10-08');
console.log(date);
console.log(date.getMonth());
console.log(date.getDate());

const specificDate = new Date(2091, 0 , 26); //month starts from 0 per index so 0 means january
console.log(specificDate);

specificDate.setMonth(10);
console.log(specificDate.toLocaleString('en-GB'));





