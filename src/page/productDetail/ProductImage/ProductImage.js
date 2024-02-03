import { useRef, useState } from 'react';
import { memo } from 'react';
import clsx from 'clsx';
import style from './style.module.scss';
import placehoder from 'image/placehoder.webp';
function ProductImage({ product_photos, currentImage = 0, className, ...props }) {
    const [curImage, setCurImage] = useState(currentImage);
    const photos = useRef(product_photos || [placehoder]);
    function preImage() {
        if (curImage > 0) {
            setCurImage((curImage) => curImage - 1);
        }
    }
    function nextImage() {
        if (curImage < photos.length - 1) {
            setCurImage((curImage) => curImage + 1);
        }
    }

    return (
        <div className={clsx('flex', className)} {...props}>
            <div className={clsx('py-5 flex flex-col h-full w-1/5', style.image)}>
                <button onClick={preImage} className={clsx('top-0', style.changeImage)}>
                    <i className="fi fi-rr-angle-top"></i>
                </button>
                <button onClick={nextImage} className={clsx('bottom-0', style.changeImage)}>
                    <i className="fi fi-rr-angle-bottom"></i>
                </button>
                <div className="w-full h-full whitespace-nowrap overflow-x-auto scrollbar-hidden">
                    {photos.current.map((photo, index) => (
                        <div
                            key={index}
                            onClick={(e) => {
                                setCurImage(index);
                            }}
                            className="h-1/5 p-2  aspect-square  inline-block"
                        >
                            <img
                                alt="product"
                                className={clsx('w-full h-full  object-contain  rounded-lg hover:brightness-90', {
                                    'border-blue-800 border-2': index === curImage,
                                })}
                                src={photo}
                            ></img>
                        </div>
                    ))}
                </div>
            </div>
            <div className={clsx('w-full p-2 aspect-square ', style.image)}>
                <button onClick={preImage} className={clsx('left-0', style.changeImage)}>
                    <i className="fi fi-rr-angle-left"></i>
                </button>
                <button onClick={nextImage} className={clsx('right-0', style.changeImage)}>
                    <i className="fi fi-rr-angle-right"></i>
                </button>
                <img alt="product" className="w-full h-full object-contain" src={photos.current[curImage]}></img>
            </div>
        </div>
    );
}

export default memo(ProductImage);
