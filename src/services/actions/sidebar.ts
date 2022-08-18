import { Dispatch } from 'redux';
import {setIsSidebarShowAction} from "../reducers/sidebar";

export const setIsSidebarShow = (status: boolean) => (dispatch: Dispatch) => dispatch(setIsSidebarShowAction(status));
