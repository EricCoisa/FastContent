import { useEffect, useState } from 'react'
import { AnyAction, Dispatch, bindActionCreators } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from '../../../store/reducer';
import './addElement.css'
import '../../../styles/general.css'
import { HandleModal, ObjectsCurrent } from '../../../store/workstation/exemplo/actions/workstationAction';
import { AddMethod } from '../../../types/addElement/addElement';
import { IObject } from '../../../types/object/object';


const mapState = (state: RootState) => ({ ToolModal:state.WorkstationReducer.ToolModal });
const mapDispatch = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({ HandleModal, ObjectsCurrent }, dispatch);

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
export interface TitleToolsProps extends PropsFromRedux {
  objectId: number
  method: AddMethod
}


const Tools: React.FC<TitleToolsProps> = (props: TitleToolsProps) => {

  const handleModal = ()=>{
    props.ObjectsCurrent(props.objectId, props.method)
    props.HandleModal(true)

  }

  return (
    <div className='center mouseHover' onClick={()=>{handleModal()}}>
      <div className='round center shadown add'>
        <i className="fa-solid fa-plus"></i>
      </div>
    </div>
  )
}


export default connector(Tools);
