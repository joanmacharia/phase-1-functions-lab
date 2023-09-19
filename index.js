// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation){
    const Hq = 42
    return Math.abs(pickUpLocation - Hq)
}

function distanceFromHqInFeet(pickUpLocation) {
    const distance = distanceFromHqInBlocks(pickUpLocation)
    const feet = 264
    return Math.abs(distance * feet)
}

function distanceTravelledInFeet(start, destination) {
    const feet = 264
    return  Math.abs((destination - start) * feet)
}

function calculatesFarePrice(start, destination){
    const distanceTravelled = distanceTravelledInFeet(start, destination)

    if (distanceTravelled <=400){
        return(0)

    } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
        return((distanceTravelled - 400)*0.02)

    } else if (distanceTravelled > 2000 && distanceTravelled <= 2500){
        return (25)

    } else if (distanceTravelled >2500){
        return('cannot travel that far')
    }
      

}

