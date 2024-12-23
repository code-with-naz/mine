
    function sendMessage() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.querySelector("textarea").value;

        if (name && email && message) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "https://your-backend-url.com/send-email", true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = JSON.stringify({
                "name": name,
                "email": email,
                "message": message
            });

            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        alert("Thanks for your message!!");
                    } else {
                        alert("Sorry, there was an error sending your message. Please try again.");
                    }
                }
            };

            xhr.send(data);
        } else {
            alert("Please fill in all fields.");
        }
    }