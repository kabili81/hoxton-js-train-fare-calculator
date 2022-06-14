//- Ask the user for their age and how far they are travelling (in km)
 // -- The price per travelled km will be £0.21
//   -- Junior passengers (under 18) get a 20% discount
  // -- Senior passengers (over 65) get a 40% discount
//- Based on the answers, print a message in the console which tells the user how much they will need to pay for the ride.

let age = prompt('How old are you?')
console.log(age)

let travelling = prompt('How far you are travelling?')
console.log(travelling)

let pricePerTravelledKm = 0.21 
console.log(pricePerTravelledKm * travelling)
let juniorPassengersUnder18 = 0.2
let seniorPassengerOver65 = 0.4
