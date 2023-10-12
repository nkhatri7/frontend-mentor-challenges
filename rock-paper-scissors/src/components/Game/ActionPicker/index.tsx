import { FC } from "react";
import { Action } from "../../../types";
import { useGameData } from "../../../context/GameContext";
import ActionItem from "../ActionItem";
import "./ActionPicker.scss";

const actions: Action[] = Object.values(Action);

const ActionPicker: FC = () => {
  const { setUserAction } = useGameData();

  return (
    <section className="action-selector">
      {actions.map(action => (
        <ActionItem
          key={action}
          action={action}
          onClick={() => setUserAction(action)}
        />
      ))}
    </section>
  );
};

export default ActionPicker;
