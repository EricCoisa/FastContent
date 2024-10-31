import { useEffect, useState } from 'react'
import { AnyAction, Dispatch, bindActionCreators } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from '../../store/reducer';
import './toolStyle.css'
import '../../styles/general.css'


const mapState = (state: RootState) => ({ /* STATES */ });
const mapDispatch = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({ /* ACTIONS */ }, dispatch);

const connector = connect(mapState, mapDispatch);


export interface IBaseToolProps {
  idObject:number
}


type PropsFromRedux = ConnectedProps<typeof connector>;
export interface ToolsProps extends PropsFromRedux, IBaseToolProps {
  children: React.ReactElement
}


const Tools: React.FC<ToolsProps> = (props: ToolsProps) => {

  return (
    <div className='tools verticalCenter'>
        {props.children}
    </div>
  )
}


export default connector(Tools);
