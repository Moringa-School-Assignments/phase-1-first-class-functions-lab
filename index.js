// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
    return [array[0], array[1]];
}
const returnLastTwoDrivers = (array) => {
    let length = array.length - 1;
    return [array[length-1], array[length]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(arg){
    return () => arg * arg;
}

function fareDoubler(fare){
    let payFare = createFareMultiplier(fare);
    // payFare * 2;
    payFare = fare * 2;
    return payFare;
}
function fareTripler(fare){
    let payFare = createFareMultiplier(fare);
    // payFare * 2;
    payFare = fare * 3;
    return payFare;
}
function selectDifferentDrivers(arrayOfDrivers, fn){
    return fn(arrayOfDrivers);
}