import React, {useEffect, useState} from 'react';
import AddTaskList from "./AddTaskList.js";
import TaskListService from "./TaskListService.js";
import TaskListCard from "./TaskListCard.js";

function LeftPanel({ setActiveList }) {

    const [showForm, setShowForm] = useState(false);
    const [taskLists, setTaskLists] = useState([]);
    const [selectedListId, setSelectedListId] = useState(null);

    function handleSelectList(listId, listName) {
        setSelectedListId(listId);
        setActiveList.setActiveListId(listId);
        setActiveList.setActiveListName(listName);

        console.log("CLASSE LEFT PANEL, HANDLE_SELECT_LIST, LIST NAME? " + listName)
    }

    useEffect(() => {
        const taskListService = new TaskListService();
        taskListService.all((data) => {
            setTaskLists(data);
        });
    }, []);

    return (
        <div className="left-panel">
            <h2 id="ListasTarefas">
                Listas de Tarefas
                <button className="add-taskList-btn" onClick={() => setShowForm(true)}>
                    <i className="fas fa-plus"></i>
                </button>
            </h2>
            <div>
                {taskLists.map((taskList) => (
                    <TaskListCard
                        key={taskList.id}
                        id={taskList.id}
                        name={taskList.name}
                        onSelect={handleSelectList}
                        selectedId={selectedListId}
                    />
                ))}
            </div>
            {showForm && (
                <div className="TaskListPopup">
                    <div className="task-list-popup-content">
                        <AddTaskList />
                        <button className="task-list-close-btn" onClick={() => setShowForm(false)}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LeftPanel;
