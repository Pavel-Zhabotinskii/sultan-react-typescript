import React, {FC, useState} from "react";

interface IItemsList{
    href: string,
    classA: string,
    value: any
}

interface INavication {
    classUl: string,
    classNav?: string,
    items: IItemsList[]
}

const MyNavication: FC<INavication> = ({items, classUl, classNav}) => {

    return(
        <nav className={classNav}>
            <ul className={classUl}>
                {items.map(item => 
                    <li key={item.value}>
                        <a href={item.href} className={item.classA}>{item.value}</a>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default MyNavication