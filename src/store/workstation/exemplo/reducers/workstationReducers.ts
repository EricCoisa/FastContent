import { AddMethod } from "../../../../types/addElement/addElement"
import { OBJECT_CURRENT, OBJECTS_ADD, OBJECTS_CHANGE, TOOLMODAL_CHANGE, TOOLS, WorkstationActionTypes, WorkstationState } from "../../../../types/workstation/workstation"


const INITIAL_STATE: WorkstationState = {
    Objects: [],
    CurrentObject:  {current: 0, method: AddMethod.Down},
    ToolModal: false,
    Tools: []
}

export function WorkstationReducer(state = INITIAL_STATE, action: WorkstationActionTypes): WorkstationState {
    switch (action.type) {
        case OBJECTS_CHANGE:
            return { ...state, Objects: action.payload }
        case OBJECTS_ADD:

        const { currentPosition, objects: o, method: m } = action.payload;

        let newObj = [...state.Objects];
        
        // Garante que a posição seja válida dentro dos limites do array
        let x;
        if (m === AddMethod.Up) {
            x = Math.max(0, currentPosition - 1); // Acima da posição atual
        } else {
            x = Math.min(currentPosition + 1, newObj.length); // Abaixo da posição atual
        }
    
        console.log("currentPosition", currentPosition);
        console.log("x", x);
    
        // Insere o objeto na posição calculada
        newObj.splice(x, 0, o);
    
        console.log("newObj after insertion:", newObj);
    
        return { ...state, Objects: newObj };


        case OBJECT_CURRENT:
            return { ...state, CurrentObject: action.payload }

        case TOOLMODAL_CHANGE:
            return { ...state, ToolModal: action.payload }

        case TOOLS:
            return { ...state, Tools: action.payload }
    
        default:
            return state
    }
}