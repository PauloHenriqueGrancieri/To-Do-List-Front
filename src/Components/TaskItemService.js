import axios from 'axios';

class TaskItemService {

    all(callback) {
        axios.get('https://localhost:8080/taskItem')
            .then((response) => {
                callback(response.data);
            })
            .catch(function (error) {
                console.log(error);
                callback(null);
            });
    }

    get(id, callback) {
        axios.get('https://localhost:8080/taskItem/' + id)
            .then((response) => {
                callback(response.data);
            })
            .catch(function (error) {
                console.log(error);
                callback(null);
            });
    }

    static getTaskItemsByListId(listId) {
        return axios
            .get(`https://localhost:8080/taskItem/listId/${listId}`)
            .then((response) => response.data)
            .catch((error) => {
                console.log(error);
                return null;
            });
    }

    add(name, description, listId, listName) {
        var createdDate = new Date().toISOString();
        console.log("Adicionando tarefa, data de criacao" + createdDate)
        axios.post('https://localhost:8080/taskItem/', {
            title: name,
            description: description,
            createdDate: createdDate,
            taskList: {
                id: listId,
                name: listName
            }
        })
            .then((response) => response.data)
            .catch((error) => {
                console.log(error);
                return null;
            });
        console.log("titulo, descricao, data, listId, listName: " + name + description + createdDate + listId + listName)
    }

    update(id, name, description,createdDate, completionDate, isCompleted, listId, listName) {
        axios.put('https://localhost:8080/taskItem/' + id, {
            id: id,
            title: name,
            description: description,
            createdDate: createdDate,
            completionDate: completionDate,
            isCompleted: isCompleted,
            taskList: {
                id: listId,
                name: listName
            }
        })
            .then((response) => response.data)
            .catch((error) => {
                console.log(error);
                return null;
            });
    }

    delete(id, callback) {
        axios.delete('https://localhost:8080/taskItem/' + id)
            .then(function (response) {
                callback();
            })
            .catch(function (response) {
                console.log('Error deleting');
                callback();
            });
    }
}

export default TaskItemService;