import React, {FC, useEffect, useState} from "react";
import cl from './Counter.module.css'

interface ICounter{
    id:string
    number: number,
    clickBtn:() => void,
    clickBtnMinus:() => void
}

const Counter: FC<ICounter> = ({id, number,clickBtn, clickBtnMinus}) => {
    const [n, setN] = useState(0)

    useEffect(()=>{
        setN(number)
    },[])

    return(
        <div className={cl.counter} id={id}>
           <button onClick={() =>{
                if(n!== 1){
                    clickBtnMinus()
                    setN(n - 1)
                } else{
                    setN(1);
                }
            }}>-</button>
           <div>{n}</div>
           <button  onClick={() =>{
                    clickBtn();
                    setN(n + 1);
                }}>+</button>
        </div>
    )
}

export default Counter