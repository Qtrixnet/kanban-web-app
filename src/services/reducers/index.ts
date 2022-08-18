import { combineReducers } from "redux";
import themeReducer from './theme';
import sidebarReducer from './sidebar';

export const rootReducer = combineReducers({
  theme: themeReducer,
  sidebar: sidebarReducer,
});
