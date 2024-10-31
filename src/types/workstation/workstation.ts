import { AddMethod } from "../addElement/addElement"
import { IObject } from "../object/object"

export const OBJECTS_ADD = 'OBJECTS_ADD'
export const OBJECTS_CHANGE = 'OBJECTS_CHANGE'
export const OBJECT_CURRENT = 'OBJECT_CURRENT'

export const TOOLMODAL_CHANGE = 'TOOLMODAL_CHANGE'


export const TOOLS = 'TOOLS'


export interface WorkstationState {
    Objects: IObject[],
    ToolModal: boolean,
    CurrentObject: {current: number, method: AddMethod}
    Tools: IObject[]
}

export interface ObjectsChangeAction {
    type: typeof OBJECTS_CHANGE,
    payload: IObject[]
}

export interface ObjectsAddAction {
    type: typeof OBJECTS_ADD,
    payload: {
        objects: IObject;
        currentPosition: number;
        method: AddMethod;
    }
}

export interface ObjectsCurrentAction {
    type: typeof OBJECT_CURRENT,
    payload: {current: number, method: AddMethod}
}


export interface ToolModalAction {
    type: typeof TOOLMODAL_CHANGE,
    payload: boolean
}

export interface ToolsAction {
    type: typeof TOOLS,
    payload: IObject[]
}

export type WorkstationActionTypes = ObjectsChangeAction | ObjectsAddAction | ToolModalAction | ToolsAction | ObjectsCurrentAction