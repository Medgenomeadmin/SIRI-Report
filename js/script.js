document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('siri-form');
    const formContainer = document.getElementById('form-container');
    const thankYouMessage = document.getElementById('thank-you-message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Collect form data
        const formData = new FormData(form);

        try {
            // Send form data to the Google Apps Script endpoint
            const response = await fetch(
                'https://script.google.com/macros/s/AKfycbwDkvlXJ5trhRBrd0A9GY24e_pnBv3lYPNXeKMBRR1wPpyhdme8m71jtdoNgUOPikfH/exec',
                {
                    method: 'POST',
                    body: formData,
                }
            );

            const responseBody = await response.json(); // Parse the JSON response

            if (response.ok && responseBody.status === 'success') {
                // If submission is successful, hide the form and show the thank-you message
                formContainer.classList.add('hidden'); // Hide the form
                thankYouMessage.classList.remove('hidden'); // Show thank-you message
            } else {
                // Handle errors from the Apps Script
                alert(`Submission failed: ${responseBody.message || 'Unknown error occurred'}`);
            }
        } catch (error) {
            console.error('Error during form submission:', error);
            alert('An error occurred while submitting the form. Please try again later.');
        }
    });
});
