import clsx from "clsx";
import style from './style.module.scss';
import TopHeader from "./TopHeader";
import MenuBar from "./MenuBar";
function Header() {
    return (
        <div className="w-full pt-4" >
            <div className={clsx("header flex items-center mx-auto", style.header)}>
                <TopHeader />
                <MenuBar />
            </div>
        </div >);
}

export default Header;