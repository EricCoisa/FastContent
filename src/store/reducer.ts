import { combineReducers } from 'redux'
import { ExemploReducer } from './exemplo/reducers/exemploReducers';
import { WorkstationReducer } from './workstation/exemplo/reducers/workstationReducers';

export const Reducer = combineReducers({
    ExemploReducer,
    WorkstationReducer
});
  
export type RootState = ReturnType<typeof Reducer>;

