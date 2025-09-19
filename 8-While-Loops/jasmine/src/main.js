let juiceName = "Pineapple Strawberry";
let timeToMixJuiceResult = true;
while (timeToMixJuiceResult == true) {
    if (juiceName == "Pure Strawberry Joy"){
        timeToMixJuiceResult = 0.5;
    } else if (juiceName == "Energizer" || juiceName == "Green Garden"){
        timeToMixJuiceResult = 1.5;
    } else if (juiceName == "Tropical Island"){
        timeToMixJuiceResult = 3;
    } else if (juiceName == "All or Nothing"){
        timeToMixJuiceResult = 5;
    } else {
        timeToMixJuiceResult = 2.5;
    }
}

let wedgesNeeded = 24;
let limes = ["small","medium","large"];
let wedgesCut = 0;
let limesCut = 0;
let i = 0;
while (wedgesCut < wedgesNeeded && i < limes.length) {
    if (limes[i] == "small"){
        wedgesCut += 6;
        limesCut += 1;
        i += 1;
    } else if (limes[i] == "medium"){
        wedgesCut += 8;
        limesCut +=1;
        i += 1;
    } else if (limes[i] == "large") {
        wedgesCut += 10;
        limesCut += 1;
        i = 0;
    }
}


i = 0;
let timeLeft = 50;
let orders = ["Pure Strawberry Joy", "Energizer", "Green Garden", "Tropical Island", "All or Nothing"];
let remainingOrders = []
let totalTime = 0;
let orderTrack = []
while (timeLeft > 0) {
    if (orders[i] == "Pure Strawberry Joy"){
        timeLeft -= .5;
        i += 1;
        if (timeLeft < 0){
            remainingOrders.push("Pure Strawberry");
        }
    } else if (orders[i] == "Energizer"){
        timeLeft -= 1.5;
        i += 1;
        if (timeLeft < 0){
            remainingOrders.push("Energizer");
        }
    }else if (orders[i] == "Green Garden"){
        timeLeft -= 1.5;
        i += 1;
        if (timeLeft < 0){
            remainingOrders.push("Green Garden");
        }
    } else if (orders[i] == "Tropical Island"){
        timeLeft -= 3;
        i += 1;
        if (timeLeft < 0){
            remainingOrders.push("Tropical Island");
        }
    } else if (orders[i] == "All or Nothing"){
        timeLeft -= 5;
        i = 0;
        if (timeLeft < 0){
            remainingOrders.push("All or Nothing");
        }
    }
}

console.log(timeLeft)
console.log(remainingOrders)