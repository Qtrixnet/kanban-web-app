import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ITheme {
  isThemeDark: boolean,
}

const initialState: ITheme = {
  isThemeDark: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setIsThemeDarkAction: (state, action: PayloadAction<boolean>) => {
      state.isThemeDark = action.payload
    }
  }
});

const {actions, reducer} = themeSlice;

export const {
  setIsThemeDarkAction
} = actions;

export default reducer
