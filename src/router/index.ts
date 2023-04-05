import Admin from "../pages/Admin";
import ProductPage from "../pages/ProductPage";
import BasketPage from "../pages/basketPage";
import Catalog from "../pages/catalog";

export const routes = [
    { path: '/Catalog', component: Catalog},
    { path: '/', component: Catalog},
    { path: '/Basket', component: BasketPage},
    { path: '/:id', component: ProductPage},
    { path: '/Admin', component: Admin},
]
