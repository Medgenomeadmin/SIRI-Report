document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('siri-form');
    const formContainer = document.getElementById('form-container');
    const thankYouMessage = document.getElementById('thank-you-message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Collect form data
        const formData = new FormData(form);

        // Append to Google Sheets via Apps Script Web App
        const response = await fetch(
            'https://script.google.com/macros/s/AKfycbwDkvlXJ5trhRBrd0A9GY24e_pnBv3lYPNXeKMBRR1wPpyhdme8m71jtdoNgUOPikfH/exec',
            {
                method: 'POST',
                body: formData,
            }
        );

        if (response.ok) {
            // Show thank-you message
            formContainer.classList.add('hidden');
            thankYouMessage.classList.remove('hidden');
        } else {
            alert('There was an error submitting your report. Please try again.');
        }
    });
});
