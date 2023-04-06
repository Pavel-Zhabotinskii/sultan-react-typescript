import React, {FC, useState, useMemo} from "react";
import { InputSearchPrice, Product, TypeOfCare } from "../types/typeProducts";
import MyBtn from "../UI/MyBtn/MyBtn";
import MyForm from "../UI/MyForm/MyForm";

import search from '../images/header/search.svg'
import Delete from '../images/main/Delete.svg'
import { useSelector } from "react-redux";



interface IProductFilter {
    brendCheked: string[],
    setBrendCheked: (el: string[]) => void,
    inputSearchPrice: InputSearchPrice,
    setInputSearchPrice: (el:InputSearchPrice) => void,
    applyFiltersBrend: () =>  Product[],
    setStateBtnApplyFilters: (el: boolean) => void,
    typeOfCare: TypeOfCare[],
    setStateTypesOfCare:(el: TypeOfCare) => void,
    id:string
}

const ProductFilter: FC<IProductFilter> = ({...props}) => {
    const [showAllBrends, setShowAllBrends] = useState<boolean>(false)
    const [searchBrend, setSearchBrend] = useState<string>('') 
    const pr = useSelector((state:any) => state.products)

    const arrBrends: string[] = []
    pr.map((product: any) => 
      arrBrends.push(product.brend)
    )

    const searchBrendInFilter = useMemo(():string[] => {
        if(searchBrend){
          return Array.from(new Set(arrBrends.filter(brend => brend.toLowerCase().includes(searchBrend.toLowerCase()))))
        }
        return Array.from(new Set(arrBrends))
    }, [searchBrend])

    const changesInBrendChange = (brend: string) => {
        if(props.brendCheked.includes(brend)){
            props.setBrendCheked(props.brendCheked.filter(value => value !== brend))
          return
        }
        props.setBrendCheked([...props.brendCheked, brend])
    }

    return(
        <aside className="main__filter" id={props.id}>
        <h2>ПОДБОР ПО ПАРАМЕТРАМ</h2>
        <form className="main__filter_price">
          <p>Цена <span>₸</span></p>
          <div>
            <input 
              value={props.inputSearchPrice.min}
              onChange={(e)=>props.setInputSearchPrice({...props.inputSearchPrice, min: e.target.value})}
              type="text" 
              placeholder="0"
            />
            -
            <input 
              value={props.inputSearchPrice.max}
              onChange={(e)=>props.setInputSearchPrice({...props.inputSearchPrice, max: e.target.value})}
              type="text" 
              placeholder="10 000"
            />
          </div>
        </form>
        <div className="main__filter_brend">
          <h2>Бренд</h2>
          <div>
            <MyForm
              id={showAllBrends ? 'filter__brend_show' : ''}
              value={searchBrend}
              setValue={(value) => setSearchBrend(value)}  
              classes="filter__brend" 
              src={search}
              placeholder='Поиск...'
            >
              <div>
                {searchBrendInFilter.map(brend => 
                  <label key={brend}>
                    <input 
                      onChange={(e) => changesInBrendChange(e.target.value)}
                      type="checkbox"
                      value={brend}
                    /><span></span>{brend}
                  </label>
                )}
              </div>
            </MyForm>
          </div>
            <button onClick={() => setShowAllBrends(!showAllBrends)} className={showAllBrends ? "filter__brend_close" : "filter__brend_show"}>
              {showAllBrends ? <p>Скрыть</p> : <p>Показать</p>} <div></div>
            </button>
          <div className="filter__btns">
            <MyBtn classes="brend__btn" onClick={() => {props.applyFiltersBrend(); props.setStateBtnApplyFilters(true)}}>Показать</MyBtn>
            <MyBtn onClick={() => props.setStateBtnApplyFilters(false)} classes="brend__clear"><img src={Delete} alt="clear"/></MyBtn>
          </div>
        </div>
        <div className="main__filter_left">
          {props.typeOfCare.map(filter => 
            filter.state?
              <button key={filter.type} id='filter__btn_active' onClick={() => props.setStateTypesOfCare(filter)} className="catalog__filter_btn">{filter.type}</button>
            : <button key={filter.type} onClick={() => props.setStateTypesOfCare(filter)} className="catalog__filter_btn">{filter.type}</button>
          )}
        </div>
      </aside>
    )
}

export default ProductFilter