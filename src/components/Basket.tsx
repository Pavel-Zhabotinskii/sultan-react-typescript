import React, {FC} from "react";
import {Link} from "react-router-dom";
import basket from '../images/header/basket.svg'
import { Product } from "../types/typeProducts";
import { useSelector } from "react-redux";


interface IBasket {
    classes: string,
}

const Basket: FC<IBasket> = ({classes}) => {

    const pr = useSelector((state:any) => state.products)
    const quantityInBasket: Product[] = pr.length > 0 
        ? pr.filter((product: Product) => product.inBasket)
        : 0
    const money = quantityInBasket.length > 0
        ? quantityInBasket.map(prod => prod.price * prod.quantityInBasket) 
        : 0

    const totalMoney = money !== 0 ? money.reduce((a:number , b:number) => a + b, 0) : 0

    return(
        <div className={classes}>
            <Link to="/Basket"  data-testid='basket-link'>
              <img src={basket} alt="basket"/>
              <div>{quantityInBasket.length}</div>
            </Link>
            <p>Корзина <br />
            <span>{Math.ceil(totalMoney) + '₸'} </span>
            </p>
        </div>
    )
}

export default Basket