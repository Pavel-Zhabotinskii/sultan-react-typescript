import React, {FC, useState} from "react";
import cl from './MyModal.module.css'


interface IMyModal {
    children: React.ReactElement | React.ReactNode | string
    onClick?: () => void,
    visible: boolean,
    id?: string,
    setVisible: (el: boolean) => void
}

const MyModal: React.FC<IMyModal> = ( {children, onClick , visible, setVisible, id}) => {
    const rootClasses = [cl.myModal]

    if(visible){
        rootClasses.push(cl.active)
    }

    return(
        <div id={id} className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal