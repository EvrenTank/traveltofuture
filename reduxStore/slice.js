import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    departureDate: '20.09.2023',
    returnDate: '22.09.2023',
    from:'ADANA',
    to: 'AGRI' ,
    tekYon: true
};

const slice = createSlice(
  {
    name:"flights options",
    initialState : initialState,
    reducers:{
        read: (state,action) => {
            //console.log("state.departureDate",state.departureDate)
            //console.log("state.returnDate",state.returnDate)
            //console.log("state.from",state.from)
            //console.log("state.to",state.to)
            return state;
        },
        rewrite: (state,action)=>{
            state.departureDate = action.payload.departureDate;
            state.returnDate = action.payload.returnDate;
            state.from = action.payload.from;
            state.to = action.payload.to;
            state.tekYon = action.payload.tekYon
            //console.log("action.payload.departureDate",action.payload.departureDate)
            //console.log("action.payload.returnDate",action.payload.returnDate)
            //console.log("action.payload.from",action.payload.from)
            //console.log("action.payload.to",action.payload.to)     
            return state;       
        }
    }}
);

export default slice.reducer
export const {read,rewrite} = slice.actions
export {initialState}