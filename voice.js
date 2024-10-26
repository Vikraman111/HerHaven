const startButton = document.getElementById("start-button");
const statusDisplay = document.getElementById("status");
const repelAnimation = document.getElementById("repel-animation");

startButton.addEventListener("click", () => {
  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();

  recognition.onstart = () => {
    statusDisplay.textContent = "Status: Listening...";
    repelAnimation.style.opacity = 1; // Show the repel animation
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    console.log(transcript);

    if (transcript.includes("police")) {
      callPolice();
    }
  };

  recognition.onerror = (event) => {
    console.error("Error occurred in recognition:", event.error);
    statusDisplay.textContent = "Status: Error occurred. Try again.";
  };

  recognition.onend = () => {
    statusDisplay.textContent = "Status: Not Listening";
    repelAnimation.style.opacity = 0; // Hide the repel animation
  };

  recognition.start();
});

function callPolice() {
  const phoneNumber = "8148766397";
  const callLink = `tel:${phoneNumber}`;
  window.location.href = callLink;
}
