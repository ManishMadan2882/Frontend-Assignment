
import {createSlice} from '@reduxjs/toolkit'



const formSlice = createSlice({
    name:"form",
    initialState: {}
    ,
    reducers:{
        update(state,action)
        {
            let data = {};
            data[action.payload.jsonKey] = action.payload.value
            console.log(data);
            state[action.payload.jsonKey] = action.payload.value
            return state
        } 
    }
});

export const { update } = formSlice.actions
export default formSlice.reducer