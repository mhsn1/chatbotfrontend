let currentTypingTimeout = null;
document.addEventListener('DOMContentLoaded', () => {
     // Flag to track if typing is in progress

    function typeText(elementId, text, typingDelay = 50) {
        // Clear any existing typing effect
        if (currentTypingTimeout) {
            clearTimeout(currentTypingTimeout);
        }
    
        const element = document.getElementById(elementId);
        element.textContent = ''; // Clear existing text
        let i = 0;
    
        function typeCharacter() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                currentTypingTimeout = setTimeout(typeCharacter, typingDelay);
            }
        }

        typeCharacter();
    }

    const emailInput = document.getElementById('emailInput');
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    emailInput.addEventListener('input', () => {
        if (emailRegex.test(emailInput.value.trim())) {
            sendButton.disabled = false; // Enable the send button for valid email
        } else {
            sendButton.disabled = true;  // Disable the send button for invalid email
        }
    });









    
// Function to send email


function sendEmail() {
    const email = emailInput.value.trim();

    if (email && emailRegex.test(email)) {
        // Email format is valid, proceed with sending email...
        // ... existing code for sending email ...
    } else {
        alert('Type your email');
        emailInput.value = '';
        sendButton.disabled = true; // Re-disable the send button
    }
}


    // Attach event listener for email input
    document.getElementById('emailInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendEmail();
        }
    });




    // Function to toggle chat window
    function toggleChat() {
        const isChatOpen = chatContainer.style.display === 'block' || getComputedStyle(chatContainer).display === 'block';
        if (isChatOpen) {
            chatContainer.style.display = 'none';
            chatIcon.style.display = 'block';
        } else {
            chatContainer.style.display = 'block';
            chatIcon.style.display = 'none';
        
            // Hide notification tab and set local storage flag when opening chat
            var notificationTab = document.querySelector(".notification-tab");
            notificationTab.style.display = 'none';
            localStorage.setItem("chatbotOpened", true);
            
            // Call typeText here to start the typing effect when the chat opens
            const typedTextElement = document.getElementById('typed-text');
            if (typedTextElement) {
                typedTextElement.textContent = ''; // Clear previous text
                typeText('typed-text', 'Welcome to Block Apex!'); // Set your message and typing speed
            }
        }
    }
    
    
    // Function to send message to the server and display response
    function sendMessage() {
        const message = messageInput.value.trim();
        if (message) {
            fetch('http://localhost:3000/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: message })
            })
            .then(response => response.json())
            .then(data => {
                displayMessage(message, 'user');
                displayMessage(data.reply, 'bot');
            })
            .catch(error => {
                console.error('Error sending message:', error);
            });

            messageInput.value = ''; // Clear input after sending
        }
    }

    
    // Function to display message in chat window
    function displayMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', sender);
        messageDiv.textContent = message;
        chatBody.appendChild(messageDiv);
    }

















    
    // Function for typing effect
    









function handleOptionClick(option) {
   const greetings = document.getElementById('greetings');
   const options = document.getElementById('options');
   const followUp = document.getElementById('follow-up');
   const chatInput = document.getElementById('chat-input');

   greetings.classList.add('chat-hidden');
   options.classList.add('chat-hidden');
   followUp.classList.remove('chat-hidden');
   chatInput.classList.remove('chat-hidden');

   if (option === 'audit') {
    typeText('follow-up', "At BlockApex, we specialize in comprehensive DApp security, which includes a meticulous assessment of both on-chain and off-chain components. Our DApp security services encompass: ");
} else if (option === 'browse') {
    typeText('follow-up', "BlockApex offers Tokenomics design services with a multidisciplinary team that includes a token economy designer, financial analyst, and a mathematician. The typical project duration is between 3-4 weeks. The cost depends on the nature of your project and its scope. For a specific quotation, you are encouraged to reach out to BlockApex directly.");
} else if (option === 'smartcontract') {
    typeText('follow-up', "The duration of a smart contract audit typically varies between 1 to 3 weeks on average. This time frame depends on the complexity of the code, the nature of your project, and the depth of the contracts involved. This efficient timeline allows for effective planning and execution of your projects without significant delays.");
} else if (option === 'development') {
    typeText('follow-up', "For a basic and fully functional minimum viable protocol (MVP) for your community and investors, it typically takes about 2-3 months. At BlockApex, we focus on quality, security, and efficiency. However, depending on the vast scope of your project, this timeline could extend up to 12 months. To get a precise estimate for your project's timeline, please contact our team, and we'll be delighted to discuss your Protocol Market fit");
}
}












const chatIcon = document.getElementById('chat-icon');
    const chatContainer = document.getElementById('chat-container');
    const closeButton = document.getElementById('close-btn');
    const sendButton = document.getElementById('send-button');
    const messageInput = document.querySelector('#chat-input input');
    const chatBody = document.getElementById('chat-body');

 // Event listeners
 
 chatIcon.addEventListener('click', toggleChat);
 closeButton.addEventListener('click', toggleChat);
 sendButton.addEventListener('click', sendMessage);
 messageInput.addEventListener('keypress', (e) => {
     if (e.key === 'Enter') {
         sendMessage();
     }
 });

 // Attach click handlers to options
 document.querySelectorAll('.quick-reply-btn').forEach(button => {
     button.addEventListener('click', () => handleOptionClick(button.getAttribute('data-topic')));
 });

 document.querySelectorAll('.quick-reply-btn').forEach(button => {
    button.addEventListener('click', () => handleOptionClick(button.getAttribute('data-topic')));
    
});


});
document.addEventListener("DOMContentLoaded", function() {
    var notificationTab = document.querySelector(".notification-tab");
    var chatbotOpened = localStorage.getItem("chatbotOpened");

    // Show the notification tab only if chatbot hasn't been opened before
    if (!chatbotOpened) {
        notificationTab.style.display = 'block';
    }

    // Event listener for chatbot icon click
    document.getElementById("chatbotIcon").addEventListener("click", function() {
        // Hide the notification tab and remember that the chatbot has been opened
        notificationTab.style.display = 'none';
        localStorage.setItem("chatbotOpened", true);
    });
});


































