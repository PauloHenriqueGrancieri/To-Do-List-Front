import React, { Component } from 'react';
import Modal from 'react-modal';
import Form from './AddTaskList.js';

Modal.setAppElement('#root');

class TaskListPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalAberto: false,
        };
        this.abrirModal = this.abrirModal.bind(this);
        this.fecharModal = this.fecharModal.bind(this);
    }

    abrirModal() {
        this.setState({ modalAberto: true });
    }

    fecharModal() {
        this.setState({ modalAberto: false });
    }

    render() {
        return (
            <div>
                <button onClick={this.abrirModal}>Adicionar Lista de Tarefa</button>
                <Modal isOpen={this.state.modalAberto} onRequestClose={this.fecharModal}>
                    <h2>Adicionar Lista de Tarefa</h2>
                    <Form adicionarListaTarefa={this.props.adicionarListaTarefa} />
                    <button onClick={this.fecharModal}>Fechar</button>
                </Modal>
            </div>
        );
    }
}

export default TaskListPopup;
