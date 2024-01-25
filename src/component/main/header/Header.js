import Button from '~/component/base/button/Button';
import style from './style.module.scss';
import clsx from 'clsx';
import { useState, useRef } from 'react';
import Search from '~/component/base/search';
import { NewF, NewS, BellF, BellS, BagS, BagF } from 'icon';
import Tippy from '@tippyjs/react/headless';
import Category from '../category/Category';
import { AngleDown, AngleRight } from 'icon';
function Header({ className }) {
    const [category, setCategory] = useState(false);
    const categoryPanel = useRef();
    function categoryToggle(instance) {
        setCategory((category) => !category);
        console.log(instance);
        if (category) {
        }
    }
    return (
        <div className=" fixed z-50 w-full top-0 bg-white">
            <div className={clsx('max-w-screen-xl mx-auto pt-3')}>
                <div className={clsx(style.topHeader, className)}>
                    <h1 className="ssm:text-xl">LogoHere</h1>
                    <Search />
                    <div className="flex items-center">
                        <Button
                            icon={{
                                content: <NewS />,
                                react: <NewF />,
                            }}
                            className="p-1 flex items-stretch w-max"
                        >
                            <span className="max-lg:hidden xl:max-2xl:inline-block">News</span>
                        </Button>
                        <Button
                            icon={{
                                content: <BellS />,
                                react: <BellF />,
                            }}
                            className="p-1 flex flex-row"
                        >
                            <span className="max-lg:hidden xl:max-2xl:inline-block">Notification</span>
                        </Button>
                        <Button
                            icon={{
                                content: <BagS />,
                                react: <BagF />,
                            }}
                            className="p-1 flex flex-row"
                            href="./cart"
                        >
                            <span className="max-lg:hidden xl:max-2xl:inline-block">Cart</span>
                        </Button>
                        <Button
                            icon={{
                                content: <BagS />,
                                react: <BagS />,
                            }}
                            className="p-1 flex flex-row"
                        >
                            <span className="max-lg:hidden xl:max-2xl:inline-block">Personal</span>
                        </Button>
                    </div>
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
            </div>
        </div>
    );
}

export default Header;
