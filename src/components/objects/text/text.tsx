import { useEffect, useState } from 'react'
import { AnyAction, Dispatch, bindActionCreators } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from '../../../store/reducer';
import '../../menu/menuStyle.css'
import '../object.css'
import AddElement from '../../addElement/tool/addElement';
import './text.css'
import { AddMethod } from '../../../types/addElement/addElement';
import Object, { IBaseObjectProps } from '../object';

const mapState = (state: RootState) => ({ /* STATES */ });
const mapDispatch = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({ /* ACTIONS */ }, dispatch);

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
export interface TextProps extends PropsFromRedux, IBaseObjectProps {
}

const Text: React.FC<TextProps> = (props: TextProps) => {

  useEffect(() => {
  }, [])

  return (
    <Object idObject={props.idObject}>
      <div className='text'>
        text
      </div>
    </Object>
  )
}


export default connector(Text);
