document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('siri-form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevents default form submission behavior

        const formData = new FormData(form);

        try {
            const response = await fetch(
                'https://script.google.com/macros/s/AKfycbwDkvlXJ5trhRBrd0A9GY24e_pnBv3lYPNXeKMBRR1wPpyhdme8m71jtdoNgUOPikfH/exec',
                {
                    method: 'POST',
                    body: formData,
                }
            );

            const responseBody = await response.json();
            console.log('Response:', responseBody);

            if (response.ok && responseBody.status === 'success') {
                window.location.href = 'thanks.html'; // Redirect to thank-you page
            } else {
                alert(`Error: ${responseBody.message || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Error during form submission:', error);
            alert('An error occurred while submitting the form. Please try again later.');
        }
    });
});
