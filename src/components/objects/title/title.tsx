import { useEffect, useState } from 'react'
import { AnyAction, Dispatch, bindActionCreators } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from '../../../store/reducer';
import '../../menu/menuStyle.css'
import '../object.css'
import AddElement from '../../addElement/tool/addElement';
import './title.css'
import { AddMethod } from '../../../types/addElement/addElement';
import Object, { IBaseObjectProps } from '../object';

const mapState = (state: RootState) => ({ /* STATES */ });
const mapDispatch = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({ /* ACTIONS */ }, dispatch);

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
export interface TitleProps extends PropsFromRedux, IBaseObjectProps {
}

const Title: React.FC<TitleProps> = (props: TitleProps) => {

  useEffect(() => {
    console.log("props", props)
  }, [props])

  return (
    <Object idObject={props.idObject}>
      <div className='title'>
        title
      </div>
    </Object>
  )
}


export default connector(Title);
