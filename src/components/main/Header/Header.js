import clsx from "clsx";
import style from './style.module.scss';
import TopHeader from "./TopHeader";
import MenuBar from "./MenuBar";
function Header() {
    return (
        <>
            <TopHeader className={clsx("max-w-7xl mx-auto pt-3")} />
            <div className={clsx("max-w-7xl mx-auto sticky top-0 z-10 bg-white border-b border-black-500 mb-4")}><MenuBar /></div>
        </>);
}

export default Header;