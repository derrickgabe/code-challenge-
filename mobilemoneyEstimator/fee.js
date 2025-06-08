// Mobile Money Transaction Fee Estimator
function estimateTransactionFee() {
    // Fee settings
    const feePercent = 1.5; // 1.5%
    const minFee = 10;
    const maxFee = 70;
    
    // Get amount from user
    let amount = prompt("Enter amount to send (KES):");
    amount = parseFloat(amount);
    
    // Validate amount
    if (!amount || amount < 1) {
        console.log("Invalid amount entered");
        return;
    }
    
    // Calculate the fee
    let fee = amount * (feePercent / 100);
    
    // Apply minimum and maximum
    if (fee < minFee) {
        fee = minFee;
    } else if (fee > maxFee) {
        fee = maxFee;
    }
    
    // Show the results
    console.log("Amount: " + amount + " KES");
    console.log("Fee: " + fee.toFixed(2) + " KES");
    console.log("Total: " + (amount + fee).toFixed(2) + " KES");
}

estimateTransactionFee();