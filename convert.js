// 12 inch to 1 feet

function inchToFeet(inch) {
    const feet = inch / 12;
    const feetNumber = parseInt(feet);
    const inchRemaining = inch % 12;
    const result = `${feetNumber} feet and ${inchRemaining} inch`;
    return result;
}

console.log(inchToFeet(12));
