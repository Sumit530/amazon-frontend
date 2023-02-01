const users = []
export const getUsersReducers = (state = {users},action)=>{
    switch(action.type){
        case "SUCCESS_GET_USERS":
            return {users:action.payload}
        case "FAIL_GET_USERS":
            return {error:action.payload}
        default : return state
    }
}