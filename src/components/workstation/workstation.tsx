import React, { useEffect, useState } from 'react'
import { AnyAction, Dispatch, bindActionCreators } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from '../../store/reducer';
import './workstation.css'
import Title from '../objects/title/title';
import { Reorder } from "framer-motion"
import { LoadingTools, ObjectsChange } from '../../store/workstation/exemplo/actions/workstationAction';
import AddElement from '../addElement/tool/addElement';
import { ToolsList } from '../../types/workstation/toolsList';
import ToolModal from '../toolModal/toolModal';
import { AddMethod } from '../../types/addElement/addElement';
import { IObject } from '../../types/object/object';


const mapState = (state: RootState) => ({ Objects: state.WorkstationReducer.Objects, ToolModal: state.WorkstationReducer.ToolModal, Tools: state.WorkstationReducer.Tools });
const mapDispatch = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({ ObjectsChange, LoadingTools }, dispatch);

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
export interface ModeloComponentProps extends PropsFromRedux {
}

const WorkStation: React.FC<ModeloComponentProps> = (props: ModeloComponentProps) => {
  var temp : IObject[]

  const handlerSetTemp = (values : IObject[])=>{

    temp = values
  }

  const reorderOut = ()=>{
    console.log("out")
    if(temp == null){return}
    props.ObjectsChange(temp)
  }



  useEffect(() => {
    LoadTools()
  }, [])


  useEffect(() => {
    console.log("ob", props.Objects)
  }, [props.Objects])

  const LoadTools = () => {
    props.LoadingTools(ToolsList)
  }

  return (
    <div className='workstation center'>
      <div className='workstationContent'>
        {props.Objects.length == 0 && props.Tools.length != 0 && <AddElement objectId={0} method={AddMethod.Up} />}

        <Reorder.Group values={props.Objects} onReorder={(o) => props.ObjectsChange(o)}>
          {props.Objects.length != 0 && props.Objects.map((o, i) =>
            <Reorder.Item   onDragEnd={reorderOut} value={o} key={i}>
              {React.createElement(o.Component, { idObject: i })}
            </Reorder.Item>
          )}
        </Reorder.Group>
      </div>

      <ToolModal />
    </div>
  )
}

export default connector(WorkStation);
