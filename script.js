document.getElementById("check-btn").addEventListener("click", function() {
    const inputText = document.getElementById("text-input").value;
    const resultElement = document.getElementById("result");

    if (!inputText) {
        alert("Por favor, ponga un valor.");
        return;
    }

    // Normalize input: remove non-alphanumeric characters and make lowercase
    const cleanedText = inputText.toLowerCase().replace(/[^a-z0-9]/gi, "");
    
    // Check if palindrome
    const isPalindrome = cleanedText === cleanedText.split("").reverse().join("");

    // Display result
    resultElement.textContent = isPalindrome 
        ? `${inputText} es un palindromo.` 
        : `${inputText} no es un palindromo.`;
});
