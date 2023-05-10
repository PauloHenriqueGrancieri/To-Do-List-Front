import React, {Component} from 'react';
import TaskItemService from './TaskItemService.js';

class AddTaskItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            listId: props.listId,
            listName: props.listName
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.taskItemService = new TaskItemService();
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { name, description, listId, listName } = this.state;

        console.log("VALOR DO LIST ID: " + listId)
        console.log("VALOR DO LIST NAME: " + listName)
        this.taskItemService.add(name, description, listId, listName, () => {
            this.props.history.push('/');
        });
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit} className="add-task-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" className="form-control" value={this.state.description} onChange={this.handleChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        );
    }
}

export default AddTaskItem;
