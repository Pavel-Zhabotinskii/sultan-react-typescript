import React, {FC} from "react";
import MyForm from "../UI/MyForm/MyForm";
import MyNavication from "../UI/MyNavigation/MyNavigation";

import Logo_white from '../images/footer/Logo_white.svg'
import arrow from '../images/footer/arrow.svg'
import download from '../images/footer/download.svg'
import whatsApp from '../images/footer/whatsApp.svg'
import telegram from '../images/footer/telegram.svg'
import Visa from '../images/footer/Visa.png'
import mastercard from '../images/footer/mastercard.png'





const Footer: FC = () => {

    return(
        <footer className="footer">
        <div className="footer__container _container">
          <div className="footer__description">
            <a href=""><img src={Logo_white} alt="logo"/></a>
            <p>Компания «Султан» — снабжаем <br /> розничные магазины товарами <br />
                "под ключ" в Кокчетаве и Акмолинской <br /> области
            </p>
            <span>Подпишись на скидки и акции</span>
            <MyForm classes="footer__email" placeholder="Введите ваш E-mail" src={arrow}/>
          </div>
          <div className="footer__menu">
            <h3>Меню сайта:</h3>
            <MyNavication classUl='footer__menu_list'  items={[
                {href:'', classA: 'footer__menu_link', value: 'О компании'},
                {href:'', classA: 'footer__menu_link', value: 'Доставка и оплата'},
                {href:'', classA: 'footer__menu_link', value: 'Возврат'},
                {href:'', classA: 'footer__menu_link', value: 'Контакты'}
            ]}/>
          </div>
          <div className="footer__menu">
            <h3>Категории:</h3>
            <MyNavication classUl='footer__menu_list' items={[
                {href:'', classA: 'footer__menu_link', value: 'Бытовая химия'},
                {href:'', classA: 'footer__menu_link', value: 'Косметика и гигиена'},
                {href:'', classA: 'footer__menu_link', value: 'Товары для дома'},
                {href:'', classA: 'footer__menu_link', value: 'Товары для детей и мам'},
                {href:'', classA: 'footer__menu_link', value: 'Посуда'}
            ]}/>
          </div>
          <div className="footer__price">
            <h3>Скачать прайс-лист:</h3>
            <a href="" className="footer__price_btn">
              Прайс-лист
              <img src={download} alt="download price" />
            </a>
            <p>Связь в мессенджерах:</p>
            <a href=""><img src={whatsApp} alt="whatsApp" /></a>
            <a href=""><img src={telegram} alt="telegram" /></a>
          </div>
          <div className="footer__contacts">
            <h3>Контакты:</h3>
            <a href="tel:7774900091">+7 (777) 490-00-91 </a>
            <p>время работы: 9:00-20:00 <br />
              <span>Заказать звонок</span>
            </p>
            <a href="mailto:opt.sultan@mail.ru ">opt.sultan@mail.ru</a>
            <p>На связи в любое время</p>
            <div>
              <a href=""><img src={Visa} alt="visa" /></a>
              <a href=""><img src={mastercard} alt="mastercard" /></a>
            </div>
            
          </div>
        </div>
      </footer>
    )
}

export default Footer