import artfact from '../images/main/art&fact.webp'
import chekasso from '../images/main/chekasso.webp'
import synergetic from '../images/main/synergetic.webp'
import lador from '../images/main/lador.webp'
import centella from '../images/main/centella.webp'
import IN2BEAUTY from '../images/main/IN2BEAUTY.webp'
import Tide from '../images/main/Tide.webp'
import Gillette from '../images/main/Gillette.webp'
import Persil from '../images/main/Persil.webp'
import ICHTHYONELLA from '../images/main/ICHTHYONELLA.webp'
import Himalaya from '../images/main/Himalaya.webp'
import Mustela from '../images/main/Mustela.webp'
import Lador2 from '../images/main/Lador2.webp'
import ROCS from '../images/main/R.O.C.S.webp'
import GilletteP from '../images/main/GilletteP.webp'
import ANAPHASE from '../images/main/ANAPHASE.webp'
import Borodatos from '../images/main/Borodatos.webp'
import { Product } from '../types/typeProducts'

  
  interface Iaction{
    type: string;
    payload: any,
  }
  
  interface IdefaultState{
    products: Product[],
  }
  
  
  const JSONproducts = JSON.stringify([
    {
      url: artfact, 
      price: 470, 
      manufacturer: 'ART&FACT', 
      brend:'ART&FACT', 
      description: 'Очищающая энзимная пудра для умывания ART&FACT содержит папаин,  который деликатно отшелушивает, обеспечивает глубокое очищение кожи лица, препятствует образованию сальных пробок и черных точек. Комплекс мягких ПАВ очищает кожу от пыли, пота, себума и других загрязнений из окружающей среды, не пересушивая ее, а аллантоин смягчает кожу и снимает раздражения.',
      weight: '70g',
      volume: '70ml',
      id: 4604049097548,
      type: ['Уход за лицом'],
    },
    {
      url: chekasso, 
      price: 525, 
      manufacturer: 'Chekasso', 
      brend:'Chekasso', 
      description:'Благодаря своей нежной текстуре масло-суфле идеально впитывается, мгновенно смягчает, увлажняет, питает и восстанавливает вашу кожу. Взбитое масло Ши, лучший друг для вашей кожи.',
      weight: '200g',
      volume: '200ml',
      id: 4604049097549,
      type: ['Уход за телом'],
    },
    {
      url: synergetic, 
      price: 249, 
      manufacturer: 'Synergetic', 
      brend:'Synergetic', 
      description:'Натуральный крем для рук и тела SYNERGETIC "Сандал и ягоды можжевельника" обеспечивает эффективное увлажнение и дарит коже ощущение комфорта. Изомерат сахарида регулирует увлажненность кожи, обеспечивает сохранение влаги и восстанавливает барьерные функции кожи.Комплекс натуральных масел ши, макадамии и сладкого миндаля интенсивно питает и смягчает сухую и чувствительную кожу, делая ее идеально гладкой и шелковистой',
      weight: '380g',
      volume: '380ml',
      id: 4604049397551,
      type: ['Уход за телом', 'Уход за лицом', 'Уход за ногами'] ,
    },
    {
      url: lador, 
      price: 408, 
      manufacturer: 'Lador', 
      brend:'Lador', 
      description:'Средства для ухода за волосами и кожей головы от Lador – это профессиональные линии, сочетающие традиции восточной медицины с передовыми разработками корейских ученых.',
      weight: '200g',
      volume: '200ml',
      id: 4604049097551,
      type: ['Уход за волосвми'],
    },
    {
      url: centella, 
      price: 470, 
      manufacturer: 'BAIZTON', 
      brend:'BAIZTON', 
      description:'Компактные ночные маски-саше для лица с центеллой азиатской - ваш верный помощник в процессе поддержания красоты и молодости кожи. Ночная восстанавливающая маска способствует активному увлажнению и питанию эпидермиса, насыщает кожу аминокислотами и витаминами, способствует выработке коллагена',
      weight: '80g',
      volume: '80ml',
      id: 4604049097552,
      type: ['Уход за лицом'],
    },
    {
      url: IN2BEAUTY, 
      price: 281, 
      manufacturer: 'IN2BEAUTY', 
      brend:'IN2BEAUTY', 
      description:'Смягчает и увлажняет кожу, устраняет шелушения и раздражения.Способствует регенерации клеток, оказывает антивозрастное действие.',
      weight: '460g',
      volume: '460ml',
      id: 4604049097553,
      type: ['Уход за волосами'],
    },
    {
      url: Tide, 
      price: 1492, 
      manufacturer: 'Tide', 
      brend:'Tide', 
      description:'Порошок для стирки Tide Аквапудра Color для цветных тканей позволяет поддерживать одежду всей семьи в идеальной чистоте и отличном состоянии. Стиральный порошок Tide Аквапудра Color прекрасно справляется даже с самыми трудно выводимыми пятнами на одежде, сохраняя яркие цвета стирка за стиркой.',
      weight: '12000g',
      volume: '12000ml',
      id: 4604049097538,
      type: ['Гигиеническая продукция'],
    },
    {
      url: Gillette, 
      price: 492, 
      manufacturer: 'Gillette', 
      brend:'Gillette', 
      description:'Одноразовая бритва 8 шт.',
      weight: '74g',
      volume: '74ml',
      id: 4604049097561,
      type: ['Уход за лицом', 'Средства для бритья'],
    },
    {
      url: Persil, 
      price: 960, 
      manufacturer: 'Persil', 
      brend:'Persil', 
      description:'Сохраняет первозданную чистоту и яркость белых вещей. Отстирывает сложные пятна. Дарит вещам свежий аромат от Vernel, который сохраняется надолго.Подходит для всех типов тканей, кроме шерсти и шелка',
      weight: '2600g',
      volume: '2600ml',
      id: 4604049097456,
      type: ['Гигиеническая продукция'],
    },
    {
      url: ICHTHYONELLA, 
      price: 250, 
      manufacturer: 'ICHTHYONELLA', 
      brend:'ICHTHYONELLA', 
      description:'Гель для душа без сульфатов рисовым молочко и манго с индексом натуральности более чем 98%. Косметическое средство для ухода за телом на основе натуральных кокосовых ПАВ, которые создают воздушную пену для эффективного и бережного очищения кожи',
      weight: '800g',
      volume: '800ml',
      id: 4604049097576,
      type: ['Уход за телом'],
    },
    {
      url: Himalaya, 
      price: 316, 
      manufacturer: 'Himalaya Since', 
      brend: 'Himalaya Since', 
      description: 'HIMALAYA – косметика индийского происхождения. В основе лежит учение аюрведы – индийской науки о здоровье и долголетии, насчитывающей более 5 000 лет. Деятельность Himalaya основана на богатейших традициях изучения природы и свойств растений.',
      weight: '150g',
      volume: '150ml',
      id: 4604049098375,
      type: ['Уход за лицом', 'Гигиена полости рта'],
    },
    {
      url: GilletteP, 
      price: 245, 
      manufacturer: 'Gillette', 
      brend:'Gillette', 
      description: 'Мужская пена для бритья Gillette Classic Sensitive для чувствительной кожи, 200 мл обладает легким ароматом, легко наносится и полностью смывается, позволяя мужчинам наслаждаться процедурой бритья, как и много лет назад. Используйте пену для бритья Gillette Classic Sensitive для мужчин с любой бритвой Gillette. Простота. Чистота. Классика.',
      weight: '200g',
      volume: '200ml',
      id: 4604049097123,
      type: ['Уход за лицом', 'Средства для бритья'],
    },
    {
      url: ROCS, 
      price: 221, 
      manufacturer: 'R.O.C.S', 
      brend:'R.O.C.S',
      description: 'R. O. C. S. Junior "Фруктовая радуга" Зубная паста для детей в возрасте от 6 до 12 лет разработана специально для детей в период смены молочных зубов на постоянные. Двойной экстракт коры осины и ксилит защищают зубы и десны от воспаления и болезнетворных бактерий.', 
      weight: '60g',
      volume: '60ml',
      id: 4604049097599,
      type: ['Уход за лицом', 'Гигиена полости рта'],
    },
    {
      url: Lador2, 
      price: 1518, 
      manufacturer: 'Lador', 
      brend:'Lador', 
      description: 'В набор входят: восстанавливающий шампунь для сухих, поврежденных и окрашенных волос с аргановым маслом и коллагеном Lador Damaged Protector Acid Shampoo 900 мл и Защитный кондиционер для поврежденных волос Lador Damage Protector Acid Conditioner 900 мл.',
      weight: '1800g',
      volume: '1800ml',
      id: 4604049097777,
      type: ['Уход за волосами',],
    },
    {
      url: Mustela, 
      price: 781, 
      manufacturer: 'Mustela', 
      brend:'Mustela', 
      description: 'Шампунь, который помогает справиться с проблемой "молочных корочек" в 90% случаев и, при регулярном использовании, предотвратить их повторное появление!* ',
      weight: '150g',
      volume: '150ml',
      id: 4604049034324,
      type: ['Уход за волосами'],
    },
    {
      url: ANAPHASE, 
      price: 1649, 
      manufacturer: 'ANAPHASE', 
      brend:'ANAPHASE', 
      description: 'Ducray Anaphase+ разработан для ухода за ослабленными, выпадающими волосами. Укрепляет волосы и наполняет их жизненной силой. Подготавливает кожу головы к нанесению лечебных средств. Возвращает объем, силу и энергию. Придает дополнительный объем волосам, склонным к выпадению. ',
      weight: '400g',
      volume: '400ml',
      id: 4604049908978,
      type: ['Уход за телом'],
    },
    {
      url: Borodatos, 
      price: 396, 
      manufacturer: 'Borodatos', 
      brend:'Borodatos', 
      description: 'Шампунь обладает высокой адсорбирующей способностью и эффективно очищает кожу головы от загрязнений. Средство дарит волосам приятное ощущение легкости, а коже головы свежесть. Шампунь-баланс регулирует работу сальных желез, уменьшая жирность у корней, но при этом не пересушивая волосы.',
      weight: '400g',
      volume: '400ml',
      id: 5604049097548,
      type: ['Уход за вололсами'],
    },
  ])
  
  const producrsFromLocalStorage = localStorage.getItem('goods')
  
  const defaultState: IdefaultState = {
    products:  producrsFromLocalStorage && JSON.parse(producrsFromLocalStorage).length > 0
      ? [...JSON.parse(producrsFromLocalStorage!)]
      : [...JSON.parse(JSONproducts)].map(product => product && {...product, inStock: true, inBasket: false, quantityInBasket: 1}),
  }
  
export const reducer = (state = defaultState, action: Iaction):IdefaultState => {
    switch(action.type){
      case "Change_products":
        return {...state, products: action.payload}
      
      default: 
        return state
    }
  }