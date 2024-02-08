const { createSlice } = require("@reduxjs/toolkit");

const login={status:false};
const loginSlice=createSlice({
    name:'login',
    initialState:login.status,
    reducers:{
        setLoginStatus(state,action){
            return state=action.payload.status;
        }
    }
})

export const {setLoginStatus}=loginSlice.actions;
export default loginSlice;