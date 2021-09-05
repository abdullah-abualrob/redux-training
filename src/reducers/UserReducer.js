import { FETCH_USERS } from "../actions/types";

const initState = {
    users: [],
}

export function UsersReducer(state = initState, action){
    switch (action.type){
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload,
            }

        case 'CHANGE_ROLE':
            let user = state.users[action.payload.id];
            user.role = action.payload.role;
            state.users[action.payload.id] = user;
            return{
                ...state,
                users: state.users
            }
                
        default:
            return state;
    }
}

