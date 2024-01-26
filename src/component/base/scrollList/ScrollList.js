import { useLayoutEffect, useRef } from 'react';
import clsx from 'clsx';
import style from './style.module.scss';
import { AngleLeft, AngleRight } from '~/resources/icon';
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
        <div ref={scrollList} {...props} className={clsx('relative z-[var(--z-scrollList)]')}>
            {leftBtn === true ? (
                <button className={clsx("left-0 -translate-x-1/2", style.scrollBtn)}>
                    <AngleLeft />
                </button>
            ) : (
                leftBtn
            )}
            {rightBtn === true ? (
                <button className={clsx("right-0 translate-x-1/2", style.scrollBtn)}>
                    <AngleRight />
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
