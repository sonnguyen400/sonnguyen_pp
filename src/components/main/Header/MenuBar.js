import clsx from "clsx";
import Button from "~/components/base/Button";
import style from './style.module.scss';
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ScrollList from "src/components/base/container/ScrollList/ScrollList";
import Tippy from "@tippyjs/react/headless";
function MenuBar({ className }) {
    let [width, setWidth] = useState(0);
    const menubar = useRef();
    useLayoutEffect(() => {
        setWidth(menubar);
        console.log(menubar.current);

    }, [])
    return (
        <ScrollList className={clsx(style.categoryBar, className, "pr-[120px] py-4")}
            leftBtn={(<button className="right z-10 absolute top-1/2  h-full w-[60px] bg-white -translate-y-1/2 right-[60px] hover:bg-gray-300"><i className="fi fi-bs-angle-left"></i></button>)}
            rightBtn={(<button className="left z-10 absolute top-1/2 h-full w-[60px] bg-white -translate-y-1/2 right-0 hover:bg-gray-300"><i className="fi fi-bs-angle-right"></i></button>)}
        >
            <Tippy
                interactive
                placement="bottom-end"
                followCursor
                arrow="round"
                render={attrs =>
                    <div  {...attrs} className={clsx("bg-white rounded-lg p-6 shadow-2xl border lg:w-[1024px] w-full", style.categoryTable)} tabIndex="-1">
                        <a href="#" className="font-bold text-blue-700"><span>All</span><i className="fi fi-sr-arrow-small-right"></i></a>
                        <div className="mt-2 flex flex-row">
                            <div className="mr-10">
                                <h6 className="font-bold">Manufacturer</h6>
                                <ul className="list-none text-sm">
                                    <li><a href="#"><span>APPLE</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a href="#"><span>ACER</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a href="#"><span>LENOVO</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a href="#"><span>ASUS</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a href="#"><span>DELL</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a href="#"><span>HP</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                </ul>
                            </div>
                            <div className="mr-10">
                                <h6 className="font-bold">PRICE</h6>
                                <ul className="list-none text-sm">
                                    <li><a><span>APPLE</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>ACER</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>LENOVO</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>ASUS</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>DELL</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>HP</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                </ul>
                            </div>
                            <div className="mr-10">
                                <h6 className="font-bold">USAGE</h6>
                                <ul className="list-none text-sm">
                                    <li><a><span>APPLE</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>ACER</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>LENOVO</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>ASUS</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>DELL</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>HP</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                }>
                <div className={clsx(style.menuItem)}>
                    <Button
                        className='mr-5 px-4 py-2 rounded-3xl hover:bg-slate-800/70 hover:text-slate-200'
                        icon={{
                            "content": <i className="fi fi-rr-laptop-mobile"></i>,
                            "react": <i className="fi fi-sr-laptop-mobile"></i>
                        }}>Máy tính</Button>
                </div>
            </Tippy>
            <Tippy
                interactive
                placement="bottom-end"
                render={attrs =>
                    <div  {...attrs} className={clsx("bg-white rounded-lg p-6 shadow-2xl border lg:w-[1024px] w-full", style.categoryTable)} tabIndex="-1">
                        <a href="#" className="font-bold text-blue-700"><span>All</span><i className="fi fi-sr-arrow-small-right"></i></a>
                        <div className="mt-2 flex flex-row">
                            <div className="mr-10">
                                <h6 className="font-bold">Manufacturer</h6>
                                <ul className="list-none text-sm">
                                    <li><a href="#"><span>APPLE</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a href="#"><span>ACER</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a href="#"><span>LENOVO</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a href="#"><span>ASUS</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a href="#"><span>DELL</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a href="#"><span>HP</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                </ul>
                            </div>
                            <div className="mr-10">
                                <h6 className="font-bold">PRICE</h6>
                                <ul className="list-none text-sm">
                                    <li><a><span>APPLE</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>ACER</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>LENOVO</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>ASUS</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>DELL</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>HP</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                </ul>
                            </div>
                            <div className="mr-10">
                                <h6 className="font-bold">USAGE</h6>
                                <ul className="list-none text-sm">
                                    <li><a><span>APPLE</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>ACER</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>LENOVO</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>ASUS</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>DELL</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>HP</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                }>
                <div className={clsx(style.menuItem)}>
                    <Button
                        className='mr-5 px-4 py-2 rounded-3xl hover:bg-slate-800/70 hover:text-slate-200'
                        icon={{
                            "content": <i className="fi fi-br-mobile-notch"></i>,
                            "react": <i className="fi fi-sr-mobile-notch"></i>
                        }}>Điện thoại</Button>
                </div>
            </Tippy>
            <Tippy render={attrs =>
                <div  {...attrs} className="box" tabIndex="-1">
                    Hehe
                </div>
            }>
                <div className={clsx(style.menuItem)}>
                    <Button
                        className='mr-5 px-4 py-2 rounded-3xl hover:bg-slate-800/70 hover:text-slate-200'
                        icon={{
                            "content": <i className="fi fi-rr-tablet-android"></i>,
                            "react": <i className="fi fi-sr-tablet-android"></i>
                        }}>
                        Máy tính bảng
                    </Button>
                </div>
            </Tippy>
            <Tippy >
                <div className={clsx(style.menuItem)}>
                    <Button
                        className='mr-5 px-4 py-2 rounded-3xl hover:bg-slate-800/70 hover:text-slate-200'
                        icon={{
                            "content": <i className="fi fi-rr-speakers"></i>,
                            "react": <i className="fi fi-sr-speakers"></i>
                        }}>
                        Âm thanh
                    </Button>
                </div>
            </Tippy>
            <Tippy >
                <div className={clsx(style.menuItem)}>
                    <Button
                        className='mr-5 px-4 py-2 rounded-3xl hover:bg-slate-800/70 hover:text-slate-200'
                        icon={{
                            "content": <i className="fi fi-rr-computer"></i>,
                            "react": <i className="fi fi-sr-computer"></i>
                        }}
                    >Hiển thị</Button>
                </div>
            </Tippy>
            <Tippy >
                <div className={clsx(style.menuItem)}>
                    <Button
                        className='mr-5 px-4 py-2 rounded-3xl hover:bg-slate-800/70 hover:text-slate-200'
                        icon={{
                            "content": <i className="fi fi-brands-fonts"></i>
                        }}
                    >Phần mềm</Button>
                </div>
            </Tippy>
            <Tippy
                interactive
                placement="bottom-end"
                render={attrs =>
                    <div  {...attrs} className={clsx("bg-white rounded-lg p-6 shadow-2xl border lg:w-[1024px] w-full", style.categoryTable)} tabIndex="-1">
                        <a href="#" className="font-bold text-blue-700"><span>All</span><i className="fi fi-sr-arrow-small-right"></i></a>
                        <div className="mt-2 flex flex-row">
                            <div className="mr-10">
                                <h6 className="font-bold">Manufacturer</h6>
                                <ul className="list-none text-sm">
                                    <li><a href="#"><span>APPLE</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a href="#"><span>ACER</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a href="#"><span>LENOVO</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a href="#"><span>ASUS</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a href="#"><span>DELL</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a href="#"><span>HP</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                </ul>
                            </div>
                            <div className="mr-10">
                                <h6 className="font-bold">PRICE</h6>
                                <ul className="list-none text-sm">
                                    <li><a><span>APPLE</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>ACER</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>LENOVO</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>ASUS</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>DELL</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>HP</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                </ul>
                            </div>
                            <div className="mr-10">
                                <h6 className="font-bold">USAGE</h6>
                                <ul className="list-none text-sm">
                                    <li><a><span>APPLE</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>ACER</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>LENOVO</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>ASUS</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>DELL</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                    <li><a><span>HP</span><i className="fi fi-br-arrow-up-right text-[10px]"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                }
            >
                <div className={clsx(style.menuItem)}>
                    <Button
                        className='mr-5 px-4 py-2 rounded-3xl hover:bg-slate-800/70 hover:text-slate-200'
                        icon={{
                            "content": <i className="fi fi-rs-refresh"></i>
                        }}
                    >Dich vụ sửa chữa</Button>
                </div>
            </Tippy>
        </ScrollList>);
}
export default MenuBar;