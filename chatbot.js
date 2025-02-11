document.addEventListener("DOMContentLoaded", function () {
    const chatToggle = document.getElementById("chat-toggle");
    const chatContainer = document.querySelector(".chatbot-container");
    const chatBody = document.getElementById("chat-body");
    const closeChat = document.getElementById("close-chat");
    const queryButtons = document.querySelectorAll(".query-btn");

    if (chatToggle) {
        chatToggle.addEventListener("click", function () {
            chatContainer.style.display = "block";
            chatToggle.style.display = "none";
        });
    }
   
    if (closeChat) {
        closeChat.addEventListener("click", function () {
            chatContainer.style.display = "none";
            chatToggle.style.display = "block";
        });
    }

    if (queryButtons) {
        queryButtons.forEach(button => {
            button.addEventListener("click", function () {
                const query = this.dataset.query;
                handleQuery(query);
            });
        });            
    }

    function handleQuery(query) {
        let response = "";
        switch (query) {
            case "orders":
                response = "You can track your orders in the 'My Orders' section of your account.";
                break;
            case "shipping":
                response = "Shipping takes 3-5 business days. You can check shipping status in your account.";
                break;
            case "support":
                response = "For support, contact us at support@ecommerce.com or call +123456789.";
                break;
            default:
                response = "I'm not sure about that. Please contact our support.";
        }

        appendMessage("user", query.charAt(0).toUpperCase() + query.slice(1));
        setTimeout(() => {
            appendMessage("bot", response);
        }, 500);
    }

    function appendMessage(sender, text) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
        messageDiv.textContent = text;
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }
});
