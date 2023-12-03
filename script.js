function checkEligibility() {
    // Get the entered username
    var username = document.getElementById("username").value.toLowerCase();
    var password = 
document.getElementById("password").value.toLowerCase();

    // Check if the username contains "legacypanda" (case-insensitive)
    if (username.includes("legacypanda0203") && password.includes("qwerty@123456")) {
        document.getElementById("eligibilityMessage").innerText = "Placement criteria not met. Not eligible for placement.";
    } else {
        document.getElementById("eligibilityMessage").innerText = "Incorrect Credentials!";
    }
}
