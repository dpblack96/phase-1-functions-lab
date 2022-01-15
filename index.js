// Code your solution in this file!

function distanceFromHqInBlocks(pickup) {
    if (pickup > 42) {
        return pickup - 42
    } else if (pickup < 42){
        return 42 - pickup
    }
}

function distanceFromHqInFeet (length) {
    if (length > 42) 
        return (length - 42) * 264;
    else (length < 42)
        return (42 - length) * 264
}    

function distanceTravelledInFeet (start, destination) {
    if (start > destination)
        return (start - destination) * 264
    else (destination > start)
        return (destination - start) * 264
}

function calculatesFarePrice (start, destination) {
    let blockDistance = Math.abs(start - destination);
    let distanceTraveled = blockDistance * 264;
    if (distanceTraveled <= 400){
        console.log ('give customers a free sample');
        return 0
    }
    else if (distanceTraveled > 400 && distanceTraveled <=2000)
        return (distanceTraveled -400) * 0.02
    else if (distanceTraveled > 2000 && distanceTraveled < 2500)
        return 25
    else if (distanceTraveled >= 2500)
        return 'cannot travel that far'
}

