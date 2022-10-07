import { createSlice, current } from "@reduxjs/toolkit";
import { getDatabase } from "../../components/services/datbase";

export const globalSlice = createSlice({
    name: "global",
    initialState:{
        data:[],
        isLoading: true,
        search: "",
        selected:[]
    },
    reducers:{
        setDatabase:(state,action)=>{
            state.data = action.payload;
        },
        isLoading(state, action) {
            state.isLoading = action.payload;
        },
          
        search(state, action) {
            state.search = action.payload;
        },
    
        setSelected(state , action){
            state.selected = action.payload;
        },
              
        addToSelected(state, action){
            state.selected.push(action.payload );
            state.selected = current(state).selected.filter((element, index) => {
                return current(state).selected.indexOf(element) === index;
              });
        },
          
        deleteFromSelected(state, action){
            const newArray = state.selected.filter(item =>{
                return item !== action.payload;
            })
            state.selected = newArray;
        },
    }
});

export const initializeDatabase = () => {
    return async (dispatch) => {
        const data = await getDatabase();
        dispatch(setDatabase(data));
        dispatch(isLoading(false));
    };
};

export const { setDatabase, isLoading, search, setSelected, addToSelected, deleteFromSelected } = globalSlice.actions;

export const dataSelector = (state) => state.global.data;
export const isLoadingSelector = (state) => state.global.isLoading;
export const searchSelector = (state) => state.global.search;
export const selectedSelector = (state) => state.global.selected;

export default globalSlice.reducer;