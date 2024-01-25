import { useAfterEffect, useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import style from './style.module.scss';
import clsx from 'clsx';
function ScrollList({ children, className, leftBtn, rightBtn, ...props }) {
    const scrollList = useRef();
    useLayoutEffect(() => {
        const scrollToLeft = scrollList.current.querySelector('.left');
        const scrollToRight = scrollList.current.querySelector('.right');
        const list = scrollList.current.querySelector('.scrollList');
        const elementW = list.querySelector('div').offsetWidth;
        if (scrollToLeft) {
            scrollToLeft.addEventListener('click', (e) => {
                list.scroll({
                    top: 0,
                    left: list.scrollLeft + elementW,
                    behavior: 'smooth',
                });
            });
        }
        if (scrollToRight) {
            scrollToRight.addEventListener('click', (e) => {
                list.scroll({
                    top: 0,
                    left: list.scrollLeft - elementW,
                    behavior: 'smooth',
                });
            });
        }
    }, []);

    return (
        <div ref={scrollList} {...props} className={clsx('relative')}>
            {leftBtn === true ? (
                <button className="left bg-white aspect-square z-10 rounded-full absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 p-6 shadow-xl max-sm:hidden">
                    <i className="fi fi-br-angle-right"></i>
                </button>
            ) : (
                leftBtn
            )}
            {rightBtn === true ? (
                <button className="right bg-white aspect-square z-10 rounded-full absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 p-6 shadow-xl max-sm:hidden">
                    <i className="fi fi-br-angle-left"></i>
                </button>
            ) : (
                rightBtn
            )}
            <div
                className={clsx(className, 'w-full whitespace-nowrap z-0 scrollbar-thin overflow-x-scroll scrollList')}
            >
                {children}
            </div>
        </div>
    );
}

export default ScrollList;
