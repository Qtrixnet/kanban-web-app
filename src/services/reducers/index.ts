import { combineReducers } from "redux";
import themeReducer from './theme';
import sidebarReducer from './sidebar';
import boardsReducer from './boards';

export const rootReducer = combineReducers({
  theme: themeReducer,
  sidebar: sidebarReducer,
  boards: boardsReducer,
});
