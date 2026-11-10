import heartImg from "../../../images/heart.png";
import { SUCCESS_MESSAGES } from "../../data/messages";

export function SuccessScreen({ onHeartClick }) {
  return (
    <div className="success-container">
      <div className="message-container" onClick={onHeartClick}>
       <div className="message-text">{SUCCESS_MESSAGES.completed}</div>
        <div className="complete-heart">
          <img src={heartImg} alt="complete-heart" className="complete-heart-image" draggable={false} />
        </div>
        <div className="message-text">{SUCCESS_MESSAGES.instruction}</div>
        <div className="message-para puzzle-hint">💡{SUCCESS_MESSAGES.cta}</div>
      </div>
    </div>
  );
}
