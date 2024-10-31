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
export interface TextToolsProps extends PropsFromRedux, IBaseToolProps{
}

const ToolText: React.FC<TextToolsProps> = (props: TextToolsProps) => {

    return (
        <Tool idObject={props.idObject}>
            <div className='toolsImg center'>
                <h1>Text</h1>
            </div>
        </Tool>
    )
}


export default connector(ToolText);
