const priceOfIcecream = 40;
let paymentRecieved = prompt("How much money do you have?");
let isPaymenEnough = paymentRecieved >= priceOfIcecream;

if (isPaymenEnough){
    print("Thanks! Enjoy the Ice cream!")
    print("your change is: " + (paymentRecieved - priceOfIcecream) + " dollars!");
} else {
    print("Not enough cash!")
}