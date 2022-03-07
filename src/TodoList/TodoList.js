import React, { Component } from "react";
import { connect } from "react-redux";
import { CAP_NHAT_TASK, THEM_TASK } from "../redux/constants/TodoListContants";
import { rootReducer } from "../redux/reducer/RootReducer";
import TaskComplete from "./Task/TaskComplete";
import TaskList from "./Task/TaskList";
class TodoList extends Component {
  state = {
    taskName: "",
  };
  handleOnchange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  componentWillReceiveProps(newprops) {
    this.setState({
      taskName: newprops.taskUpdate.taskName,
    });
  }

  render() {
    return (
      <div>
        <p className="text-center display-4">BÀI TẬP TO DO LIST</p>
        <div className="container">
          <p>Task Name</p>
          <div className="row">
            <input
              name="taskName"
              value={this.state.taskName}
              // onChange={(e) => {
              //   this.setState(
              //     {
              //       taskName: e.target.value,
              //     },
              //     () => {
              //       console.log(this.state);
              //     }
              //   );
              // }}
              onChange={(e) => {
                this.handleOnchange(e);
              }}
            />
            <button
              className="btn btn-primary ml-2"
              onClick={() => {
                const action = {
                  type: THEM_TASK,
                  task: {
                    taskName: this.state.taskName,
                    complete: false,
                  },
                };
                this.props.dispatch(action);
              }}
            >
              Thêm
            </button>
            <button
              className="btn btn-secondary ml-2"
              onClick={() => {
                const action = {
                  type: CAP_NHAT_TASK,
                  payload: this.state.taskName,
                };
                this.props.dispatch(action);
              }}
            >
              Cập Nhật
            </button>
          </div>
        </div>
        <div className="container">
          <TaskList />
          <TaskComplete />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    taskList: rootReducer.TodoListReducer.taskList,
    taskUpdate: rootReducer.TodoListReducer.taskUpdate,
  };
};
export default connect(mapStateToProps)(TodoList);
