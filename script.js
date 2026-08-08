// Registration ending date and time
const countdownDate = new Date("August 12, 2026 23:59:59").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = countdownDate - now;

    // If countdown is finished
    if (distance <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }

    // Calculate time
    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (distance / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (distance / 1000) % 60
    );

    // Display countdown
    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

// Update immediately
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);



    // Display
  console.log("Script Loaded");

emailjs.init({
    publicKey: "_9TjqOpCJGLKlgMnx",
});

const form = document.getElementById("myForm");
const msg = document.getElementById("message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const params = {
        teamName: document.getElementById("teamName").value,
        leaderName: document.getElementById("leaderName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        teamSize: document.getElementById("teamSize").value,
        college: document.getElementById("college").value,
        domain: document.getElementById("domain").value,
        members: document.getElementById("members").value,

        message: "New Hackathon Registration"
    };

    console.log("Form Data:", params);

   emailjs.send(
    "service_bbwe12m",
    "template_839ezoo",
    params
)
.then(function () {

    // User ko confirmation email
    return emailjs.send(
        "service_bbwe12m",
        "template_g3gin0m",
        params
    );

})
.then(function () {

    msg.textContent =
        "🎉 Congratulations! Your registration has been submitted successfully.";

    msg.style.color = "green";

    form.reset();

})
    .catch(function (error) {

        console.log("EmailJS Error:", error);

        msg.textContent =
            "❌ Email Sending Failed!";

        msg.style.color = "red";

    });
});