import React from "react"
import Image from "../../components/objects/image/image"
import { IObject } from "../object/object"
import Text from "../../components/objects/text/text"
import Title from "../../components/objects/title/title"

import ToolImage from "../../components/tool/image/image"
import ToolText from "../../components/tool/text/text"
import ToolTitle from "../../components/tool/title/title"

export const ToolsList : IObject[] = [
    {
        Name:"Title",
        Component:Title,
        Tool:ToolImage
    }, 
    {
        Name:"Text",
        Component:Text,
        Tool:ToolText
    },
    {
        Name:"Imagen",
        Component:Image,
        Tool:ToolTitle
    },

]


