import React, {FC, MouseEvent, useMemo, useState} from "react";
import LocationPages from "../UI/LocationPages/LocationPages";
import { Product, TypeOfCare } from "../types/typeProducts";
import {Link} from "react-router-dom";
import close from '../images/main/close.svg'
import { useDispatch } from "react-redux";

const Admin: FC = () => {
    const [visible, setVisible] = useState(false)
    const [stateCheckList, setStateChekList] = useState(true)
    const [error, setError] = useState(false)
    const [changeProduct, setChangeProduct] = useState(false)
    const [update, setUpdate] = useState(true)
    const [value, setValuesInputAddProduct] = useState({
        brend: '',
        price: '',
        manufacturer: '',
        url: '',
        description: '',
        weight: '',
        volume: '',
        id: ''
    })
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
    const producrsFromLocalStorage = localStorage.getItem('goods')
    const dispatch = useDispatch()
    
    let products: Product[] = useMemo(() => {
        if(producrsFromLocalStorage && producrsFromLocalStorage.length > 0) return JSON.parse(producrsFromLocalStorage)
        return [...JSON.parse(producrsFromLocalStorage!)].map(product => product && {...product, inStock: true, inBasket: false, quantityInBasket: 1})
    }, [update])

    const chacgeProductClick = (product: Product) => {
        setVisible(true)
        setChangeProduct(true)
        setValuesInputAddProduct({...value, 
            manufacturer: product.manufacturer, 
            brend: product.brend, 
            price: product.price + '',
            url: product.url,
            description: product.description,
            weight: product.weight,
            volume: product.volume,
            id: product.id + '',
        })
        
        let arr:TypeOfCare[] = typeOfCare

        for(let i = 0; i<=product.type.length; i++){
            arr = [...arr].map(t => t.type === product.type[i] ? {...t, state: true}: t)
        }
        setTypeOfCar(arr)
    }

    const addNewProduct = (e:  MouseEvent, add:boolean) => {
        e.preventDefault()
        if(value.brend === '' || value.manufacturer === '' || value.price === '' || value.url === ''
            || value.description === '' || value.weight === '' || value.volume === '' || value.id === ''){
            setError(true)
            return
        }
        const arrTypesObj = typeOfCare.filter(type => type.state === true)
        const types = arrTypesObj.map(type => type.type)
        let newProducts: Product[]
        if(add){
            newProducts = [...products, {
                url: value.url, 
                price: +value.price, 
                manufacturer: value.manufacturer,
                brend: value.brend, 
                description: value.description, 
                id: +value.id, 
                volume: value.volume,
                weight: value.weight,
                inBasket: false,
                inStock: true,
                quantityInBasket: 1,
                type: types
            }]
        } else {
            const product = {
                url: value.url, 
                price: +value.price, 
                manufacturer: value.manufacturer,
                brend: value.brend, 
                description: value.description, 
                id: +value.id, 
                volume: value.volume,
                weight: value.weight,
                inBasket: false,
                inStock: true,
                quantityInBasket: 1,
                type: types
            }
            newProducts = products.map(prod => {
                if (prod.id === product.id) return product;
                return prod;
            });
        }
        
        dispatch({type: "Change_products" , payload: newProducts})
        localStorage.removeItem('goods')
        localStorage.setItem('goods', JSON.stringify(newProducts))
        setValuesInputAddProduct({  brend: '', price: '', manufacturer: '', url: '', description: '', weight: '', volume: '', id: ''})
        setVisible(false)
        setTypeOfCar([...typeOfCare].map(type => type && {...type, state: false}))
        setUpdate(!update)
    }

    const removeProduct = (id: number) => {
        setUpdate(!update)
        const index = products.findIndex(prod => prod.id === id);
        if (index !== -1) {
            products.splice(index, 1);
        }
        dispatch({type: "Change_products" , payload: products})
        localStorage.removeItem('goods')
        localStorage.setItem('goods', JSON.stringify(products))
        
    }

    const closeChangeProductModal = (el: boolean) => {
        setVisible(el)
        setChangeProduct(el)
        setStateChekList(true)
        setTypeOfCar([...typeOfCare].map(type => type && {...type, state: false}))
        setValuesInputAddProduct({
            brend: '',
            price: '',
            manufacturer: '',
            url: '',
            description: '',
            weight: '',
            volume: '',
            id: ''
        })
    }

    return (
        <main className="admin" data-testid='admin-page'>
            <div className="admin__container _container">
                <LocationPages id='catalog__location'>
                    <Link to="/Catalog">Каталог</Link>
                    <Link to="/Admin" id='catalog__location_active'>Админ</Link>
                </LocationPages>
                <div id={visible? 'modal__addProduct' : 'modal'} onClick={() => closeChangeProductModal(false)}>
                    <div className="content" onClick={(e) => {e.stopPropagation()}}>
                        <button onClick={() => closeChangeProductModal(false)}><img src={close}  alt="icon"/></button>
                        <form>
                            <div className="input__box">
                                <input 
                                    type="text" 
                                    value={value.url}  
                                    placeholder={changeProduct? '' : 'Url'} 
                                    onChange={(e) => setValuesInputAddProduct({...value, url: e.target.value})}/>
                                <input 
                                    type="text" 
                                    value={value.brend}  
                                    placeholder={changeProduct? '':'Бренд'} 
                                    onChange={(e) => setValuesInputAddProduct({...value, brend: e.target.value})}/>
                                <input 
                                    type="text" 
                                    value={value.price}  
                                    placeholder={changeProduct? '' :'Цена'} 
                                    onChange={(e) => setValuesInputAddProduct({...value, price: e.target.value})}/>
                                <input 
                                    type="text" 
                                    value={value.manufacturer}  
                                    placeholder={changeProduct? '':'Производитель'} 
                                    onChange={(e) => setValuesInputAddProduct({...value, manufacturer: e.target.value})}/>
                                <input 
                                    type="text" 
                                    value={value.weight}  
                                    placeholder={changeProduct? '' :'Вес'} 
                                    onChange={(e) => setValuesInputAddProduct({...value, weight: e.target.value})}/>
                                <input 
                                    type="text" 
                                    value={value.volume}  
                                    placeholder={changeProduct? '' :'Объем'} 
                                    onChange={(e) => setValuesInputAddProduct({...value, volume: e.target.value})}/>
                                <input 
                                    type="text" 
                                    value={value.id}  
                                    placeholder={changeProduct? '' :'Штрихкод'} 
                                    onChange={(e) => setValuesInputAddProduct({...value, id: e.target.value})}/>
                                <textarea 
                                    placeholder={changeProduct? '' :"Описание"} 
                                    value={value.description} 
                                    onChange={(e) => setValuesInputAddProduct({...value, description: e.target.value})}></textarea>
                                {error && <p>Нужно заполнить все поля</p>}
                            </div>
                            <div className="multiselect">
                                <div className="selectBox" onClick={() => setStateChekList(!stateCheckList)}>
                                <select>
                                    <option>Тип ухода</option>
                                </select>
                                <div className="overSelect"><div></div></div>
                                </div>
                                <div id="checkboxes" style={stateCheckList? {display: 'none'}: {display: 'block'}}>
                                    {typeOfCare!.map(type => 
                                        <label key={type.type}>
                                            <input checked={type.state? true: false} type="checkbox" onChange={() => setTypeOfCar([...typeOfCare].map(t => t === type ? {...t, state: !t.state}: t))}/>
                                            {type.type}
                                        </label>
                                    )}
                                </div>
                            </div>
                            <button onClick={(e: MouseEvent) =>{changeProduct? addNewProduct(e, false) : addNewProduct(e, true)}}>{changeProduct? <p>Редактировать продукт</p> : <p>Добавить продукт </p>}</button>
                        </form>
                    </div>
                    </div>
                <button className="addNewProduct" onClick={() => setVisible(true)}>
                    Добавить продукт
                </button>
                <div className="admin__box">
                    {products?.length > 0 
                        ? products.map((product: Product) =>
                            <div className="admin__product" key={product.id}>
                                <Link to={`/${product.id}`} >
                                    <img src={product.url} />
                                </Link>
                                <h2>{product.brend}</h2>
                                <h2>{product.price} ₸</h2>
                                <p>Бренд: <span>{product.brend}</span></p>
                                <p>Произваодитель: <span>{product.manufacturer}</span></p>
                                <p>Вес: <span>{product.weight}</span></p>
                                <p>Объем: <span>{product.volume}</span></p>
                                <p>Штрихкод: <span>{product.id}</span></p>
                                <p>Тип ухода: <span>{product.type.length > 0 ? product.type.join(', '): product.type}</span></p>
                                <p>Описание: <span>{product.description.split(' ').slice(0, 10).join(' ') + '...'}</span></p>
                                <div className="admin__product_btn">
                                    <button onClick={() => removeProduct(product.id)}>Удалить</button>
                                    <button onClick={() => chacgeProductClick(product)}>Редактировать</button>
                                </div>
                            </div>
                          )
                        : <h2>Список товаров пуст</h2>
                    }
                </div>
            </div>
        </main>
    )
}

export default Admin; 