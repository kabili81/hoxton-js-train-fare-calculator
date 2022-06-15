//- Ask the user for their age and how far they are travelling (in km)
 // -- The price per travelled km will be £0.21
//   -- Junior passengers (under 18) get a 20% discount
  // -- Senior passengers (over 65) get a 40% discount
//- Based on the answers, print a message in the console which tells the user how much they will need to pay for the ride.

let age = prompt('How old are you?')
//console.log(age) 

let travelling = prompt('How far you are travelling?')
//console.log(travelling)

let pricePerTravelledKm = (0.21)  
//console.log(pricePerTravelledKm * travelling)

let juniorPassengersUnder18 = 0.2
let seniorPassengerOver65 = 0.4

if (age < 18) {
     (travelling  * (0.21/1.2))
    } else if (age > 65) {
    (travelling * (0.21/1.4))
    } else {
    (travelling * pricePerTravelledKm)
    }

    console.log(`
    Age: ${age} 
    KM :${travelling}
    Junior Passenger Under 18: ${travelling  * (0.21/1.2)}
    Senior Passenger Over 65:  ${travelling * (0.21/1.4)}
    Middle Passemger 18-65: ${travelling * pricePerTravelledKm}
    `)

//if (age < 18) {
  //  console.log(travelling  * (0.21/1.2))
  //} else if (age > 65) {
    //console.log(travelling * (0.21/1.4))
  //} else {
  //  console.log(travelling * pricePerTravelledKm)
  //}
