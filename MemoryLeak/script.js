// Pobieramy referencję do diva
let leakyDiv = document.getElementById("leakyDiv");

// Funkcja obsługująca event
function logEvent() 
{
    console.log("Div istnieje:", leakyDiv);
}

// DNasłuch zdarzeń na window
window.addEventListener("click", logEvent);


// Element znika z DOM, ale zmienna leakyDiv nadal istnieje w pamięci - 
// I TO WŁAŚNIE - TA POZOSTAŁOŚĆ ZMIENNEJ W PAMIĘCI - POWODUJE WYCIEK PAMIĘCI
function removeDiv() 
{

    if (leakyDiv) 
    {
        leakyDiv.remove();  // Usuwanie div z DOM
        //console.log("Div został usunięty, ale event listener nadal istnieje.");
        // naprawianie wycieku pamięci:
        window.removeEventListener("click", logEvent)
        leakyDiv = null;
        console.log("Div został usunięty, a wraz z nim należace do niego zmienne i eventy.");
    }
}