import { useState} from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'

function App() {
        const [chatMessages, setChatMessages] = useState([
          { message: "hello chatbot", sender: "user", id: "id1" },
          {
            message: "Hello! How can i help you?",
            sender: "bot",
            id: "id2",
          },
          {
            message: "can you get me todays date?",
            sender: "user",
            id: "id3",
          },
          {
            message: "Today is april 21",
            sender: "bot",
            id: "id4",
          },
        ]);
        //const [chatMessages, setChatMessages] = array;
        //const chatMessages = array [0];
        //const setChatMessages = array[1];

        return (
          <div className="app-container"> 
            <ChatMessages chatMessages={chatMessages} />
            <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }

export default App
