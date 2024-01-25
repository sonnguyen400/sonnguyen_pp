import { useState } from "react";
import style from './style.module.scss';
import clsx from "clsx";
function ProductItem({ product, ...props }) {
    let [option, setOption] = useState();
    return (
        <div {...props}>
            <div className="flex w-full flex-col">
                <div className="px-4 relative w-full aspect-square rounded-t-lg  rounded-tr-lg">
                    <img src="https://bizweb.dktcdn.net/100/398/567/products/mbp14-silver2.png" className="absolute px-4 w-full h-full top-0 left-0 object-contain" alt="laptop" />
                </div>
                <div className="flex flex-col p-2 text-xs text-stone-600">
                    <h2 className="font-bold text-base text-slate-900">MAcbook pro 2022</h2>
                    <div className="flex flex-row items-center mt-1 mb-2 flex-wrap">
                        <span className="mr-2 mt-1">Từ</span>
                        <span className="text-lg text-red-500 :">16.990.000</span>
                        <span className="ml-2 text-xs bg-red-300 text-red-600 rounded">-30%</span>
                    </div>
                    <hr />
                    <div className={clsx(style.productDesc)}>
                        <p className="text-inherit">CPU: M2, 8 Cores</p>
                        <p className="text-inherit">RAM: 8GB</p>
                        <p className="text-inherit">Ổ cứng: SSD 256GB</p>
                        <p className="text-inherit">Màn hình: 13.4" Retina 60Hz</p>
                    </div>
                    <hr />
                    <div className={clsx(style.productDesc, "mt-2 flex flex-wrap")}>
                        <span className=" bg-slate-600 px-2 mt-1 mr-1 leading-5 rounded-md text-white">8GB ram</span>
                        <span className=" bg-slate-600 px-2 mt-1 mr-1 leading-5 rounded-md text-white">256GB</span>
                        <span className=" bg-slate-600 px-2 mt-1 mr-1 leading-5 rounded-md text-white">4K HDR 10+</span>
                    </div>
                    <div className="flex flex-row items-center mt-1">
                        <div className="mr-2 w-4 h-4 rounded inline-block bg-red-500"></div>
                        <div className="mr-2 w-4 h-4 rounded inline-block bg-blue-500"></div>
                        <div className="mr-2 w-4 h-4 rounded inline-block bg-green-500"></div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>);
}

export default ProductItem;