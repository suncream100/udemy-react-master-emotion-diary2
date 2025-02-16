import "./EmotionItem.css";
import { getEmotionImage } from "../util/get-emotion-image";

const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <div
      className={`EmotionItem ${
        isSelected ? `EmotionItem_on_${emotionId}` : ""
      }`}
      onClick={onClick}
    >
      <img
        src={getEmotionImage(emotionId)}
        className="emotion_img"
        alt={emotionName}
      />
      <div className="emotion_text">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
