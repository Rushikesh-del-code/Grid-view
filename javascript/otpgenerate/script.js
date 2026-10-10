
const otpInputs = document.querySelectorAll(".otp-inputs input");
const otpForm = document.getElementById("otp-form");

otpInputs.forEach((input, index) => {
    input.addEventListener("input", function () {
        this.value = this.value.slice(-1);

        if (this.value !== "" && index < otpInputs.length - 1) {
            otpInputs[index + 1].disabled = false;
            otpInputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", function (event) {
        if (event.key === "Backspace" && this.value === "" && index > 0) {
            otpInputs[index - 1].focus();
        }
    });
});

otpForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let otp = "";

    otpInputs.forEach(input => {
        otp += input.value;
    });

    if (otp.length === 5) {
        alert("OTP entered successfully: " + otp);
    } else {
        alert("Please enter all 5 digits.");
    }
});

