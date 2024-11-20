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

            if (response.ok) {
                // Hide form and show thank-you message if submission is successful
                formContainer.style.display = 'none';  // Hide the form
                thankYouMessage.style.display = 'block';  // Show the thank-you message
            } else {
                alert('There was an error submitting your report. Please try again.');
            }
        } catch (error) {
            alert('An error occurred: ' + error.message);
        }
    });
});
