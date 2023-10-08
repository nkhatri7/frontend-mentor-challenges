import { FC } from "react";
import "./RulesButton.scss";

interface Props {
  onClick: () => void;
}

const RulesButton: FC<Props> = ({ onClick }) => {
  return <button className="rules-btn" onClick={onClick}>RULES</button>;
};

export default RulesButton;
