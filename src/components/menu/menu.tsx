import React, { useEffect, useState } from 'react'
import { AnyAction, Dispatch, bindActionCreators } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from '../../store/reducer';
import './menuStyle.css'
import Tools from '../tool/tool';

const mapState = (state: RootState) => ({ Objects: state.WorkstationReducer.Objects });
const mapDispatch = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({ /* ACTIONS */ }, dispatch);

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
export interface MenuProps extends PropsFromRedux {
}

const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
  }, [])

  return (
    <div className={`left menu shadown ${open ? "menuOpen" : ""}`}>
      <div className='btnMenu' onClick={() => setOpen(!open)}></div>
      <div className='menuContent'>
        {props.Objects.length != 0 && props.Objects.map((o, i) =>
            React.createElement(o.Tool, { idObject: i }) 
        )}

      </div>
    </div>
  )
}

export default connector(Menu);
