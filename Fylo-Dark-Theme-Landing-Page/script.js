window.onload = function() {
    const form = document.getElementById('sign-up-form');
    
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.getElementById('email-input').value;
        const errorMessage = document.getElementById('error-message');
        
        if (email.trim() === "") {
            errorMessage.innerText = "Oops! Looks like you didn't enter anything.";
        } else {
            errorMessage.innerText = '';
        }
    });
}