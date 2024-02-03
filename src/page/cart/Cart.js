import clsx from 'clsx';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderLess from '~/layout/headerless/HeaderLess';

function Cart({ children }) {
    const [tabIndex, setTabIndex] = useState();
    const curTab = useMemo(() => {
        switch (window.location.pathname) {
            case '/cart':
                setTabIndex(0);
                break;
            case '/cart/verifying':
                setTabIndex(1);
                break;
            case '/cart/delivering':
                setTabIndex(2);
                break;
            case '/cart/delivered':
                setTabIndex(3);
                break;
            case '/cart/refund':
                setTabIndex(4);
                break;
            default:
                setTabIndex(0);
                break;
        }
        console.log(window.location.pathname);
    }, []);
    return (
        <HeaderLess>
            <div className="flex justify-stretch items-center relative pb-2 z-[1] ">
                <div
                    className={clsx(
                        'p-2 max-ssm:w-20 w-40 h-full absolute border-b-4 border-blue-400 bg-transparent z-0 duration-700',
                    )}
                    style={{ left: `${tabIndex * 160}px`, transitionProperty: 'all' }}
                ></div>
                <Link
                    to={'/cart'}
                    onClick={() => {
                        setTabIndex(0);
                    }}
                    className="inline-block p-2 max-ssm:w-20 w-40 text-center z-10 text-lg cursor-pointer"
                >
                    Cart
                </Link>
                <Link
                    to="/cart/verifying"
                    onClick={() => {
                        setTabIndex(1);
                    }}
                    className="inline-block p-2 max-ssm:w-20 w-40 text-center z-10 text-lg cursor-pointer"
                >
                    Verifying
                </Link>
                <Link
                    to={'/cart/delivering'}
                    onClick={() => {
                        setTabIndex(2);
                    }}
                    className="inline-block p-2 max-ssm:w-20 w-40 text-center z-10 text-lg cursor-pointer"
                >
                    Delivering
                </Link>
                <Link
                    to={'/cart/delivered'}
                    onClick={() => {
                        setTabIndex(3);
                    }}
                    className="inline-block p-2 max-ssm:w-20 w-40 text-center z-10 text-lg cursor-pointer"
                >
                    Delivered
                </Link>
                <div
                    onClick={() => {
                        setTabIndex(4);
                    }}
                    className="inline-block p-2 max-ssm:w-20 w-40 text-center z-10 text-lg cursor-pointer"
                >
                    Refund
                </div>
            </div>
            <div className="mt-4">{children}</div>
        </HeaderLess>
    );
}

export default Cart;
