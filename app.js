// The function that runs when the button is clicked
function getDogFact() {
    // 1. Fetch the data from the API
    fetch('http://dog-api.kinduff.com/api/facts')
        .then(response => {
            // 2. Convert the response into a JavaScript object (JSON)
            return response.json();
        })
        .then(data => {
            // 3. The data has a 'facts' array. We take the first fact.
            const dogFact = data.facts[0];
            
            // 4. Find the paragraph element on the page
            const factElement = document.getElementById('fact-display');
            
            // 5. Update the text of the paragraph with the dog fact
            factElement.textContent = dogFact;
        })
        .catch(error => {
            // If anything goes wrong (like a network issue), log the error
            console.error('Error fetching the dog fact:', error);
            document.getElementById('fact-display').textContent = 'Sorry, could not fetch a fact right now. 😔';
        });
}

// Optional: Display a fact when the page first loads
getDogFact();