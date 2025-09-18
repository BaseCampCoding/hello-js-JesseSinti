let kind = "truck";
let needsLicenseResult;
if(kind == "car" || kind == "truck"){
    needsLicenseResult = true;
} else {
    needsLicenseResult = false;
}

let option1 = 'GMC Sierra hd 2500';
let option2 = ' GMC Sierra atv'
let chooseVehicleResult;
if (option1 > option2){
    chooseVehicleResult = option1 + ' is clearly the better choice.';
} else {
    chooseVehicleResult = option2 + ' is clearly the better choice.';
}

let originalPrice = 75000;
let age = 5;
let resellPrice;
let calculateResellPriceResult = resellPrice;
if (age < 3) {
    resellPrice = originalPrice * .8;
} else if (age > 10) {
    resellPrice = originalPrice * .5;
} else {
    resellPrice = originalPrice * .7;
}
console.log(resellPrice)