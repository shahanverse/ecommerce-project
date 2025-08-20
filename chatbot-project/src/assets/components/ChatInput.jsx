import { useState, } from 'react'
import {chatbot} from'supersimpledev';
import './ChatInput.css';
 export function ChatInput({ chatMessages, setChatMessages }) {
        const [inputText, setInputText] = useState("");

        function saveInputText(event) {
          setInputText(event.target.value);
        }

        function sendMessage() {
          const newChatMessages = [
            ...chatMessages,
            {
              message: inputText,
              sender: "user",
              id: crypto.randomUUID(),
            },
          ];
          setChatMessages(newChatMessages);

          const response = chatbot.getResponse(inputText);
          setChatMessages([
            ...newChatMessages,
            {
              message: response,
              sender: "bot",
              id: crypto.randomUUID(),
            },
          ]);

          setInputText("");
        }

        return (
          <div className="chat-input-container">
            <input
              placeholder="sent a message to chatbot"
              size="30"
              onChange={saveInputText}
              value={inputText}
              className="chat-input"
            />
            <button onClick={sendMessage} className="send-button">
              Send
            </button>
          </div>
        );
      }

     