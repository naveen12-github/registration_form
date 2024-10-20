document.addEventListener('DOMContentLoaded', () => {
    const messageArea = document.getElementById('messageArea');
    const charCount = document.getElementById('charCount');
    const warning = document.getElementById('warning');
    const maxCharacters = 200;

    // Update character count and check limits
    function updateCharacterCount() {
        const currentLength = messageArea.value.length;
        charCount.textContent = `${currentLength}/${maxCharacters} characters`;

        if (currentLength > maxCharacters) {
            warning.style.display = 'block'; // Show warning
            messageArea.value = messageArea.value.substring(0, maxCharacters); // Prevent further typing
        } else {
            warning.style.display = 'none'; // Hide warning
        }
    }

    // Event listener for input in the text area
    messageArea.addEventListener('input', updateCharacterCount);
});
