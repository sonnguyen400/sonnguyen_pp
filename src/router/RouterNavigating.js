import Home from '~/page/home';
import Cart from '~/page/cart';
import CartList from '~/page/cart/CartList/CartList';
import ProductDetail from '~/page/productDetail';
import ProductList from 'src/page/product/ProductList';
import HeaderLess from '~/layout/headerless/HeaderLess';
import CheckOut from '~/page/checkout/Checkout';
import ProfilePage from '~/page/profile/ProfilePage';
import DashBoard from '~/page/admin/dashboard';
import AdminLayout from '~/layout/admin';
import ProductManage from '~/page/admin/productManage';
import AddProduct from '~/page/admin/addProduct/AddProduct';

const publicRouting = [
    { path: '/', component: Home },
    { path: '/product', component: ProductDetail },
    { path: '/checkout', component: CheckOut, layout: HeaderLess },
    { path: '/list', component: ProductList },
    { path: '/profile', component: ProfilePage, layout: HeaderLess },
    { path: '/cart', component: CartList, layout: Cart },
    { path: '/cart/verifying', component: CartList, layout: Cart },
    { path: '/cart/delivering', component: CartList, layout: Cart },
    { path: '/cart/delivering', component: CartList, layout: Cart },
];
const adminRouter = [
    { path: '/admin', component: DashBoard, layout: AdminLayout },
    { path: '/admin/product-manage', component: ProductManage, layout: AdminLayout },
    { path: '/admin/product-manage/add', component: AddProduct, layout: AdminLayout },
];
export { publicRouting, adminRouter };
