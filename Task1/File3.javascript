// JavaScript to handle voting functionality
const votes = {
    "Option 1": 0,
    "Option 2": 0,
    "Option 3": 0
};

function submitVote() {
    const form = document.getElementById('votingForm');
    const selectedOption = form.querySelector('input[name="vote"]:checked');
    
    if (!selectedOption) {
        alert('Please select an option before voting.');
        return;
    }

    const voteValue = selectedOption.value;
    votes[voteValue]++;

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `You voted for: <strong>${voteValue}</strong><br><br>`;
    
    // Display vote counts
    for (const [option, count] of Object.entries(votes)) {
        resultDiv.innerHTML += `<strong>${option}:</strong> ${count} votes<br>`;
    }

    // Reset the form
    form.reset();
}
