import {createSlice} from "@reduxjs/toolkit";
import initialData from "../../utils/mocks/initialData";

interface ISidebar {
  data: any,
  currentBoard: any,
}

const initialState: ISidebar = {
  data: initialData,
  currentBoard: initialData[0],
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
