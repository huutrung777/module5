import React from "react";
import { getAll } from "../service/studentService";
import DeleteModal from "./DeleteModal.jsx";

class ListComponent extends React.Component {
    constructor(pros) {
        super(pros);
        this.state ={
            studentList:[],
            isShowModal: false,
            deleteStudent: {
                id:"",
                name:""
            }
        }
    }
    componentDidMount(){
        this.setState({
            studentList:[...getAll()]
        })
    }
    handleOpenModal = (student)=>{
        console.log(student)
        this.setState({
            isShowModal: true,
            deleteStudent: student
        })
    }
    closeModal=()=>{
        this.setState({
            isShowModal: false
        })
    }
    reloading =()=>{
        this.setState( pre=> ({
            studentList: [...getAll()]
        }))
    }
render(){
    return (
        <>
            {console.log("---------render list--------------")}
            <h1>Danh sách sinh viên</h1>
            <table className={'table table-striped table-dark'}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Xoá</th>
                </tr>
                </thead>
                <tbody>
                {this.state.studentList.map((student, i) =>
                    <tr key={student.id}>
                        <td>{i + 1}</td>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>
                            <button onClick={()=>{
                                this.handleOpenModal(student)
                            }} className={"btn btn-sm btn-danger"}>Xoá</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
            <DeleteModal deleteStudent = {this.state.deleteStudent}
                         isShow = {this.state.isShowModal}
                         closeModal = {this.closeModal}
                         reloading = {this.reloading}
            />
        </>
    )
}
}
export default ListComponent;