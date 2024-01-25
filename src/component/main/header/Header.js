
import clsx from 'clsx';
import { useState, useRef } from 'react';
import Search from '~/component/base/search';
import Tippy from '@tippyjs/react/headless';
import Category from '../category/Category';
import { AngleDown, AngleRight } from 'icon';
import Container from '~/component/base/container/Container';
import Menu from '~/component/base/menu/Menu';
function Header() {
    const [category, setCategory] = useState(false);
    const categoryPanel = useRef();
    function categoryToggle(instance) {
        setCategory((category) => !category);
        console.log(instance);
        if (category) {
        }
    }
    return (
        <div className=" fixed z-header w-full top-0 bg-white">
            <Container>
                <div className={clsx("h-20 flex items-center justify-between")}>
                    <div className='flex items-center'>
                        <h1 className="max-ssm:text-xl inline-block mr-5 mb-2">LogoHere</h1>
                        <Search />
                    </div>
                    <Menu className="w-full flex-1 justify-evenly" />
                    <Tippy
                        placement="bottom-end"
                        trigger="click"
                        interactive
                        render={(attrs) => (
                            <div {...attrs} className="w-full max-w-screen-xl" tabIndex={-1}>
                                <Category />
                            </div>
                        )}
                    >
                        <div className="flex items-start">
                            <button
                                className="p-1 flex flex-row-reverse text-blue-900 bg-gradient-to-l from-cyan-100 to-white flex items-center"
                                onClick={() => {
                                    setCategory((category) => !category);
                                }}
                            >
                                {category ? <AngleDown /> : <AngleRight />}
                                <span className="max-lg:hidden xl:max-2xl:inline-block">Category</span>
                            </button>
                        </div>
                    </Tippy>
                </div>
            </Container>
        </div>
    );
}

export default Header;
