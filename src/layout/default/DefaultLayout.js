import Header from '~/component/main/header/Header';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}

export default DefaultLayout;
