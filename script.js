document.getElementById("check-btn").addEventListener("click", function() {
    const inputText = document.getElementById("text-input").value;
    const resultElement = document.getElementById("result");

    if (!inputText) {
        alert("Please input a value.");
        return;
    }

    // Normalize input: remove non-alphanumeric characters and make lowercase
    const cleanedText = inputText.toLowerCase().replace(/[^a-z0-9]/gi, "");
    
    // Check if palindrome
    const isPalindrome = cleanedText === cleanedText.split("").reverse().join("");

    // Display result
    resultElement.textContent = isPalindrome 
        ? `${inputText} is a palindrome.` 
        : `${inputText} is not a palindrome.`;
});