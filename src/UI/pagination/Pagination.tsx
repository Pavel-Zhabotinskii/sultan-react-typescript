import React, {FC, useMemo} from "react";

import arrow_left from '../../images/main/arrow_left.svg'
import arrow_right from '../../images/main/arrow-right.svg'


interface IPagination{
    totalPages:number,
    page: number,
    changePage: (el: number) => void
}

const Pagination: FC<IPagination> = ({totalPages, page, changePage}) => {
    let pagesArray = useMemo(()=>{
        let result = []
        for(let i = 0; i < totalPages; i++){
            result.push(i + 1)
        }
        return result
    }, [totalPages])


    return (
        <div className="main__switch">
            <button onClick={() => page > 1 ? changePage(page - 1): changePage(totalPages)}><img src={arrow_left} alt="arrow left" /></button>
            {pagesArray.map(p =>
                <button
                    onClick={() => changePage(p)} 
                    key={p} 
                    id={page === p ? 'page__current' : ''}
                >{p}</button>
            )}
            <button onClick={() => page < totalPages ? changePage(page + 1): changePage(1)}><img src={arrow_right} alt="arrow right" /></button>
        </div>
    )
}

export default Pagination; 