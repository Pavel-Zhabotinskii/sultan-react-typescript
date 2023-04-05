export type Product = {
    url: string,
    price: number,
    manufacturer: string,
    brend: string,
    description: string,
    weight: string,
    volume: string,
    id: number,
    type: string[],
    inStock: boolean,
    inBasket: boolean,
    quantityInBasket: number
}

export type TypeOfCare = {
    type: string,
    state: boolean
}

export type InputSearchPrice ={
    min: string,
    max: string
}

export type BrentAndCheked ={
    brend: string,
    checket: boolean
}
