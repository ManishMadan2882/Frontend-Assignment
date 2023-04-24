import {createSlice} from '@reduxjs/toolkit'
const formSlice = createSlice({
    name:"form",
    initialState: {}
    ,
    reducers:{
        update(state,action)
        {
            //this reducer updates any changes made to the form
            const {parent,jsonKey,value} = action.payload
            if(parent === 'root')
            {
                state[jsonKey] = value;
                return state
            }
            if(state[parent])
            state[parent][jsonKey] = value
            else
            {
                state[parent]={}
                state[parent][jsonKey] = value
            }
            return state
        },
        flushState(state,action){
            state = {}
            //it clears the form state
            return state
        },
        submitState(state,action)
        {
            //this action will send the JSON Form Data via Backend API
           
            let api = prompt("Enter the backend API", "https://example.com/api");
            fetch(api, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(state.form)
              })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error));
        } 
    }
});

export const { update,flushState,submitState } = formSlice.actions
export default formSlice.reducer
//exporting all the actions & reducers