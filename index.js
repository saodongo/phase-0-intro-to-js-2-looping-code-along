// Log ages from 30 to 39
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

// Array of gifts
const gifts = ["teddy bear", "drone", "doll"];

// Function to wrap gifts
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

// Call the wrapGifts function
wrapGifts(gifts);

// Function to write thank you cards
function writeCards(names, eventName) {
    const thankYouMessages = []; // Step 1: Create an empty array to hold the messages
    
    for (let i = 0; i < names.length; i++) { // Step 2: Iterate over the names array
        const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`; // Step 3: Create the message using string interpolation
        thankYouMessages.push(message); // Step 4: Add the message to the thankYouMessages array
    }
    
    return thankYouMessages; // Step 5: Return the array of messages
}

// Example usage of writeCards
const names = ["Alice", "Bob", "Charlie"];
const eventName = "birthday";
const messages = writeCards(names, eventName);
console.log(messages);

// Function to count down from a given number
function countDown(num) {
    while (num >= 0) {
        console.log(num); // Log the current number
        num--; // Decrement the number by 1
    }
}

// Example usage of countDown
countDown(10);
