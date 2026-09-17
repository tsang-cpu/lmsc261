

const maxFrogCapacity = 15;
let numFrogs = prompt("how many frogs are trying to jump in?");
let isPondOverCapacity = numFrogs >= maxFrogCapacity; //boolean
let frogIntoPond = isPondOverCapacity ? "Its too full!" : "Come on in!"
print(frogIntoPond);