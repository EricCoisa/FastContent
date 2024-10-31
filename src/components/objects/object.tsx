import React, { useEffect, useState } from 'react'
import { AnyAction, Dispatch, bindActionCreators } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from './../../store/reducer';
import './object.css'
import AddElement from './../addElement/tool/addElement';
import { AddMethod } from './../../types/addElement/addElement';

const mapState = (state: RootState) => ({ /* STATES */ });
const mapDispatch = (dispatch: Dispatch<AnyAction>) =>
    bindActionCreators({ /* ACTIONS */ }, dispatch);

const connector = connect(mapState, mapDispatch);

export interface IBaseObjectProps {
    idObject?: number
}


type PropsFromRedux = ConnectedProps<typeof connector>;
export interface ObjectProps extends PropsFromRedux, IBaseObjectProps {
    children: React.ReactElement
}

const Object: React.FC<ObjectProps> = (props: ObjectProps) => {
    if (props.idObject == undefined) { console.warn("Key is not defined") }

    return (
        <div className='object'>
            <AddElement objectId={props.idObject ? props.idObject : 0} method={AddMethod.Up} />
            {props.children}            
            <AddElement objectId={props.idObject ? props.idObject : 0} method={AddMethod.Down} />
        </div>
    )
}


export default connector(Object);
