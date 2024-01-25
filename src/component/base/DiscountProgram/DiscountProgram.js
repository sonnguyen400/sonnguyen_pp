import clsx from "clsx";
import style from './style.module.scss';
import { useEffect, useRef, useState } from "react";
function DiscountProgram({ className, object }) {
    const diff = useRef((new Date(2024, 0, 8, 14, 35, 0) - new Date()) / (1000));
    const [time, setTime] = useState([0, 0, 0]);
    useEffect(() => {
        let timeS = setInterval(() => {
            diff.current -= 1;
            let hour = Math.floor(diff.current / 60 / 60);
            let minute = Math.floor(diff.current / 60) - hour * 60;
            let second = Math.floor(diff.current - hour * 60 * 60 - minute * 60);
            if (hour <= 0 || (hour === 0 && minute === 0 && second === 0)) {
                setTime([0, 0, 0]);
                clearInterval(timeS);
            } else {
                setTime([hour, minute, second]);
            }
        }, 1000);
        return () => {
            clearInterval(timeS);
        }
    }, [])
    return (<div className={clsx("inline-block", className)}>
        <div className="w-full p-5 bg-white rounded-lg">
            <div className="flex items-center">
                <div className={clsx("inline-block w-4/5 overflow-hidden")}>
                    <h4 className={clsx("font-semibold text-nowrap text-ellipsis overflow-hidden", style.discount_title)}> Chuong trinh khuyen mai Chuong trinh khuyen maiChuong trinh khuyen mai 1</h4>
                </div>
                <div className="inline-block w-1/5 text-red-500">
                    <i className="fi fi-rr-bolt text-xl"></i>
                    <span className="bg-red-500 mx-1 p-1 text-sm rounded-sm  text-white">{time[0]}</span>:
                    <span className="bg-red-500 mx-1 p-1 text-sm rounded-sm text-white">{time[1]}</span>:
                    <span className="bg-red-500 mx-1 p-1 text-sm rounded-sm text-white">{time[2]}</span>
                </div>
            </div>
            <p className="text-sm text-gray-500 max-w-4/5 max-w-[70%]">Khuyến mãi cho người dùng mới</p>
            <div className="mt-4">
                <span className="bg-gray-400 rounded-lg text-[0.75rem] text-white px-2 py-1 mr-2">4 Smartphone</span>
                <span className="bg-gray-400 rounded-lg text-[0.75rem] text-white px-2 py-1 mr-2">4 Smartphone</span>
            </div>
            <div className="mt-8 flex w-full">
                <div className="w-1/6 aspect-square p-2"><img className=" mr-4 p-1  border border-gray rounded-lg" alt="preview" src="https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/15-Pro-nar1170930957.jpg"></img></div>
                <div className="w-1/6 aspect-square p-2"><img className=" mr-4 p-1  border border-gray rounded-lg" alt="preview" src="https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/15-Pro-nar1170930957.jpg"></img></div>
                <div className="w-1/6 aspect-square p-2"><img className=" mr-4 p-1  border border-gray rounded-lg" alt="preview" src="https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/15-Pro-nar1170930957.jpg"></img></div>
                <div className="w-1/6 aspect-square p-2"><img className=" mr-4 p-1  border border-gray rounded-lg" alt="preview" src="https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/15-Pro-nar1170930957.jpg"></img></div>
                <div className="w-1/6 aspect-square p-2"><img className=" mr-4 p-1  border border-gray rounded-lg" alt="preview" src="https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/15-Pro-nar1170930957.jpg"></img></div>
                <div className="w-1/6 aspect-square p-2 relative">
                    <img className=" mr-4 p-1 border border-gray rounded-lg brightness-50 blur-sm" alt="preview" src="https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/15-Pro-nar1170930957.jpg"></img>
                    <h5 className="absolute font-bold text-white w-full top-1/2 -translate-y-1/2 text-center ">15+</h5>
                </div>
            </div>

        </div>
    </div>);
}

export default DiscountProgram;