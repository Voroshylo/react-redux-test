import { combineReducers } from "redux";
import { tasksReducer } from "../redux/tasks/reducer";
import { filtersReducer } from "../redux/filters/reducer";

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
