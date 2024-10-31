import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { OBJECT_CURRENT, OBJECTS_ADD, OBJECTS_CHANGE, TOOLMODAL_CHANGE, TOOLS } from '../../../../types/workstation/workstation';
import { AddMethod } from '../../../../types/addElement/addElement';
import { IObject } from '../../../../types/object/object';





export const HandleModal = (state : boolean): ThunkAction<any, any, any, Action> => async dispatch => {
    dispatch({
        payload: state,
        type: TOOLMODAL_CHANGE
    })
}

export const ObjectsAdd = (objects : IObject, currentPosition : number, method : AddMethod): ThunkAction<any, any, any, Action> => async dispatch => {
    dispatch({
        payload: {objects, currentPosition, method},
        type: OBJECTS_ADD
    })
}

export const ObjectsChange = (objects : IObject[]): ThunkAction<any, any, any, Action> => async dispatch => {
    console.log("change")
    dispatch({
        payload: objects,
        type: OBJECTS_CHANGE
    })
}

export const ObjectsCurrent = (key : number, method : AddMethod): ThunkAction<any, any, any, Action> => async dispatch => {
    console.log("CURR", {current: key, method: method} )
    dispatch({
        payload: {current: key, method: method},
        type: OBJECT_CURRENT
    })
}

export const LoadingTools = (tools : IObject[]): ThunkAction<any, any, any, Action> => async dispatch => {
    dispatch({
        payload: tools,
        type: TOOLS
    })
}