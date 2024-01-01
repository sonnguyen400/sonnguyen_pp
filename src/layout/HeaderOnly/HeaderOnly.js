import Header from '~/components/main/Header';
function HeaderOnly({children}) {
    return ( <>
                <Header/>
                {children}
            </> );
}

export default HeaderOnly;