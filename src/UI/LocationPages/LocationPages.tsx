import React, {FC, useState} from "react";
import cl from './LocationPages.module.css'
import {Link} from "react-router-dom";


interface ILocationPages{
    id: string,
    children: React.ReactElement | React.ReactNode[],
}

const LocationPages: FC<ILocationPages> = ({children, id}) => {
    return(
        <div className={cl.location} id={id}>
            <Link to="" >Главная</Link>
            {children}
        </div>

    )
}

export default LocationPages