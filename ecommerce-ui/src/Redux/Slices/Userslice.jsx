import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    token: '',
    firstname:'',
    lastname:'',
    email:'',
    address:'',
    mobileNumber:'',
    role:'',
  

    
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
        state.token=action.payload.token;
        state.firstname=action.payload.user.firstname;
        state.lastname=action.payload.user.lastname;
        state.email=action.payload.user.email;
        state.address=action.payload.user.address;
        state.mobileNumber=action.payload.user.mobileNumber;
        state.role=action.payload.user.role;
        
        },
        logout:(state,action)=>{
            state.token='';
            state.firstname='';
            state.lastname='';
            state.email='';
            state.address='';
            state.mobileNumber='';
            state.role='';
            
        }
    }
});
export const {addUser,logout}=userSlice.actions; 
export default userSlice.reducer;