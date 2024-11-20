document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('siri-form');
    const formContainer = document.getElementById('form-container');
    const thankYouMessage = document.getElementById('thank-you-message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevents form from submitting the default way

        // Collect form data
        const formData = new FormData(form);

        try {
            // Send the form data to Google Apps Script Web App
            const response = await fetch(
                'https://script.google.com/macros/s/AKfycbwDkvlXJ5trhRBrd0A9GY24e_pnBv3lYPNXeKMBRR1wPpyhdme8m71jtdoNgUOPikfH/exec',
                {
                    method: 'POST',
                    body: formData,
                }
            );

            // Log response details for debugging
            const responseBody = await response.json();
            console.log('Response:', responseBody);

            if (response.ok && responseBody.status === 'success') {
                // Hide form and show thank-you message if submission is successful
                formContainer.style.display = 'none';  // Hide the form
                thankYouMessage.style.display = 'block';  // Show the thank-you message
            } else {
                // Log the error if the response indicates failure
                alert(`Error: ${responseBody.message || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Error during form submission:', error);
            alert('An error occurred while submitting the form. Please try again later.');
        }
    });
});
