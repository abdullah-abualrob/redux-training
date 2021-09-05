import { combineReducers } from "redux";
import { UsersReducer} from "../reducers/UserReducer";
import { FilterReducer } from "./FilterReducer"

const reducers = combineReducers({
    users: UsersReducer,
    Filter: FilterReducer,
});

export default reducers;
