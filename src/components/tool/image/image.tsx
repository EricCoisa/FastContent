import { useEffect, useState } from 'react'
import { AnyAction, Dispatch, bindActionCreators } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from '../../../store/reducer';
import '../../../styles/general.css'
import Tool, { IBaseToolProps } from '../tool';


const mapState = (state: RootState) => ({ /* STATES */ });
const mapDispatch = (dispatch: Dispatch<AnyAction>) =>
    bindActionCreators({ /* ACTIONS */ }, dispatch);

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
export interface ImageToolsProps extends PropsFromRedux, IBaseToolProps{
}

const ToolImage: React.FC<ImageToolsProps> = (props: ImageToolsProps) => {

    return (
        <Tool idObject={props.idObject}>
            <div className='toolsImg center'>
                <img src='https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp' />
            </div>
        </Tool>
    )
}


export default connector(ToolImage);
