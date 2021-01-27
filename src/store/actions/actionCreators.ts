import { SET_HEADER } from './actionsTypes';
import { IActionHeader } from './interfaces';

export const setHeader = (header: string | number): IActionHeader => ({
    type: SET_HEADER,
    payload: header,
});
