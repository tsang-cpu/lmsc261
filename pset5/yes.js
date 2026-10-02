function cakeDivision(numAttendee){
    let cakeInRadian = Math.PI * 2;
    

    if(numAttendee === 0) {return cakeInRadian }

    return cakeInRadian / numAttendee;
}

let angle = cakeDivision(0)
print(angle)