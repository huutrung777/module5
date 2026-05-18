import React, {Component} from "react";
import {Button, Modal} from "react-bootstrap";
import {deleteById, getAll} from "../service/studentService.js";

class DeleteModal extends React.Component{
    constructor(props) {
        super(props);
    }
    handleDelete = () => {
        deleteById(this.props.deleteStudent.id);
        console.log(getAll());
        this.props.closeModal();
        this.props.reloading();
    }
    handleClose = ()=>{
        this.props.closeModal();
    }
    render() {
        return (
            <>
                {console.log("---delete----")}
                <Modal show={this.props.isShow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <span>Bạn có muốn xoá sinh viên : {this.props.deleteStudent?.name}</span>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleDelete}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
export default DeleteModal;