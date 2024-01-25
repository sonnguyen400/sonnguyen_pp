import Container from '~/component/base/container/Container';
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
        </>
    );
}

export default DefaultLayout;
