function validateForm() {
    let valid = document.forms["contactForm"]["name"]["email"]["phone"]["message"].value;
    if (valid =="") {
        alert("Fill in the required field");
        return false;
    }
}