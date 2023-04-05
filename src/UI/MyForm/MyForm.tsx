import React, {FC, useState} from "react";
import cl from './MyForm.module.css'


interface IMyForm {
    classes: string,
    placeholder?: string,
    src?: string,
    children?: React.ReactElement | React.ReactNode,
    id?: string,
    value?: string,
    setValue?: (el: string) => void
}

const MyForm: React.FC<IMyForm> = ({classes, placeholder,  src, children, id, value, setValue}) => {
    return(
        <form id={id} className={[cl.MyForm, classes].join(' ')}>
            <input  value={value} onChange={(e)=>setValue!(e.target.value)} placeholder={placeholder}/>
            <button><img src={src} alt="btn search" onClick={(e) => e.preventDefault()}/></button>
            {children}
        </form>

    )
}

export default MyForm