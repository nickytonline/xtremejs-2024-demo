const button = document.createElement("button");

Object.assign(button.style, {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  zIndex: "9999",
  padding: "10px 20px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "4rem",
  width: "400px",
  height: "200px",
});

button.textContent = "ping";

button.addEventListener("click", async () => {
  try {
    const message = button.textContent;
    const response = await chrome.runtime.sendMessage(message);
    button.textContent = response;
  } catch (error) {
    console.error("Error sending message:", error);
  }
});

document.body.appendChild(button);
