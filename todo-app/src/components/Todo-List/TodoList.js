import React, { useRef, useState, useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import './TodoList.scss';
import Task from '../Task/Task';
import Filter from '../Filter/Filter';

const TodoList = ({darkMode}) => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('All');
    const input = useRef();

    useEffect(() => {
        input.current.value = '';
        if (tasks.length === 0) {
            if (localStorage.getItem('tasks') !== null) {
                setTasks(JSON.parse(localStorage.getItem('tasks')));
            }
        } else {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }, [tasks]);

    const handleNewTask = e => {
        if (e.keyCode === 13) {
            if (e.target.value.trim() !== '') {
                const task = {
                    id: Date.now().toString(),
                    task: e.target.value,
                    completed: false
                };
                setTasks(tasks => [...tasks, task]);
            }
        }
    }
    
    const handleTaskComplete = e => {
        const task = tasks.find(task => task.id === e.target.dataset.task);
        const index = tasks.indexOf(task);
        let newTasks = [...tasks];
        newTasks[index] = {
          id: task.id,
          task: task.task,
          completed: !task.completed
        };
        setTasks(newTasks);
    }
    
    const handleDeleteTask = e => {
        const newTasks = tasks.filter(task => task.id !== e.target.dataset.task);
        if (newTasks.length === 0) {
            localStorage.removeItem('tasks');
        }
        setTasks(newTasks)
    }

    const handleFilter = e => {
        const filters = document.querySelectorAll('.filter');
        filters.forEach(filter => filter.classList.remove('active'));
        e.target.classList.add('active');
        setFilter(e.target.innerText);
    }

    const handleClearCompleted = () => {
        const filteredTasks = tasks.filter(task => task.completed === false);
        if (filteredTasks.length === 0) {
            localStorage.removeItem('tasks');
        }
        setTasks(filteredTasks);
    }

    const filteredTasks = () => {
        if (filter === 'Active') {
            return tasks.filter(task => task.completed === false);
        } else if (filter === 'Completed') {
            return tasks.filter(task => task.completed === true);
        } else if (filter === 'All') {
            return tasks;
        }
    }

    const getTasksRemaining = () => {
        const activeTasks = tasks.filter(task => task.completed === false);
        return activeTasks.length;
    }

    const tasksDisplay = filteredTasks().map((task, index) => {
        return (
            <Task key={String(task.id)} 
            darkMode={darkMode} 
            task={task} 
            index={index}
            completeTask={handleTaskComplete} 
            deleteTask={handleDeleteTask} 
            />
        );
    });

    const onDragEnd = result => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (destination.index === source.index) {
            return;
        }

        const newTasks = [...tasks];
        newTasks.splice(source.index, 1);
        const task = tasks.find(task => String(task.id) === draggableId);
        newTasks.splice(destination.index, 0, task);
        setTasks(newTasks);
    }

    return (
        <div className={darkMode === true ? 'todo-list' : 'todo-list todo-list-light'}>
            <div className='new-item'>
                <div className="circle"></div>
                <input type="text" placeholder="Create a new todo..." onKeyDown={handleNewTask} ref={input} />
            </div>
            
            <div className="tasks-container">
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId={'1'}>
                        {provided => (
                            <div className="list-container"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {tasksDisplay}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                {tasks.length === 0 ? null :
                    <div className="tasks-footer">
                        <div className="items-left">{getTasksRemaining()} items left</div>
                        <div className="filter-non-mobile-container">
                            <Filter darkMode={darkMode} handleFilter={handleFilter} />
                        </div>
                        <button className="clear" onClick={handleClearCompleted}>Clear Completed</button>
                    </div>
                }
            </div>
            {tasks.length === 0 ? null : 
                <div className="filter-mobile-container">
                    <Filter darkMode={darkMode} handleFilter={handleFilter} />
                </div>
            }
            {tasks.length === 0 ? null : <p className="dnd-text">Drag and drop to reorder list</p>}
        </div>
    );
}

export default TodoList;
