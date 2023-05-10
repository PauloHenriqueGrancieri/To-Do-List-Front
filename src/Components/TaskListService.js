import axios from 'axios';

export default class TaskListService {

    all(callback) {
        axios.get('https://localhost:8080/taskList')
            .then((response) => {
                callback(response.data);
            })
            .catch(function (error) {
                console.log(error);
                callback(null);
            });
    }

    get(id) {
        axios.get('https://localhost:8080/taskList/' + id)
            .then((response) => response.data)
            .catch((error) => {
                console.log(error);
                return null;
            });
    }



    add(data) {
        axios.post('https://localhost:8080/taskList/', {
            name: data
        })
            .then(response => {
                if (response.status === 200) {
                    console.log('Incluído com sucesso');
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    update(data, id, callback) {
        axios.put('https://localhost:8080/taskList/' + id, {
            id: id,
            name: data
        })
            .then(function (response) {
                console.log('Updated');
                callback();
            })
            .catch(function (response) {
                callback();
            });
    }

    delete(id, callback) {
        axios.delete('https://localhost:8080/taskList/' + id)
            .then(function (response) {
                callback();
            })
            .catch(function (response) {
                console.log('Error deleting');
                callback();
            });
    }
}