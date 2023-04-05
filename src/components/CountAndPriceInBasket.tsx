import React, {FC, useState} from "react";
import { Product} from "../types/typeProducts";
import Counter from "../UI/Counter/Counter";
import MyBtn from "../UI/MyBtn/MyBtn";
import Delete from '../images/main/Delete.svg'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


interface ICounterAndPrice{
    price: number,
    prod: Product,
}

const CountAndPriceInBasket: FC<ICounterAndPrice> = ({price, prod}) => {
    const [totalPrice, setTotalPrice] = useState(prod.quantityInBasket === 1? price: (prod.quantityInBasket)*price)
    const quantityInBasket = prod.quantityInBasket === 0? 1: prod.quantityInBasket 

    const dispatch = useDispatch()
    const productsLocal = useSelector((state:any) => state.products)

    const clickBtnAdd = () => {
        setTotalPrice(totalPrice + prod.price)
        dispatch({type: "Change_products" , payload: [...productsLocal].map(product => prod.id === product.id ? {...product, quantityInBasket:  product.quantityInBasket + 1}: product)})
        localStorage.removeItem('goods')
        localStorage.setItem('goods', JSON.stringify([...productsLocal].map(product => prod.id === product.id ? {...product, quantityInBasket:  product.quantityInBasket + 1}: product)))
    }

    const clickBtnMinus = () => {
        setTotalPrice(totalPrice === 1? price: totalPrice - price)
        dispatch({type: "Change_products" , payload: [...productsLocal].map(product => prod.id === product.id ? {...product, quantityInBasket:  product.quantityInBasket - 1}: product)})
        localStorage.removeItem('goods')
        localStorage.setItem('goods', JSON.stringify([...productsLocal].map(product => prod.id === product.id ? {...product, quantityInBasket:  product.quantityInBasket - 1}: product)))
    }

    const clickBtnDelete = (prod: Product) => {
        dispatch({type: "Change_products" , payload: [...productsLocal].map(product => prod.id === product.id ? {...product, inBasket: !prod.inBasket, quantityInBasket: 1}: product)})
        localStorage.removeItem('goods')
        localStorage.setItem('goods', JSON.stringify([...productsLocal].map(product => prod.id === product.id ? {...product, inBasket: !prod.inBasket, quantityInBasket: 1}: product)))
    }

    return(
        <div >
            <Counter  
                number={quantityInBasket} 
                id='item__counter' 
                clickBtn={() => clickBtnAdd()}
                clickBtnMinus={() => clickBtnMinus()}
            />
            <div className="item__price">{totalPrice + '₸'} </div>
            <MyBtn classes="item__delete" onClick={() => clickBtnDelete(prod)}>
                <img src={Delete} alt="" />
            </MyBtn>
        </div>
    )
}

export default CountAndPriceInBasket
