import React, {Component} from 'react';
import TaskListService from './TaskListService.js';

class AddTaskList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.taskListService = new TaskListService();
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
        const { name } = this.state;
        this.taskListService.add(name, () => {
            this.props.history.push('/');
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="add-taskList-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        );
    }
}

export default AddTaskList;
