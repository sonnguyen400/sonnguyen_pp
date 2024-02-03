import { useLayoutEffect, useRef } from 'react';
import clsx from 'clsx';
import style from './style.module.scss';
import { AngleLeft, AngleRight } from '~/resources/icon';
function ScrollList({ children, className, leftBtn, rightBtn, ...props }) {
    const scrollList = useRef();
    function scrollLeftEvent(list) {
        const elementW = list.querySelector('div').offsetWidth;
        return (e) => {
            list.scrollLeft = list.scrollLeft - elementW;
        }
    }
    function scrollRightEvent(list) {
        const elementW = list.querySelector('div').offsetWidth;
        return (e) => {
            list.scrollLeft = list.scrollLeft + elementW;
        }
    }
    function scrollEvent(list, scrollToLeft, scrollToRight) {
        return (e) => {
            if (scrollToLeft) {
                if (list.scrollLeft === 0) {
                    scrollToLeft.classList.add(style.disabled);
                } else scrollToLeft.classList.remove(style.disabled);
            }
            if (scrollToRight) {
                if (list.scrollLeft + list.offsetWidth >= list.scrollWidth) {
                    scrollToRight.classList.add(style.disabled);
                } else scrollToRight.classList.remove(style.disabled);
            }
        }
    }
    useLayoutEffect(() => {
        const scrollToLeft = scrollList.current.querySelector('.left');
        const scrollToRight = scrollList.current.querySelector('.right');
        const list = scrollList.current.querySelector('.scrollList');
        const scrollLeft = scrollLeftEvent(list);
        const scrollRight = scrollRightEvent(list);
        if (scrollToLeft) scrollToLeft.addEventListener('click', scrollLeft);
        if (scrollToRight) scrollToRight.addEventListener('click', scrollRight);
        const onScroll = scrollEvent(list, scrollToLeft, scrollToRight);
        list.addEventListener("scroll", onScroll);
        if (scrollToLeft) {
            if (list.scrollLeft === 0) {
                scrollToLeft.classList.add(style.disabled);
            } else scrollToLeft.classList.remove(style.disabled);
        }
        if (scrollToRight) {
            if (list.scrollLeft + list.offsetWidth >= list.scrollWidth) {
                scrollToRight.classList.add(style.disabled);
            } else scrollToRight.classList.remove(style.disabled);
        }
        return () => {
            if (scrollToLeft) scrollToLeft.removeEventListener('click', scrollLeft);
            if (scrollToRight) scrollToRight.removeEventListener('click', scrollRight);
            list.removeEventListener("scroll", onScroll);
        }
    }, []);

    return (
        <div ref={scrollList} {...props} className={clsx('relative z-[var(--z-scrollList)]')}>
            {leftBtn === true ? (
                <button className={clsx("left left-0 -translate-x-1/2", style.scrollBtn, style.disabled)}>
                    <AngleLeft />
                </button>
            ) : (
                leftBtn
            )}
            {rightBtn === true ? (
                <button className={clsx("right right-0 translate-x-1/2", style.scrollBtn)}>
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
