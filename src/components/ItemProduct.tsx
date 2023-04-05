import React, {FC} from "react";
import { useNavigate } from "react-router-dom";
import { Product} from "../types/typeProducts";
import MyBtn from "../UI/MyBtn/MyBtn";
import box from '../images/main/box.svg'
import basket_yellow from '../images/main/basket_yellow.svg'
import basket from '../images/main/basket.svg'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

interface IItemProduct {
    sortProducts: Product[],
}

const ItemProduct: FC<IItemProduct> = ({sortProducts}) => {
    const dispatch = useDispatch()
    const pr = useSelector((state:any) => state.products)
    const router = useNavigate()

    const clickBtn = (id:number) => {
        const value = {...[...pr].filter(product => product.id === id)[0]}
        
        if(pr && pr.length>0){
            localStorage.removeItem('goods')
            const newArr = [...pr].map(product => product.id === id ? {...product, inBasket: !value.inBasket} : product)
            dispatch({type: "Change_products" , payload: newArr})
            localStorage.setItem('goods', JSON.stringify(newArr))
        }
    }

    return(
        <div className="products__page">
                {sortProducts.length > 0 ?
                    sortProducts.map((product: Product) => 
                      <div key={product.id} className="products__item">
                        <div className="product__photo" onClick={() => router(`/${product.id}`)}>
                          <img src={product.url} alt="product" />
                          <div>
                            <img src={box} alt="box" />
                            {product.weight}
                          </div>
                        </div>
                        <div className="product__description"><span>{product.brend}</span> {product.description}</div>
                        <p><span>Штрихкод:</span>{product.id}</p>
                        <p><span>Производитель:</span>{product.manufacturer}</p>
                        <p><span>Бренд:</span>{product.brend}</p>
                        <p><span>Тип ухода:</span>{product.type.join(', ')}</p>
                        <div>
                          {product.price} ₸
                          {product.inBasket
                                ? <MyBtn classes="btn__product" id='in_basket'  onClick={() => clickBtn(product.id)}>
                                    <p>ИЗ КОРЗИНЫ</p>
                                    <img src={basket_yellow} alt="" />
                                 </MyBtn>
                                :<MyBtn classes="btn__product" onClick={() => clickBtn(product.id)}>
                                    <p>В КОРЗИНУ</p> 
                                    <img src={basket} alt="" />
                                </MyBtn>
                            }
                        </div>
                      </div>
                      )
                    : <h1>Продуктов нет</h1>
                  }
        </div>
    )
}

export default ItemProduct