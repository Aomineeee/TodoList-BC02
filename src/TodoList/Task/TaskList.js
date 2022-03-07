import React, { Component } from "react";
import { connect } from "react-redux";
import {
  SUA_TASK,
  XOA_TASK,
  CHECK_TASK,
} from "../../redux/constants/TodoListContants";
import { rootReducer } from "../../redux/reducer/RootReducer";

class TaskList extends Component {
  render() {
    let { taskList } = this.props;
    console.log(taskList);
    return (
      <div className="mt-3">
        <p>Task To Do</p>
        {taskList
          .filter((task) => !task.complete)
          .map((task, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-6">
                  <span>{task.taskName}</span>
                </div>
                <div className="col-6">
                  <button
                    className="btn btn-danger m-2"
                    onClick={() => {
                      const action = {
                        type: XOA_TASK,
                        payload: task.id,
                      };
                      this.props.dispatch(action);
                    }}
                  >
                    Xóa
                  </button>
                  <button
                    className="btn btn-primary m-2"
                    onClick={() => {
                      const action = {
                        type: SUA_TASK,
                        payload: task,
                      };
                      this.props.dispatch(action);
                    }}
                  >
                    Chỉnh Sửa
                  </button>
                  <button
                    className="btn btn-success m-2"
                    onClick={() => {
                      const action = {
                        type: CHECK_TASK,
                        payload: task.id,
                      };
                      this.props.dispatch(action);
                    }}
                  >
                    Check
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return { taskList: rootReducer.TodoListReducer.taskList };
};
export default connect(mapStateToProps)(TaskList);
