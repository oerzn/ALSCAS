document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById("newsletterForm");

    if (!form) return; // Prevent errors if the form isn't present

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page reload

        let emailInput = document.getElementById("newsletter1");
        let email = emailInput.value.trim();
        let responseMessage = document.getElementById("responseMessage");

        if (!validateEmail(email)) {
            responseMessage.innerHTML = "<span style='color: red;'>Please enter a valid email address.</span>";
            return;
        }

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "subscribe.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    responseMessage.innerHTML = "<span style='color: green;'>" + xhr.responseText + "</span>";
                    emailInput.value = ""; // Clear input
                } else {
                    responseMessage.innerHTML = "<span style='color: red;'>Subscription failed. Try again.</span>";
                }
            }
        };

        xhr.send("email=" + encodeURIComponent(email));
    });

    function validateEmail(email) {
        let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
});
