function ageChange(event) {
    var ageInput = event.target.value;
    var errorsHolder = document.getElementById("errors-holder");
    var submitButton = document.querySelector("button[type='submit']");

    if (ageInput === "" || parseInt(ageInput) < 5) {
        errorsHolder.textContent =
            "Please choose age or you need to be at least 5 years old to participate";
        submitButton.disabled = true;
    } else {
        errorsHolder.textContent = "";
        submitButton.disabled = false;
    }
}

function handleSubmit(event) {
    event.preventDefault();

    var ageInput = parseInt(document.getElementById("q_age").value);
    var ownsPhone = document.getElementById("q_owns_phone").checked;
    var resultHolder = document.getElementById("result-holder");

    if (ownsPhone) {
        if (ageInput < 13) {
            resultHolder.textContent = "You are too young to have a phone";
        } else {
            resultHolder.textContent = "Use your phone in moderation";
        }
    } else {
        if (ageInput < 13) {
            resultHolder.textContent = "You will get a phone soon";
        } else {
            resultHolder.textContent = "You should get a phone";
        }
    }
}
