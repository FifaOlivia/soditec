// Récupérer les éléments du DOM
const avatar = document.getElementById("chat-avatar");
const chatBox = document.getElementById("chat-box");
const avatarText = document.getElementById("avatar-text");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-message");
const chatMessages = document.getElementById("chat-messages");

// Ouvre la fenêtre de chat lorsque l'avatar est cliqué
function openChat() {
  avatar.style.display = "none"; // Cache l'avatar
  chatBox.style.display = "block"; // Affiche la fenêtre de chat
  addBotMessage("Bonjour ! Comment puis-je vous aider aujourd'hui ?");
}

// Ajouter un message du chatbot
function addBotMessage(message) {
  const botMessage = document.createElement("div");
  botMessage.classList.add("bot-msg");
  botMessage.textContent = message;
  chatMessages.appendChild(botMessage);
  chatMessages.scrollTop = chatMessages.scrollHeight; // Fait défiler jusqu'en bas
}

// Ajouter un message de l'utilisateur
function addUserMessage(message) {
  const userMessage = document.createElement("div");
  userMessage.classList.add("user-msg");
  userMessage.textContent = message;
  chatMessages.appendChild(userMessage);
  chatMessages.scrollTop = chatMessages.scrollHeight; // Fait défiler jusqu'en bas
}

// Lorsque l'utilisateur clique sur le bouton "Envoyer"
function sendMessage() {
  const userMessage = userInput.value;
  if (userMessage.trim() !== "") {
    // Afficher le message de l'utilisateur
    addUserMessage(userMessage);

    // Réponse du chatbot après un délai
    setTimeout(function () {
      addBotMessage("Vous avez dit : " + userMessage);
    }, 1000); // Délai pour simuler une réponse
  }
  userInput.value = ""; // Réinitialiser le champ de saisie
}

// Ajouter un événement pour envoyer le message en appuyant sur "Entrée"
userInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
