import Header from "~/components/main/Header";
import Sidebar from "~/components/main/Sidebar";
function DefaultLayout({ children }) {
    return (<>
        <Header />
        {children}
        <Sidebar />
    </>);
}

export default DefaultLayout;