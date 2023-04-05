import React, {FC, useState} from "react";
import {Link} from "react-router-dom";
import CountAndPriceAndBasketBtn from "../components/CounterAndPriceAndBasketBtn";
import { Product } from "../types/typeProducts";
import LocationPages from "../UI/LocationPages/LocationPages";

import btn_back from '../images/main/btn_back.svg'
import box from '../images/main/box.svg'
import share from '../images/main/share.svg'
import download from '../images/main/bxs-download.svg'
import { useSelector } from "react-redux";

const ProductPage: FC = () => {
    const idPropuct = +window.location.pathname.replace("/sultan-react-typescript/", "");

    const productsLocal = useSelector((state:any) => state.products)
    const product = productsLocal.filter((product: Product) => product.id === idPropuct)[0]
    const [stateDescriptionAndCharacteristics, setStateDescriptionAndCharacteristics] = useState({description: false, characteristics: false})

    return (
        <main className="catalog">
            <div className="product__container _container">
                <div className="product__btn_back">
                <button><div><img src={btn_back}/></div>Назад</button>
                </div>
                <LocationPages id='catalog__location'>
                    <Link to="/Catalog">Каталог</Link>
                    <Link to="/product/:id" id='location_active'>{product.brend}</Link>
                </LocationPages>
                <div className="product__box">
                    <div className="product__img">
                        <img src={product.url} alt="photo product"/>
                    </div>
                    <div className="product__info">
                        {product.inStock
                            ? <p className="product__inStock">В наличии</p>
                            : <p className="product__inStock_not">Нет наличии</p>
                        }
                        <h1>{product.brend}</h1>
                        <div className="product__size">
                            <img src={box} alt="box" />
                            {product.weight}
                        </div>
                        <div className="product__btns_basket">
                            <CountAndPriceAndBasketBtn
                                price={product.price}
                                product={product}
                            />
                        </div>
                        <div className="product__btns">
                            <button>
                                <img src={share}/>
                            </button>
                            <button className="btn__action"><p>При покупке от <span>10 000 ₸</span> бесплатная <br /> доставка по Кокчетаву и области</p></button>
                            <button>Прайс-лист <img src={download} alt="download" /></button>
                        </div>
                        <div className="product_text">
                            <p>Производитель: <span>{product.manufacturer}</span></p>
                            <p>Бренд: <span>{product.brend}</span></p>
                            <p>Штрихкод: <span>{product.id}</span></p>
                            <div className="product__info_description" id={stateDescriptionAndCharacteristics.description? 'description__active': ''}>
                                <button onClick={() => setStateDescriptionAndCharacteristics({...stateDescriptionAndCharacteristics, description: !stateDescriptionAndCharacteristics.description})}>Описание <div></div></button>
                                <p>{product.description}</p>
                            </div>
                            <div className="product__characteristics" id={stateDescriptionAndCharacteristics.characteristics? 'characteristics__active': ''}>
                                <button onClick={() => setStateDescriptionAndCharacteristics({...stateDescriptionAndCharacteristics, characteristics: !stateDescriptionAndCharacteristics.characteristics})}>Характеристики <div></div></button>
                                <p>Производитель: <span>{product.manufacturer}</span></p>
                                <p>Бренд: <span>{product.brend}</span></p>
                                <p>Штрихкод: <span>{product.id}</span></p>
                                <p>Вес: <span>{product.weight}</span></p>
                                <p>Объем: <span>{product.volume}</span></p>
                                <p>Тип ухода: <span>{product.type.join(', ')}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </main>
    )
}

export default ProductPage