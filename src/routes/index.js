import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
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
        path:'/:type',
        page: TypeProductpage,
        isShowHeader: true
    },
    {
        path:'/sign-in',
        page: SignInPage,
        isShowHeader: false
    },
    {
        path:'/sign-up',
        page: SignUpPage,
        isShowHeader: false
    },
    {
        path:'/product-details',
        page: ProductDetailsPage,
        isShowHeader: true
    },
    {
        path:'*',
        page: NotFoundPage
    }
]