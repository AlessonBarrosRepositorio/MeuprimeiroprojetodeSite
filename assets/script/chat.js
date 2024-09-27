const chatBody = document.querySelector(".chatBody");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");

txtInput.addEventListener("keyup", (event) => {
    if (event.KeyCode === 13) {
        renderUserMessage();
    }
});

send.addEventListener("click", () => renderUserMessage());
const renderUserMessage = ()=> {
    const userInput = txtInput.value;
    renderMessageElement(userInput, "user");
    txtInput.value ="";
    setTimeout(()=>{
        renderChatBotResponse(userInput);
            setScrollPosition();

    }, 600);
};
const renderChatBotResponse = (userInput) => {
    const res = getChatBotResponse(userInput);
    renderMessageElement(res);
};
const renderMessageElement = (txt, type)=> {
        let className = "user-message";
        if(type !== "user"){
            className = "chatbot-message";
        }
    const messageElement =document.createElement("div");
    const txtNode = document.createTextNode(txt);
    messageElement.classList.add(className);
    messageElement.append(txtNode);
    chatBody.append(messageElement);
};
const getChatBotResponse = (userInput) => {
    return responseObj[userInput]== undefined?"desculpa não entendi tente de novo":responseObj[userInput];
};
const setScrollPosition = () =>{
    if(chatBody.scrollHeight > 0){
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}