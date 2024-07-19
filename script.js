function getFormvalue() {
    // Get the values from the form inputs
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    
    // Display the values using alert
    alert(`${firstName} ${lastName}`);
}
