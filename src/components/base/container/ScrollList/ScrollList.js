import { useEffect, useRef } from 'react';
import style from './style.module.scss';
import clsx from 'clsx';
function ScrollList({ children, ...props }) {
    const scrollList = useRef();
    function scrollLeft() {
        scrollList.current.scrollBy({
            left: 40,
            top: 0,
            behavior: 'smooth'
        })
    }
    function scrollRight() {
        scrollList.current.scrollBy({
            left: -40,
            top: 0,
            behavior: 'smooth'
        })

    }
    return (<div {...props}>
        <button onClick={scrollLeft} className='right bg-white rounded-full width absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 p-6 shadow-xl max-sm:hidden'><i className="fi fi-br-angle-right"></i></button>
        <button onClick={scrollRight} className='left bg-white rounded-full width absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 p-6 shadow-xl max-sm:hidden'><i className="fi fi-br-angle-left"></i></button>
        <div ref={scrollList} class={clsx('w-full overflow-x-auto', style.list)}>
            <div className={clsx("w-max flex")}>
                {children}
            </div>
        </div>
    </div>);
}

export default ScrollList;