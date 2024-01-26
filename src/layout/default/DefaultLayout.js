import Container from '~/component/base/container/Container';
import Footer from '~/component/main/footer';
import Header from '~/component/main/header/Header';
import QuickCategory from '~/component/main/quickCategory';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <QuickCategory className="mt-20" />
            <Container>
                <div className='mt-20'>
                    {children}
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default DefaultLayout;
