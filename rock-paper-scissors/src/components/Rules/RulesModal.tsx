import { FC } from "react";
import RulesGraphic from "../../assets/images/image-rules-bonus.svg";
import "./RulesModal.scss";

interface Props {
  onClose: () => void;
}

const RulesModal: FC<Props> = ({ onClose }) => {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="rules-modal" onClick={(e) => e.stopPropagation()}>
        <div className="rules-modal-header">
          <p className="rules-modal-heading">RULES</p>
          <button
            className="rules-modal-close-btn rules-modal-close-btn-large"
            aria-label="Close modal"
            onClick={onClose}
          >
            <span className="hidden">CLOSE</span>
          </button>
        </div>
        <img
          src={RulesGraphic}
          alt="Rock Paper Scissors Lizard Spock rules"
          className="rules-graphic"
        />
        <button
          className="rules-modal-close-btn rules-modal-close-btn-small"
          aria-label="Close modal"
          onClick={onClose}
        >
          <span className="hidden">CLOSE</span>
        </button>
      </div>
    </div>
  );
};

export default RulesModal;
