import Home from '~/page/home';
// import Login from "~/page/auth/login";
// import Register from "~/page/auth/register";
// import Cart from "~/page/cart";
// import Category from "~/page/category";
// import OrderProduct from "~/page/orderProduct";
// import ProductDetail from "~/page/productDetail";
// import Purchase from "~/page/purchase";
// import ProductList from "src/page/product/ProductList";
// import HeaderOnly from "src/layout/HeaderOnly";
// const publicRouting = [
//     { path: '/login', component: Login },
//     { path: '/register', component: Register },
//     { path: '/', component: Home },
//     { path: '/category', component: Category },
//     { path: '/product', component: ProductDetail },
//     { path: '/cart', component: Cart, layout: HeaderOnly },
//     { path: '/order', component: OrderProduct },
//     { path: '/purchase', component: Purchase },
//     { path: '/list', component: ProductList }

// ]
const publicRouting = [{ path: '/', component: Home }];
const adminRouter = [];
export { publicRouting, adminRouter };
