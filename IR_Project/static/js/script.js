const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const chatContainer = document.querySelector(".chat-container");
const themeButton = document.querySelector("#theme-btn");
const deleteButton = document.querySelector("#delete-btn");

const loadDataFromLocalstorage = () => {
    // Load saved chats and theme from local storage and apply/add on the page
    const themeColor = localStorage.getItem("themeColor");

    document.body.classList.toggle("light-mode", themeColor === "light_mode");
    themeButton.innerText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";

    const defaultText = `<div class="default-text">
                            <h1>FinanceGPT</h1>
                            <p>Start a conversation and explore the power of our model.<br> Your chat history will be displayed here.</p>
                        </div>`

    chatContainer.innerHTML = localStorage.getItem("all-chats") || defaultText;
    chatContainer.scrollTo(0, chatContainer.scrollHeight); // Scroll to bottom of the chat container
}

const createChatElement = (content, className) => {
    const chatDiv = document.createElement("div");
    chatDiv.classList.add("chat", className);
    chatDiv.innerHTML = content;
    return chatDiv;
}

const handleOutgoingChat = () => {
    const userText = chatInput.value.trim();

    if (!userText) return;

    chatInput.value = "";
    chatInput.style.height = `${initialInputHeight}px`;

    const url = `http://localhost:8001/chat/${encodeURIComponent(userText)}/`;

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error("Network response was not ok");
            }
        })
        .then(data => {
            // Display the output generated from the backend in the chat container
            const outgoingHtml = `<div class="chat-content" style="background-color:#000000">
                            <div class="chat-details">
                                <img src="https://cdn-icons-png.flaticon.com/512/564/564398.png" alt="user-img" style="border-radius:23px">
                                <p>${data}</p>
                            </div>
                        </div>`;
            const ingoingHtml = `<div class="chat-content">
                                    <div class="chat-details">
                                        <img src="https://www.escapemotions.com/images/mainpage/images/blog_posts_bg/landing-page_blog_93303113643.jpg" alt="user-img" style="border-radius:23px">
                                        <p>${userText}</p>
                                    </div>
                                </div>`;
            const ingoingChatDiv = createChatElement(ingoingHtml, "outgoing");
            const outgoingChatDiv = createChatElement(outgoingHtml, "outgoing");
            chatContainer.querySelector(".default-text")?.remove();
            chatContainer.appendChild(ingoingChatDiv);
            chatContainer.appendChild(outgoingChatDiv);
            chatContainer.scrollTo(0, chatContainer.scrollHeight);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
};

deleteButton.addEventListener("click", () => {
    // Remove the chats from local storage and call loadDataFromLocalstorage function
    if(confirm("Are you sure you want to delete all the chats?")) {
        localStorage.removeItem("all-chats");
        loadDataFromLocalstorage();
    }
});

themeButton.addEventListener("click", () => {
    // Toggle body's class for the theme mode and save the updated theme to the local storage 
    document.body.classList.toggle("light-mode");
    localStorage.setItem("themeColor", themeButton.innerText);
    themeButton.innerText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";
});

const initialInputHeight = chatInput.scrollHeight;

chatInput.addEventListener("input", () => {   
    // Adjust the height of the input field dynamically based on its content
    chatInput.style.height =  `${initialInputHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If the Enter key is pressed without Shift and the window width is larger 
    // than 800 pixels, handle the outgoing chat
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleOutgoingChat();
    }
});


loadDataFromLocalstorage();
sendButton.addEventListener("click", handleOutgoingChat);


console.log((chatInput.value));