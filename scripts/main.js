const statusButton = document.querySelector("#status-button");
const statusText = document.querySelector("#status-text");

if (statusButton && statusText) {
  statusButton.addEventListener("click", () => {
    statusText.textContent = "JavaScript loaded and running.";
  });
}
