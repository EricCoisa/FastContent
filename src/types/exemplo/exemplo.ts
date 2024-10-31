export const EXEMPLO_GET = 'EXEMPLO_GET'

export interface ExemploState {
    ExemploCarregando: boolean,
}

export interface ExemploCarregandoAction {
    type: typeof EXEMPLO_GET,
    payload: boolean
}

export type ExemploActionTypes = ExemploCarregandoAction