import React, { useState } from 'react';
import TaskListService from "./TaskListService.js";

function TaskListCard(props) {
    const { id, name } = props;

    console.log("TASK_LIST_CARD NAME PROPS" + props.name);

    const taskListService = new TaskListService();

    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(name);

    const handleDelete = () => {
        taskListService.delete(id, () => {
            console.log(`TaskList ${id} deleted`);
        });
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setNewName(name);
    };

    const handleSave = () => {
        taskListService.update(newName, id, () => {
            console.log(`TaskList ${id} updated`);
        });
        setIsEditing(false);
    };

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    if (isEditing) {
        return (
            <div className="task-list-card">
                <input type="text" value={newName} onChange={handleNameChange} />
                <div className="card-buttons">
                    <button onClick={handleCancel}><i className="fas fa-times"></i></button>
                    <button onClick={handleSave}><i className="fas fa-check"></i></button>
                </div>
            </div>
        );
    }

    return (
        <div className="task-list-card" onClick={() => props.onSelect(id, name)}>
            <h3>{name}</h3>
            <div className="card-buttons">
                <button onClick={handleEdit}><i className="fas fa-edit"></i></button>
                <button className="delete-taskList-btn" onClick={handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    );
}

export default TaskListCard;
