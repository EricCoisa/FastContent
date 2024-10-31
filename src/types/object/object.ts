import { JSXElementConstructor } from "react";
import { IBaseObjectProps } from "../../components/objects/object";
import { IBaseToolProps } from "../../components/tool/tool";

export interface IObject {
    Name:string,
    Component:React.FC<IBaseObjectProps>
    Tool:React.FC<IBaseToolProps>
}