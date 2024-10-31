import { EXEMPLO_GET, ExemploActionTypes, ExemploState } from "../../../types/exemplo/exemplo"

const INITIAL_STATE: ExemploState = {
    ExemploCarregando: false,
}

export function ExemploReducer(state = INITIAL_STATE, action: ExemploActionTypes): ExemploState {
    switch (action.type) {
        case EXEMPLO_GET:
            return { ...state, ExemploCarregando: action.payload }
        default:
            return state
    }
}