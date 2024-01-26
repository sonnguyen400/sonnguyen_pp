import Home from '~/page/home';
import Cart from "~/page/cart";
import ProductDetail from "~/page/productDetail";
import ProductList from "src/page/product/ProductList";
import HeaderLess from '~/layout/headerless/HeaderLess';
import CheckOut from '~/page/checkout/Checkout';

const publicRouting = [
    { path: '/', component: Home },
    { path: '/product', component: ProductDetail },
    { path: '/cart', component: Cart, layout: HeaderLess },
    { path: '/checkout', component: CheckOut, layout: HeaderLess },
    { path: '/list', component: ProductList }

]
const adminRouter = [];
export { publicRouting, adminRouter };
