
const listTaskInit = [];

export default function mainReducer(state = listTaskInit, action){
    if(action.type === 'GET_DATA'){
        console.log("payload",action.payload);
        state.push(action.payload);
        return action.payload;
    }
    else if(action.type === 'EDIT_USER'){
        console.log("payload",action.payload);
        return action.payload
    }
    return state;
}

