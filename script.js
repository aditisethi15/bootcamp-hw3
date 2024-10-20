const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    const definition = document.getElementById('card-content');
    
    // Display the term or definition based on the state
    if (showingTerm) {
        definition.textContent = flashcards[currentIndex].term;
    } else {
        definition.textContent = flashcards[currentIndex].definition;
    }
}

function flip() {
    if(showingTerm){
        showingTerm = false;
    }
    else{
        showingTerm = true;
    } 
    displayCard(); 
}

function next() {
    currentIndex++;
    if(currentIndex == flashcards.length){
        currentIndex = 0;
    }
    showingTerm = true; 
    displayCard(); 
}

function previous() {
    currentIndex = currentIndex--; 
    if(currentIndex < 0){
        currentIndex = flashcards.length - 1;
    }
    showingTerm = true; 
    displayCard(); 
}

function add() {
    const new_term = document.getElementById('new-term').value;
    const new_def = document.getElementById('new-definition').value;

    flashcards[flashcards.length] = { term: new_term, definition: new_def };
    document.getElementById('new-term').value = '';
    document.getElementById('new-definition').value = '';
}


// The rest of the code you will write is apart of event listeners
document.getElementById('prev-btn').addEventListener('click', previous);
document.getElementById('next-btn').addEventListener('click', next);
document.getElementById('flashcard').addEventListener('click', flip);
document.getElementById('add-card-btn').addEventListener('click', add);

// This line will display the card when the page is refreshed
window.onload = displayCard;