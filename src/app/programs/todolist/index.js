import React, { useState } from 'react';
import './todolist.scss'
import { MdDelete } from "react-icons/md";

export default function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const removeTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const toggleTask = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };
    return (
        <div className="todo">
            <div className='container'>
                <div className="todo-container">
                    <h1>To Do List</h1>
                    <div className="todo-form">
                        <input
                            type="text"
                            placeholder="Add new task"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                        />
                        <div className="add-button">
                            <button onClick={addTask}>Add Task</button>
                        </div>
                    </div>
                    <ul className="task-list">
                        {tasks.map(task => (
                            <li key={task.id} className={task.completed ? 'completed' : ''}>
                                <span onClick={() => toggleTask(task.id)}>{task.text}</span>
                                <button onClick={() => removeTask(task.id)}><MdDelete className='delete-icon' /></button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
