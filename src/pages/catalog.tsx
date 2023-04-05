import React, {FC, useState} from "react";
import LocationPages from "../UI/LocationPages/LocationPages";
import { getPageCount } from "../utils/pages";
import ItemProduct from "../components/ItemProduct";
import ProductFilter from "../components/ProductFilter";
import Pagination from "../UI/pagination/Pagination";
import { InputSearchPrice, Product, TypeOfCare } from "../types/typeProducts";
import { useSortedAndTupeOfCareAndPriceAndPaginationProducts } from "../hooks/useProduct";
import {Link} from "react-router-dom";

import btn_back from '../images/main/btn_back.svg'
import arrow_down from '../images/main/arrow_down.svg'
import { useSelector } from "react-redux";


// interface ICatalog{
//     brends: string[],
// }

const Catalog: FC = () => {
    const [brendCheked, setBrendCheked] = useState<string[]>([])
    const [stateBtnApplyFilters, setStateBtnApplyFilters] = useState<boolean>(false)
    const [showBlockWithFilters, setShowBlockWithFilters] = useState(false)
    const [typeOfCare, setTypeOfCar] = useState<TypeOfCare[]>([
        {type: 'Уход за телом', state: false},
        {type: 'Уход за руками', state: false},
        {type: 'Уход за ногами', state: false},
        {type: 'Уход за лицом', state: false},
        {type: 'Уход за волосами', state: false},
        {type: 'Средства для загара', state: false},
        {type: 'Средства для бритья', state: false},
        {type: 'Подарочные наборы', state: false},
        {type: 'Гигиеническая продукция', state: false},
        {type: 'Гигиена полости рта', state: false},
        {type: 'Бумажная продукция', state: false},
    ])
    const [selectedSort, setSelectedSort] = useState<string>('')
    const [inputSearchPrice, setInputSearchPrice] = useState<InputSearchPrice>({min: '', max: ''})
    const [page, setPage] = useState(1)

    const products = useSelector((state:any) => state.products)

    const sortedAndTupeOfCareAndPriceAndPaginationProducts = useSortedAndTupeOfCareAndPriceAndPaginationProducts(
        inputSearchPrice, 
        typeOfCare, 
        products, 
        selectedSort, 
        page
    )

    const sortProductions = (value: string) => {
        setSelectedSort(value)
      }
    const setStateTypesOfCare = (filter: TypeOfCare) => {
        setTypeOfCar([...typeOfCare].map(type => type === filter ? {...type, state: !type.state}: {...type, state: false}))
    }
    
    const applyFiltersBrend = () => {
        if(brendCheked.length > 0){
              const arr: Product[] = []
              brendCheked.forEach(brend => {
                arr.push(...sortedAndTupeOfCareAndPriceAndPaginationProducts.filter(product => product.brend === brend))
              })
              return arr
        } 
        return
    }

    return (
        <main className="catalog">
        <div className="catalog__container _container">
          <LocationPages id='catalog__location'>
            <Link to="/Catalog" id='catalog__location_active'>Каталог</Link>
          </LocationPages>
          <div className="catalog__title">
            <div className="catalog__btn_back">
              <button><div><img src={btn_back}/></div>Назад</button>
            </div>
            <h1>Косметика и гигиена</h1>
            <div className="catalog__parameters">
              ПОДБОР ПО ПАРАМЕТРАМ
              <button 
                onClick={()=>setShowBlockWithFilters(!showBlockWithFilters)} 
                className={showBlockWithFilters? 'catalog__parameters_btn': ''}
              ><img src={arrow_down}/></button>
            </div>
            <label >
              Сортировка:
              <select value={selectedSort} onChange={(event) => sortProductions(event.target.value)}>
                <option value="price+">По цене(+)</option>
                <option value="price-">По цене(-)</option>
                <option value="brend+">По названию(+)</option>
                <option value="brend-">По названию(-)</option>
              </select>
            </label>
          </div>
          <div className="catalog__filter_top">
            {typeOfCare.map(filter => 
              filter.state?
                <button key={filter.type} id='filter__top_active' onClick={() => setStateTypesOfCare(filter)}>{filter.type}</button>
                : <button key={filter.type} onClick={() => setStateTypesOfCare(filter)}>{filter.type}</button>
            )}
          </div>
          <div className="catalog__main main">
            <ProductFilter 
              brendCheked={brendCheked}
              setBrendCheked={(el) => setBrendCheked(el)}
              // brends={brends}  
              inputSearchPrice={inputSearchPrice}
              setInputSearchPrice={(el) => setInputSearchPrice(el)}
              applyFiltersBrend={() => applyFiltersBrend()!}
              setStateBtnApplyFilters={(el) => setStateBtnApplyFilters(el)}
              typeOfCare={typeOfCare}
              setStateTypesOfCare={(el) => setStateTypesOfCare(el)}
              id={showBlockWithFilters? 'main__filter_id': ''}
            />
              <div className="main__products">
                <ItemProduct 
                  sortProducts={stateBtnApplyFilters? applyFiltersBrend()! : sortedAndTupeOfCareAndPriceAndPaginationProducts!} 
                />
                {products.length < 15 
                  ? <div></div>
                  : <Pagination totalPages={getPageCount(products.length, 15)} page={page} changePage={(p) => setPage(p)}/>
                }
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
                </p>
              </div>
          </div>
        </div>
      </main>
    )
}

export default Catalog; 