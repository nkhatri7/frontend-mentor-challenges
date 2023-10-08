import { FC } from "react";
import { Action } from "../../types";
import RockIcon from "../../assets/images/icon-rock.svg";
import PaperIcon from "../../assets/images/icon-paper.svg";
import ScissorsIcon from "../../assets/images/icon-scissors.svg";
import LizardIcon from "../../assets/images/icon-lizard.svg";
import SpockIcon from "../../assets/images/icon-spock.svg";
import "./ActionItem.scss";

interface Props {
  action: Action;
  onClick?: () => void;
}

const ActionItem: FC<Props> = ({ action }) => {
  return (
    <div className="item" data-action={action}>
      <div className="item-inner">
        <img src={getActionIcon(action)} alt={action} className="item-icon" />
      </div>
    </div>
  );
};

export default ActionItem;

/**
 * Returns the appropriate icon image path for the given action.
 * @param action An action (e.g. Rock).
 * @returns The icon image path for the given action.
 */
const getActionIcon = (action: Action): string => {
  switch (action) {
    case Action.ROCK:
      return RockIcon;
    case Action.PAPER:
      return PaperIcon;
    case Action.SCISSORS:
      return ScissorsIcon;
    case Action.LIZARD:
      return LizardIcon;
    case Action.SPOCK:
      return SpockIcon;
  }
};
