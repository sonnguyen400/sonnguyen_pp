import computerIcon from 'image/computer-icon.png';
import calenderIcon from 'image/calender-icon.png';
import chatIcon from 'image/chat-icon.png';
import walletIcon from 'image/wallet-icon.png';
import clsx from 'clsx';
import style from './style.module.scss';
import { useEffect, useRef, useState } from 'react';
import Button from '~/component/base/button';
const categoryContent = [
    <div>
        <Button
            className={'flex-row-reverse text-cyan-600 font-bold'}
            href="#"
            icon={{ content: <i className="fi fi-rr-arrow-small-right"></i> }}
        >
            All
        </Button>
        <div className="flex flex-row pt-5">
            <div className="mr-10">
                <h5 className="font-semibold px-2">Branch</h5>
                <ul className="text-sm">
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Dell
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Apple
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Acer
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Asus
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Lenovo
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Xiaomi
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Samsung
                        </Button>
                    </li>
                </ul>
            </div>
            <div className="mr-10">
                <h5 className="font-semibold px-2">Price</h5>
                <ul className="text-sm">
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            125000 - 15000000
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Apple
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Acer
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Asus
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Lenovo
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Xiaomi
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Samsung
                        </Button>
                    </li>
                </ul>
            </div>
            <div className="mr-10">
                <h5 className="font-semibold px-2">Criterial</h5>
                <ul className="text-sm">
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Business
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Study
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Programming
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Design
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    </div>,
    <div>
        <Button
            className={'flex-row-reverse text-cyan-600 font-bold'}
            href="#"
            icon={{ content: <i className="fi fi-rr-arrow-small-right"></i> }}
        >
            All
        </Button>
        <div className="flex flex-row pt-5">
            <div className="mr-10">
                <h5 className="font-semibold px-2">Branch</h5>
                <ul className="text-sm">
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Dell
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Apple
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Acer
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Asus
                        </Button>
                    </li>
                </ul>
            </div>
            <div className="mr-10">
                <h5 className="font-semibold px-2">Price</h5>
                <ul className="text-sm">
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            125000 - 15000000
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Apple
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Acer
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Asus
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Lenovo
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Xiaomi
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Samsung
                        </Button>
                    </li>
                </ul>
            </div>
            <div className="mr-10">
                <h5 className="font-semibold px-2">Criterial</h5>
                <ul className="text-sm">
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Business
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Study
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Programming
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={'flex-row-reverse py-1'}
                            href="#"
                            icon={{
                                content: <i className="fi fi-br-arrow-up-right text-blue-900 text-[10px] -mt-1"></i>,
                                style: 'pt-0',
                            }}
                        >
                            Design
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    </div>,
];
function Category() {
    const [categoryIdx, setCategoryIdx] = useState(0);
    const categoryList = useRef();
    useEffect(() => {
        let elements = categoryList.current.getElementsByTagName('li');
        if (elements) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].addEventListener('click', (e) => {
                    for (let i = 0; i < elements.length; i++) {
                        elements[i].classList.remove(style.active);
                    }
                    elements[i].classList.add(style.active);
                    setCategoryIdx(i);
                });
            }
        }
    }, []);
    return (
        <div className="flex flex-row max-lg:max-w-screen-md w-full transition flex">
            <div className="bg-white flex-grow w-max p-6 shadow-xl rounded-2xl mr-5 flex flex-row">
                <ul ref={categoryList} className={clsx(style.category)}>
                    <li content={<div>Xin chào</div>} className={clsx(style.active)}>
                        <i className="fi fi-sr-laptop-mobile"></i>
                        <span>Personal</span> Computer
                    </li>
                    <li>
                        <i className="fi fi-sr-mobile-notch"></i>
                        <span>Telephone</span>
                    </li>
                    <li>
                        <i className="fi fi-sr-speakers"></i>
                        <span>Speaker</span>
                    </li>
                    <li>
                        <i className="fi fi-sr-computer"></i>
                        <span>Display</span>
                    </li>
                    <li>
                        <i className="fi fi-brands-fonts"></i>
                        <span>Software</span>
                    </li>
                    <li>
                        <i className="fi fi-brands-fonts"></i>
                        <span>Repair</span>
                    </li>
                </ul>
                <div className="lg:min-w-[600px]">{categoryContent[categoryIdx]}</div>
            </div>
            <div className="h-full grow-[0.05] w-max bg-white p-6 shadow-xl rounded-2xl max-h-[500px] overflow-y-auto scrollbar-hidden max-lg:hidden">
                <div className="bg-blue-100 rounded-lg px-3 py-2 flex flex-row h-1/3  justify-center items-center">
                    <div className="wrap break-words">
                        <p className="font-medium text-lg">Pre-purchase Experience</p>{' '}
                    </div>
                    <div className="aspect-square w-1/2 max-w-[100px] block">
                        <img className="w-full aspect-square" src={computerIcon} alt="computer" />
                    </div>
                </div>
                <div className="bg-red-100 rounded-lg px-3 py-2 flex flex-row h-1/3  justify-center items-center mt-2">
                    <div className="wrap break-words">
                        <p className="font-medium text-lg">Pre-purchase Experience</p>{' '}
                    </div>
                    <div className="aspect-square w-1/2 max-w-[100px] block">
                        <img className="w-full aspect-square" src={chatIcon} alt="computer" />
                    </div>
                </div>
                <div className="bg-yellow-100 rounded-lg px-3 py-2 flex flex-row h-1/3  justify-center items-center mt-2">
                    <div className="wrap break-words">
                        <p className="font-medium text-lg">Pre-purchase Experience</p>{' '}
                    </div>
                    <div className="aspect-square w-1/2 max-w-[100px] block">
                        <img className="w-full aspect-square" src={walletIcon} alt="computer" />
                    </div>
                </div>
                <div className="bg-green-100 rounded-lg px-3 py-2 flex flex-row h-1/3  justify-center items-center mt-2">
                    <div className="wrap break-words">
                        <p className="font-medium text-lg">Pre-purchase Experience</p>{' '}
                    </div>
                    <div className="aspect-square w-1/2 max-w-[100px] block">
                        <img className="w-full aspect-square" src={calenderIcon} alt="computer" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
