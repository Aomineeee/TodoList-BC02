import React, { Component } from "react";
import { connect } from "react-redux";
import { XOA_TASK } from "../../redux/constants/TodoListContants";
import { rootReducer } from "../../redux/reducer/RootReducer";
class TaskComplete extends Component {
  renderTaskComplete = () => {
    return this.props.taskList
      .filter((task) => task.complete)
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
              <button className="btn btn-success m-2">Checked</button>
            </div>
          </div>
        );
      });
  };

  render() {
    return (
      <div className="mt-3">
        <p>TaskComplete</p>
        {this.renderTaskComplete()}
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return { taskList: rootReducer.TodoListReducer.taskList };
};
export default connect(mapStateToProps)(TaskComplete);
