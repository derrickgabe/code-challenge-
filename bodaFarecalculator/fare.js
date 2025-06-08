// Boda Fare Calculator
function calculateBodaFare() {
    // Set the prices
    const basePrice = 50;
    const perKm = 15;
    
    // Get distance from user
    let distance = prompt("Enter distance in kilometers:");
    distance = Number(distance);
    
    // Check if distance is valid
    if (!distance || distance <= 0) {
        alert("Invalid distance entered!");
        return;
    }
    
    // Calculate total price
    const totalPrice = basePrice + (distance * perKm);
    
    // Print the receipt
    console.log("Boda Fare Calculation:");
    console.log("Base fare: " + basePrice + " KES");
    console.log(distance + " km @ " + perKm + "/km: " + (distance * perKm) + " KES");
    console.log("TOTAL: " + totalPrice + " KES");
}

calculateBodaFare();