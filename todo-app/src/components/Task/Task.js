import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Task.scss';

const Task = ({darkMode, task, index, completeTask, deleteTask}) => {

    return (
        <Draggable draggableId={String(task.id)} index={index}>
            {provided => (
                <div className={darkMode === true ? 'task-container' : 'task-container task-container-light'}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <div className="check-container" data-task={task.id} onClick={completeTask}>
                        <div className={task.completed === false ? 'checkbox' : 'checkbox checked'} data-task={task.id}></div>
                        <p className={task.completed === false ? 'task' : 'task task-completed'} data-task={task.id}>{task.task}</p>
                    </div>
                    <button className="delete-task" data-task={task.id} onClick={deleteTask}>
                        <span className="hidden">DELETE</span>
                    </button>
                </div>
            )}
        </Draggable>
        
    );
}

export default Task;
