import React, {FC, useState} from "react";
import {Link} from "react-router-dom";
import CountAndPriceInBasket from "../components/CountAndPriceInBasket";
import { Product } from "../types/typeProducts";
import LocationPages from "../UI/LocationPages/LocationPages";
import MyBtn from "../UI/MyBtn/MyBtn";
import MyModal from "../UI/MyModal/MyModal";

import btn_back from '../images/main/btn_back.svg'
import close from '../images/main/close.svg'
import imgModal from '../images/main/imgModal.svg'
import box from '../images/main/box.svg'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const BasketPage: FC = () => {
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch()
    const productsLocal = useSelector((state:any) => state.products)
    const productsInBsket: Product[] = productsLocal.filter((product: Product) => product.inBasket)  
    const money = productsInBsket.length > 0
        ? productsInBsket.map(prod => prod.price * prod.quantityInBasket) 
        : 0

    const totalMoney = money !== 0 ? money.reduce((a:number , b:number) => a + b, 0) : 0

    const ClearBasket = () => {
        setModal(true)
        dispatch({type: "Change_products" , payload: [...productsLocal].map(product => product.inBasket ? {...product, inBasket: false}: product)})
        localStorage.removeItem('goods')
        localStorage.setItem('goods',JSON.stringify([...productsLocal].map(product => product.inBasket ? {...product, inBasket: false}: product)))
    }

    return (
        <main className="catalog">
            <div className="basket__container _container" data-testid='basket-page'>
                <div className="basket__btn_back">
                <button><div><img src={btn_back}/></div>Назад</button>
                </div>
                <LocationPages id='catalog__location'>
                    <Link to="/Catalog" id='location_active'>Корзина</Link>
                </LocationPages>
                <MyModal visible={modal} setVisible={(el) => setModal(el)}>
                    <button onClick={() => setModal(false)}><img src={close} alt="icon"/></button>
                    <img src={imgModal}  alt="icon"/>
                    <h1>Спасибо за заказ</h1>
                    <p>Наш менеджер свяжется с вами в ближайшее время</p>
                </MyModal>
                <h1>Корзина</h1>
                {productsInBsket.length > 0 
                    ? productsInBsket.map(prod => 
                        <div key={prod.id} className="basket__item item">
                            <Link to={`/${prod.id}`}>
                                <div className="item__img">
                                    <img src={prod.url}/>
                                </div>
                                <div className="item__description">
                                    <div className="item__size">
                                        <img src={box} alt="box" />
                                        {prod.weight}
                                    </div>
                                    <h2>{prod.brend} {prod.description.split(' ').slice(0, 4).join(' ') + '...'}</h2>
                                    <p>{prod.description}</p>
                                </div>
                            </Link>
                            <div className="item__btns">
                                <CountAndPriceInBasket 
                                    price={prod.price}
                                    prod={prod}
                                />
                            </div>
                        </div>
                      )
                    : <h2>В корзине пока ничего нет</h2>
                }
                {productsInBsket.length > 0 
                    ? <div className="basket__total">
                        <MyBtn onClick={() => ClearBasket()} classes="basket__total_btn"><p>Оформить заказ</p></MyBtn>
                        <div>{totalMoney} ₸</div>
                    </div>
                    : <div></div>
                }
            </div>
       </main>
    )
}

export default BasketPage; 