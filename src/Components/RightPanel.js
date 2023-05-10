import React, {useState} from 'react';
import AddTaskItem from "./AddTaskItem.js";
import TaskItemPanel from "./TaskItemPanel.js";
function RightPanel({ activeListId, activeListName }) {

    const [showForm, setShowForm] = useState(false);
    console.log("CLASSE RIGHT PANEL: ACTIVE LIST NAME? " + activeListName)

    return (
        <div className="right-panel">
            <h2 id="tarefas">
                Tarefas - {activeListName}
                <button className="add-task-btn" onClick={() => setShowForm(true)}>
                    <i className="fas fa-plus"></i>
                </button>
            </h2>
            {activeListId && <TaskItemPanel listId={activeListId} listName ={activeListName}/>}
            {showForm && (
                <div className="TaskItemPopup">
                    <div className="task-item-popup-content">
                        <AddTaskItem listId={activeListId} listName={activeListName} />
                        <button className="close-btn" onClick={() => setShowForm(false)}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RightPanel;
