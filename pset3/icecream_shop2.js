const conesSoldPerHour = 5;
const inventroy = 100
for(let hour = 1; hour <= 12; hour++){
 print(conesSoldPerHour * hour + " sold at hour " + hour);
 print("Inventory left:" + (inventroy - conesSoldPerHour * hour));
 
}