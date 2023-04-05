import React, {FC, useState} from "react";
import { Product} from "../types/typeProducts";
import Counter from "../UI/Counter/Counter";
import MyBtn from "../UI/MyBtn/MyBtn";

import basket_yellow from '../images/main/basket_yellow.svg'
import basket from '../images/main/basket.svg'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


interface ICountAndPriceAndBasketBtn{
    price: number,
    product: Product,
}

const CountAndPriceAndBasketBtn: FC<ICountAndPriceAndBasketBtn> = ({price, product}) => {
    const dispatch = useDispatch()
    const productsLocal = useSelector((state:any) => state.products)
    const productLocal = productsLocal.filter((prod: Product) => prod.id === product.id)
    const quantityInBasket = productLocal[0].quantityInBasket === 1? 1: productLocal[0].quantityInBasket 
    const [totalPrice, setTotalPrice] = useState(productLocal[0].quantityInBasket === 1? price: (productLocal[0].quantityInBasket)*price)

    const clickBtnAdd = () => {
        setTotalPrice(totalPrice + price)
    }

    const clickBtnMinus = () => {
        setTotalPrice(totalPrice === price? price: totalPrice - price)
    }

    const clickBtnMinusLocal = () => {
        setTotalPrice(totalPrice === price? price: totalPrice - price)    
        dispatch({type: "Change_products" , payload: [...productsLocal].map(prod => prod.id === product.id ? {...prod, quantityInBasket:  prod.quantityInBasket - 1}: prod)})
        localStorage.removeItem('goods')
        localStorage.setItem('goods', JSON.stringify([...productsLocal].map(prod => prod.id === product.id ? {...prod, quantityInBasket:  prod.quantityInBasket - 1}: prod)))
    }

    const clockBtnAddLocal = () => {
        setTotalPrice(totalPrice + price)
        dispatch({type: "Change_products" , payload: [...productsLocal].map(prod => prod.id === product.id ? {...prod, quantityInBasket:  prod.quantityInBasket + 1}: prod)})
        localStorage.removeItem('goods')
        localStorage.setItem('goods', JSON.stringify([...productsLocal].map(prod => prod.id === product.id ? {...prod, quantityInBasket:  prod.quantityInBasket + 1}: prod)))
    }

    const addTotalPriceInBasket = () =>{
        dispatch({type: "Change_products" , payload: [...productsLocal].map(prod => prod.id === product.id ? {...prod, inBasket: true}: prod)})
        localStorage.removeItem('goods')
        localStorage.setItem('goods', JSON.stringify([...productsLocal].map(prod => prod.id === product.id  ? {...prod, inBasket: true}: prod)))
    }

    const minusTotalPriceInBasket = () => {
        dispatch({type: "Change_products" , payload: [...productsLocal].map(prod => prod.id === product.id && prod.inBasket ? {...prod, inBasket: false}: prod)})
        localStorage.removeItem('goods')
        localStorage.setItem('goods', JSON.stringify([...productsLocal].map(prod => prod.id === product.id && prod.inBasket ? {...prod, inBasket: false}: prod)))
    }
    return(
        <div >
            <div className="product__price">{totalPrice} ₸</div>
            <Counter  
                number={quantityInBasket} 
                id='product__counter' 
                clickBtn={() => product.inBasket? clickBtnAdd(): clockBtnAddLocal()}
                clickBtnMinus={() => product.inBasket? clickBtnMinus(): clickBtnMinusLocal()}
            />
            {productLocal[0].inBasket
                ? <MyBtn classes="btn__product_basket" id='in_basket'  onClick={() => minusTotalPriceInBasket()}>
                    <p>ИЗ КОРЗИНЫ</p>
                    <img src={basket_yellow} alt="" />
                    </MyBtn>
                :<MyBtn classes="btn__product_basket" onClick={() => addTotalPriceInBasket()}>
                    <p>В КОРЗИНУ</p> 
                    <img src={basket} alt="" />
                </MyBtn>
            }
        </div>
    )
}

export default CountAndPriceAndBasketBtn