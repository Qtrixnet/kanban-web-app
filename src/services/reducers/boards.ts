import {createSlice} from "@reduxjs/toolkit";
import initialData from "../../utils/mocks/initialData";

interface ISidebar {
  data: any,
}

const initialState: ISidebar = {
  data: initialData,
};

export const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {

  }
});

const {actions, reducer} = boardsSlice;

export const {

} = actions;

export default reducer
