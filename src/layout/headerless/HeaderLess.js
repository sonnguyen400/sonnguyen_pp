import Header from '~/component/main/header';
import Footer from '~/component/main/footer/Footer';
import Container from '~/component/base/container/Container';
function HeaderLess({ children }) {
    return (
        <>
            <Header />
            <div className="mt-20">
                <Container>
                    <div className="pt-2">{children}</div>
                </Container>
            </div>
            <Footer />
        </>
    );
}

export default HeaderLess;
