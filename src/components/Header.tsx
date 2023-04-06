import React, {FC} from "react";
import Basket from "./Basket";
import MyNavication from "../UI/MyNavigation/MyNavigation";
import MyForm from "../UI/MyForm/MyForm";
import {Link} from "react-router-dom";

import icons_location from '../images/header/icons_location.svg'
import menu from '../images/header/menu-alt.svg'
import message from '../images/header/message.svg'
import Logo from '../images/header/Logo.svg'
import Frame from '../images/header/Frame.svg'
import search from '../images/header/search.svg'
import photo from '../images/header/photo.png'
import download from '../images/header/download.svg'
import search_min from '../images/header/search_min.svg'
import Frame_min from '../images/header/Frame_min.svg'

const Header: FC = () => {

    return(
        <header className='header'>
        <div className='header__top_container _container'>
          <div className='header__box'>
            <div className='header__location'>
              <img src={icons_location} alt="icon location" />
              <p>г. Кокчетав, ул. Ж. Ташенова 129Б <br/>
                <span>(Рынок Восточный)</span>
              </p>
            </div>
            <div className='header__connection'>
              <img src={message} />
              <p>opt.sultan@mail.ru<br/>
                <span>На связи в любое время</span>
              </p>
            </div>
          </div>
            <MyNavication classUl='menu__list' classNav='header__menu menu' items={[
                {href:'', classA: 'menu__link', value: 'О компании'},
                {href:'', classA: 'menu__link', value: 'Доставка и оплата'},
                {href:'', classA: 'menu__link', value: 'Возврат'},
                {href:'', classA: 'menu__link', value: 'Контакты'}
            ]}/>
          <button className='header__burger'><img src={menu} alt="menu" /></button>
        </div>
        <hr/>
        <div className='header__bottom_container _container'>
          <button className='header__burger_bottom'><img src={menu} alt="menu" /></button>
          <Link data-testid='admin-link' to='/Admin' className='header__logo'>
            <img src={Logo} alt="logo sultan" />
          </Link>
          <Link data-testid='catalog-link' to="/Catalog" className="header__catalog">Каталог <img src={Frame}/></Link>
          <MyForm classes='header__search' placeholder="Поиск..." src={search}/>
          <div className='header__contact'>
            <p>+7 (777) 490-00-91 <br />
              <span>время работы: 9:00-20:00</span><br />
              <span>Заказать звонок</span>
            </p>
            <img src={photo} alt="photo" />
          </div>
          <div className='header__price_box'>
            <a href="" className='header_price'>
              Прайс-лист
              <img src={download} alt="download price" />
            </a>
          </div>
          <Basket classes="header__basket"/>
        </div>
        <hr />
        <div className='header__minWidth'>
          <div>
            <Link to="/Catalog" className='header__catalog_min'><img src={search_min} />Каталог</Link>
            <a href="" className='header__search_min'><img src={Frame_min} />Поиск</a>
          </div>
          <hr />
        </div>
      </header>
    )
}

export default Header