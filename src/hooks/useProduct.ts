import { useMemo } from "react"
import { InputSearchPrice, Product, TypeOfCare } from "../types/typeProducts"

export const useSortedProduckt = (products: Product[], sort: string) =>{
    const sortedProducts = useMemo(()=>{
        if(sort){
          if(sort === 'price+') return [...products].sort((a, b) => a.price - b.price)
          if(sort === 'price-') return [...products].sort((a, b) => b.price - a.price)
          if(sort === 'brend-') return [...products].sort((a, b) => b.brend.localeCompare(a.brend))
          if(sort === 'brend+') return [...products].sort((a, b) => a.brend.localeCompare(b.brend))
        }
        return products;
    }, [sort, products])

    return sortedProducts
}

export const useSortedAndTypeOfCareProducts = (typeOfCare: TypeOfCare[], products:Product[], sort:string ) => {
    const sortedProducts = useSortedProduckt(products, sort)

    const sortedAndTypeOfCareProducts = useMemo(() => {
        const type:TypeOfCare[] = typeOfCare.filter(type => type.state)
    
        if(type.length > 0) return sortedProducts.filter(product => product.type.includes(type[0].type))
        return sortedProducts
    }, [typeOfCare, sortedProducts])

    return sortedAndTypeOfCareProducts
}


export const useSortedAndTupeOfCareAndPriceProducts = (inputSearchPrice: InputSearchPrice, typeOfCare: TypeOfCare[], products:Product[], sort:string) => {
    const sortedAndTypeOfCareProducts = useSortedAndTypeOfCareProducts(typeOfCare, products, sort)
    
    const sortedAndTupeOfCareAndPriceProducts = useMemo(() => {
        const min = inputSearchPrice.min
        const max = inputSearchPrice.max
    
        if(min && max) return sortedAndTypeOfCareProducts.filter(product => product.price > +min && product.price < +max)
        if(min) return sortedAndTypeOfCareProducts.filter(product => product.price > +min)
        if(max) return sortedAndTypeOfCareProducts.filter(product => product.price < +max)
    
        return sortedAndTypeOfCareProducts
    }, [sortedAndTypeOfCareProducts, inputSearchPrice])

    return sortedAndTupeOfCareAndPriceProducts
}

export const useSortedAndTupeOfCareAndPriceAndPaginationProducts = (inputSearchPrice: InputSearchPrice, typeOfCare: TypeOfCare[], products:Product[], sort:string, page: number) =>{
    const sortedAndTupeOfCareAndPriceProducts = useSortedAndTupeOfCareAndPriceProducts(inputSearchPrice, typeOfCare, products, sort)

    const poi = useMemo(() => {
        const start = page * 15 - 15
        const end = page * 15
        return sortedAndTupeOfCareAndPriceProducts.slice(start, end)
      }, [page, sortedAndTupeOfCareAndPriceProducts])

    return poi
}