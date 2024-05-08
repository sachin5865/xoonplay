function submitForm() {
    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const card = document.getElementById('card').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const zipcode = document.getElementById('zipcode').value;

    // Validate form fields (you can add more specific validation logic)
    if (!name || !email || !phone || !card || !expiry || !cvv || !address || !city || !zipcode) {
        alert('Please fill in all fields');
        return;
    }

    // Assuming a successful submission (you might want to send this data to a server instead)
    alert('Form submitted successfully');

    // Reset form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('card').value = '';
    document.getElementById('expiry').value = '';
    document.getElementById('cvv').value = '';
    document.getElementById('address').value = '';
    document.getElementById('city').value = '';
    document.getElementById('zipcode').value = '';
}
