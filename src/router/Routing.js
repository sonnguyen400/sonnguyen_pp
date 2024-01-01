import Login from "~/page/auth/login";
import Register from "~/page/auth/register";
import Cart from "~/page/cart";
import Category from "~/page/category";
import HomePage from "~/page/home";
import OrderProduct from "~/page/orderProduct";
import ProductDetail from "~/page/productDetail";
import Purchase from "~/page/purchase";
const publicRouting = [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/', component: HomePage },
    { path: '/category', component: Category },
    { path: '/product', component: ProductDetail },
    { path: '/cart', component: Cart },
    { path: '/order', component: OrderProduct },
    { path: '/purchase', component: Purchase }

]
const adminRouter = [

]
export { publicRouting, adminRouter };