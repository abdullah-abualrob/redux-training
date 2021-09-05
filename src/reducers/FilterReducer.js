const initState = {
    value: '',
}

export function FilterReducer(state = initState, action){
    switch (action.type){
        case 'CHANGE_FILTER':
            return {
                ...state,
                value: action.payload,
            }

        default:
            return state;
    }
}