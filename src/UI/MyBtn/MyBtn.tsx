import React, {FC, useState} from "react";
import cl from './MyBtn.module.css'


interface IMyBtn {
    classes: string,
    children?: React.ReactElement | React.ReactNode | string
    onClick?: () => void,
    id?: string
}

const MyBtn: React.FC<IMyBtn> = ({classes, children, onClick, id}) => {
    return(
        <button className={[cl.MyBtn, classes].join(' ')} id={id} onClick={()=>onClick!()}>
            {children}
        </button>

    )
}

export default MyBtn