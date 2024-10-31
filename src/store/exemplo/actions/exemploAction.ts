import { EXEMPLO_GET } from '../../../types/exemplo/exemplo';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';


export const GetExemplo = (): ThunkAction<any, any, any, Action> => async dispatch => {
    dispatch({ payload: true, type: `${EXEMPLO_GET}_LOADING` })

    dispatch({
        payload: true,
        type: EXEMPLO_GET
    })
}