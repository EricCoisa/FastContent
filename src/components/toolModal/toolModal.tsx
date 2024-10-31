import { useEffect, useState } from 'react'
import { AnyAction, Dispatch, bindActionCreators } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from '../../store/reducer';
import './toolModalStyle.css'
import '../../styles/general.css'
import { HandleModal, ObjectsAdd } from '../../store/workstation/exemplo/actions/workstationAction';
import Modal from 'react-modal';
import { IObject } from '../../types/object/object';
Modal.setAppElement('#root');

const mapState = (state: RootState) => ({ ToolModal: state.WorkstationReducer.ToolModal, Tools: state.WorkstationReducer.Tools, CurrentObject:state.WorkstationReducer.CurrentObject });
const mapDispatch = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({ HandleModal, ObjectsAdd }, dispatch);

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
export interface ToolModal extends PropsFromRedux {
}

const ToolsModal: React.FC<ToolModal> = (props: ToolModal) => {

  function afterOpenModal() {

  }

  function closeModal() {
    props.HandleModal(false);
  }


  function addObject(object: IObject) {
    props.ObjectsAdd(object, props.CurrentObject.current, props.CurrentObject.method)
    closeModal()
  }


  useEffect(()=>{console.log("props.CurrentObject", props.CurrentObject)},[props.CurrentObject])
  return (

    <Modal
      isOpen={props.ToolModal}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="Tools"
      overlayClassName={"modalOverlay"}
      className={"modalContent"}

    >
      <div className='modalContent'>
        <div className='verticalCenter'>
          <div className='center'>
            {props.Tools.length != 0 && props.Tools.map((t, i) => (
              <div key={i} onClick={() => { addObject(t) }}>{t.Name}</div>
            ))}
          </div>
        </div>
      </div>
    </Modal> 


  )
}


export default connector(ToolsModal);
