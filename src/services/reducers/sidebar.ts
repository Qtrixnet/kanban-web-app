import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ISidebar {
  isSidebarShow: boolean,
}

const initialState: ISidebar = {
  isSidebarShow: true,
};

export const sidebarSlice = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {
    setIsSidebarShowAction: (state, action: PayloadAction<boolean>) => {
      state.isSidebarShow = action.payload
    }
  }
});

const {actions, reducer} = sidebarSlice;

export const {
  setIsSidebarShowAction
} = actions;

export default reducer
