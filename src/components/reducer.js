function rootReducer(state = {value:''}, action) {
    if (action.type === 'CHANGE_VALUE') {
        return {
            ...state,
            value: action.data
        }
    };
    return state;
};


export default rootReducer;