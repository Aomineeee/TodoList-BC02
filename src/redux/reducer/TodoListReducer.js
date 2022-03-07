import {
  CAP_NHAT_TASK,
  CHECK_TASK,
  SUA_TASK,
  THEM_TASK,
  XOA_TASK,
} from "../constants/TodoListContants";

const stateDefault = {
  taskList: [
    {
      id: "1",
      taskName: "task 1",
      complete: false,
    },
    {
      id: "3",
      taskName: "task 3",
      complete: false,
    },
    {
      id: "2",
      taskName: "task 2",
      complete: true,
    },
    {
      id: "4",
      taskName: "task 4",
      complete: true,
    },
  ],
  taskUpdate: {
    id: "1",
    taskName: "task 1",
    complete: false,
  },
};
export const TodoListReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case THEM_TASK: {
      let newTaskList = [...state.taskList];
      let indexTask = newTaskList.findIndex(
        (task) => task.taskName == action.task.taskName
      );
      if (action.task.taskName === "") {
        alert("Vui lòng nhập task name");
        return { ...state };
      }
      if (indexTask !== -1) {
        alert("Task name đã được sử dụng");
        return { ...state };
      }
      newTaskList.push(action.task);
      return { ...state, taskList: newTaskList };
    }
    case XOA_TASK:
      let newTaskList = [...state.taskList];
      newTaskList = newTaskList.filter((task) => task.id !== action.payload);

      return { ...state, taskList: newTaskList };
    case CHECK_TASK: {
      let newTaskList = [...state.taskList];
      let indexTask = newTaskList.findIndex(
        (task) => task.id == action.payload
      );
      if (indexTask !== -1) {
        newTaskList[indexTask].complete = true;
      }
      return { ...state, taskList: newTaskList };
    }
    case SUA_TASK: {
      return { ...state, taskUpdate: action.payload };
    }
    case CAP_NHAT_TASK: {
      state.taskUpdate = { ...state.taskUpdate, taskName: action.payload };
      let newTaskList = [...state.taskList];
      let indexTask = newTaskList.findIndex(
        (task) => task.id == state.taskUpdate.id
      );
      if (indexTask !== -1) {
        newTaskList[indexTask] = state.taskUpdate;
      }
      return { ...state, taskList: newTaskList };
    }
    default:
      return { ...state };
  }
};
