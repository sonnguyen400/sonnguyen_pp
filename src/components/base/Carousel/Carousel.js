import style from './style.module.scss';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
function Carousel({ speed, children, type, ...props }) {
    let [banner, setBanner] = useState(0);
    const preBannerIdx = useRef(children.length - 1)
    const carousel = useRef();

    function nextBanner() {
        setBanner((banner) => {
            preBannerIdx.current = banner;
            if (banner === children.length - 1) {
                return 0
            }
            return banner + 1;
        })

    }
    function preBanner() {
        setBanner((banner) => {
            preBannerIdx.current = banner;
            if (banner === 0) {
                return children.length - 1
            }
            return banner - 1;
        })
    }

    useEffect(() => {
        let repeat = setInterval(() => {
            nextBanner();
        }, 6000)
        carousel.current.querySelector(`.${style.leftArrow}`).onclick = preBanner
        carousel.current.querySelector(`.${style.rightArrow}`).onclick = nextBanner
        return () => {
            clearTimeout(repeat);
        }
    }, [])

    useEffect(() => {
        let carouselItems = carousel.current.querySelector(`.${style.carouselItems}`);
        let width = carousel.current.offsetWidth;
        carouselItems.style.width = width * (children.length + 1) + "px";
        carouselItems.style.transition = '1s';
        carouselItems.style.transform = `translateX(-${width * banner}px)`;
    }, [banner])

    return (<div {...props}>
        <div ref={carousel} className={clsx(style.carousel, style[type])}>
            <div className={clsx(style.carouselItems)}>
                {
                    [...children, children[0]].map((element, idx) => <div key={idx} className='inline-block h-full' style={{ "width": `25%` }}>{element}</div>)
                }
            </div>
            <div className={clsx(style.leftArrow)}><i className="fi fi-br-angle-left"></i></div>
            <div className={clsx(style.rightArrow)}><i className="fi fi-br-angle-right"></i></div>
        </div>
    </div>);
}

export default Carousel;
export const CAROUSEL_STYLE_1 = "style1";
export const CAROUSEL_STYLE_2 = "style2";
export const CAROUSEL_STYLE_3 = "style3";