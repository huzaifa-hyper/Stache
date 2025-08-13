document.addEventListener('DOMContentLoaded', function() {

    // --- Contract Address Copy Functionality ---
    const copyButton = document.getElementById('copyButton');
    const contractAddress = document.getElementById('contractAddress');

    if (copyButton && contractAddress) {
        copyButton.addEventListener('click', function() {
            navigator.clipboard.writeText(contractAddress.innerText).then(function() {
                // Visual feedback for user
                copyButton.innerText = 'COPIED!';
                setTimeout(() => {
                    copyButton.innerText = 'Copy Address';
                }, 2000); // Reset button text after 2 seconds
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    }

});