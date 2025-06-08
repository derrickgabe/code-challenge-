// Chai Calculator
function calculateChaiIngredients() {
    // Ask how many cups needed
    let numCups = prompt("How many cups of chai to make?");
    numCups = parseFloat(numCups);

    // Check if input is good
    if (isNaN(numCups) || numCups <= 0) {
        console.log("Please enter a valid number");
        return;
    }

    // Calculate everything
    const waterMl = numCups * 200;
    const milkMl = numCups * 50;
    const teaTbsp = numCups;
    const sugarTsp = numCups * 2;

    // Show the results
    console.log("For " + numCups + " cups of chai:");
    console.log("- Water: " + waterMl + " ml");
    console.log("- Milk: " + milkMl + " ml");
    console.log("- Tea Leaves: " + teaTbsp + " tbsp");
    console.log("- Sugar: " + sugarTsp + " tsp");
    console.log("Enjoy your chai!");
}

// Run my function
calculateChaiIngredients();