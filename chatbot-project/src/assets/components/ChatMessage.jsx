import RobotProfileImage from '../assets/chatbot.png';
import UserProfileImage from '../assets/dp.png';
import './ChatMessage.css';

export function ChatMessage({ message, sender }) {
        //const message = props.message;
        //const sender = props.user;
        //const {message, sender } = props;

        /* if( sender === 'bot') {
        return(
          <div>
            <img src="chatbot.png" width ="50" />
            {message}
            </div>
        );
       }
        */

        return (
          <div
            className={
              sender === "user" ? "chat-message-user" : "chat-message-bot"
            }
          >
            {sender === "bot" && <img src={RobotProfileImage} className="profile" />}
            <div className="chat-message-text">
              {message}
            </div>
            {sender === "user" && <img src={UserProfileImage} className="profile"/>}
          </div>
        );
      }