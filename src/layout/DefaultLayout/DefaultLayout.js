import clsx from "clsx";
import Header from "~/components/main/Header";
import Sidebar from "~/components/main/Sidebar";
import style from "../style.module.scss";
function DefaultLayout({ children }) {
    return (<>
        <div className={clsx(style.header)}></div>
        <Header />
        {children}
        <Sidebar />
    </>);
}

export default DefaultLayout;