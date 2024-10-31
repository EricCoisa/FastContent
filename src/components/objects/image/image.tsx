import { useEffect, useState } from 'react'
import { AnyAction, Dispatch, bindActionCreators } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from '../../../store/reducer';
import '../../menu/menuStyle.css'
import '../object.css'
import AddElement from '../../addElement/tool/addElement';
import './image.css'
import { AddMethod } from '../../../types/addElement/addElement';
import Object, { IBaseObjectProps } from '../object';

const mapState = (state: RootState) => ({ /* STATES */ });
const mapDispatch = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({ /* ACTIONS */ }, dispatch);

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
export interface ImageProps extends PropsFromRedux, IBaseObjectProps {
}

const Image: React.FC<ImageProps> = (props: ImageProps) => {

  useEffect(() => {
  }, [])

  return (
    <Object idObject={props.idObject}>
      <div className='image'>
        image
      </div>
    </Object>
  )
}


export default connector(Image);
