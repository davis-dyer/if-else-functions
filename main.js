//Define the function to buy clay. This will have the object needed to list the requirements
const buyClay = () => {
    const clayList1 = {}
    return clayList1;
}

const makePottery = (shape1) => {
    shape1.shape = 'Bowl'
    return shape1;
}

const bisqueFire = (bisque1) => {
    bisque1.readyForGlazing = true;
    return bisque1;
}

const glazePottery = (glaze1) => {
    if (glaze1.readyForGlazing === true) {
        glaze1.glazing = 'Midnight Blue'
    } else {
        'Make sure you bisque fire the pottery before you glaze it.'
    }
    return glaze1;
}

const finalFiring = (fire1, temp1) => {
    if (temp1 > 1200) {
        return fire1.cracked = true;
    } else {
        return fire1.cracked = false;
    }
}


let pottery = buyClay();
makePottery(pottery);
bisqueFire(pottery);
glazePottery(pottery);
//pottery = finalFiring(glazePottery, 1200);
finalFiring(pottery, 1200);
console.log(pottery);

