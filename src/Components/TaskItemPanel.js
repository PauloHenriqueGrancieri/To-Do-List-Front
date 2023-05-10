import React, { useState, useEffect } from 'react';
import TaskItemCard from './TaskItemCard.js';
import TaskItemService from './TaskItemService.js';

const TaskItemPanel = ({ listId , listName}) => {
    const [taskItems, setTaskItems] = useState([]);

    console.log("TASK_ITEM_PANEL: LIST NAME " + listName)
    console.log("TASK_ITEM_PANEL: LIST ID " + listId)

    useEffect(() => {
        TaskItemService.getTaskItemsByListId(listId)
            .then(data => {
                if (data) {
                    setTaskItems(data);
                }
            })
            .catch(error => console.log(error));
    }, [listId]);

    return (
        <div className="task-item-panel">
            {taskItems.map((taskItem) => (
                <TaskItemCard key={taskItem.id} taskItem={taskItem} listId={listId} listName={listName}/>
            ))}
        </div>
    );
};

export default TaskItemPanel;
