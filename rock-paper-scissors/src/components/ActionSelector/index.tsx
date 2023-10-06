import { FC } from "react";
import "./action-selector.scss";
import { Action } from "../../types";
import ActionItem from "../ActionItem";

const actions: Action[] = Object.values(Action);

const ActionSelector: FC = () => {
  return (
    <section className="action-selector">
      {actions.map(action => <ActionItem key={action} action={action} />)}
    </section>
  );
};

export default ActionSelector;
