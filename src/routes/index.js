import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import TypeProductpage from "../pages/TypeProductpage/TypeProductpage";
import OrderPage from './../pages/OrderPage/OrderPage';
import ProductsPage from './../pages/ProductsPage/ProductsPage';

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path:'/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path:'/products',
        page: ProductsPage,
        isShowHeader: true
    },
    {
        path:'/type',
        page: TypeProductpage,
        isShowHeader: true
    },
    {
        path:'*',
        page: NotFoundPage
    }
]