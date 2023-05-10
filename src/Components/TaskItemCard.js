import React, {useState} from 'react';
import TaskItemService from './TaskItemService.js';

function TaskItemCard({taskItem, listId, listName}) {
    const [expanded, setExpanded] = useState(false);
    const [completed, setCompleted] = useState(taskItem.completed || false);

    const taskItemService = new TaskItemService();
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(taskItem.title);
    const [newDescription, setNewDescription] = useState(taskItem.description);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const toggleComplete = () => {
        const updatedTaskItem = {...taskItem, completed: !completed};

        if (!completed) {
            taskItem.completionDate = new Date().toISOString();
            console.log("ENTROU AQUI NO COMPLETION DATE" + new Date().toISOString())
        }
        if (completed) {
            taskItem.completionDate = null;
        }
        console.log("CLASSE TASK_ITEM_CARD")
        console.log("Id: " + taskItem.id)
        console.log("Name: " + taskItem.title)
        console.log("Description: " + taskItem.description)
        console.log("CreatedDate: " + taskItem.createdDate)
        console.log("CompletionDate: " + taskItem.completionDate)
        console.log("updatedTaskItem.complete " + updatedTaskItem.completed)
        console.log("ListId: " + listId)
        console.log("ListName: " + listName)

        taskItemService.update(taskItem.id, taskItem.title, taskItem.description, taskItem.createdDate, taskItem.completionDate, updatedTaskItem.completed, listId, listName);
        setCompleted(!completed);
    };

    const createDateFormatted = (createdDate) => {
        const date = new Date(createdDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const formattedDate = createDateFormatted(taskItem.createdDate);

    const handleDelete = () => {
        taskItemService.delete(taskItem.id, () => {
            console.log(`TaskItem ${taskItem.id} deleted`)
        })
    }

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleCancel = () => {
        setIsEditing(false);
        setNewName(taskItem.title);
        setNewDescription(taskItem.description);
    }


    const handleSave = () => {
        taskItemService.update(taskItem.id, newName, newDescription, taskItem.createdDate, taskItem.completionDate, taskItem.isCompleted, listId, listName, () => {
            console.log(`TaskItem ${taskItem.id} updated`);
        });
        setIsEditing(false);
    };

    const handleNameChange = (event) =>{
        setNewName(event.target.value);
    };

    const handleDescriptionChange = (event) =>{
        setNewDescription(event.target.value);
    };

    if(isEditing){
        return (
            <div className="task-card">
                <input type="text" value={newName} onChange={handleNameChange}/>
                <textarea value={newDescription} onChange={handleDescriptionChange}></textarea>
                <div className="card-buttons">
                    <button onClick={handleCancel}><i className="fas fa-times"></i></button>
                    <button onClick={handleSave}><i className="fas fa-check"></i></button>
                </div>
            </div>
        )
    }

    return (
        <div className="task-card">
            <div className="task-header">
                <input type="checkbox" checked={completed} onChange={toggleComplete}/>
                <h3 className="task-title">{taskItem.title}</h3>
            </div>
            <div className={`task-details ${expanded ? 'expand' : ''}`}>
                <div className="creation-date">Data de criação: {formattedDate}</div>
                <p>{taskItem.description}</p>
                {taskItem.description.length > 122 && (
                    <button className="expand-btn" onClick={toggleExpand}>
                        {expanded ? 'Leia Menos' : 'Leia Mais'}
                    </button>
                )}
            </div>
            <div className="task-actions">
                <button onClick={handleEdit} className="edit-btn">
                    <i className="fas fa-edit"></i>
                </button>
                <button className="delete-btn" onClick={handleDelete}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
    );
}

export default TaskItemCard;
