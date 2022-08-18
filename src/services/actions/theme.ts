import { Dispatch } from 'redux';
import {setIsThemeDarkAction} from "../reducers/theme";

export const setIsThemeDark = (status: boolean) => (dispatch: Dispatch) => dispatch(setIsThemeDarkAction(status));
