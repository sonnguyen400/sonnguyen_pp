import Carousel, { CAROUSEL_STYLE_1 } from "~/components/base/Carousel";
import style from './style.module.scss';
import clsx from "clsx";
import ProductItem from "~/components/base/ProductItem";
import ScrollList from "src/components/base/container/ScrollList/ScrollList";
import DiscountProgram from "src/components/base/DiscountProgram/DiscountProgram";
import Tippy from "@tippyjs/react";
import Button from "src/components/base/Button";
function HomePage({ children }) {
    return (<div className="w-full max-w-screen-xl mx-auto">
        <Carousel
            type={CAROUSEL_STYLE_1} className='w-full h-64 '
        >
            <div className="bg-black w-full h-full rounded-2xl"></div>
            <div className=" bg-white w-full h-full rounded-2xl"></div>
            <div className="  bg-red-600 w-full h-full rounded-2xl"></div>
        </Carousel>

        <div id="Categories">
            <h2>Danh mục</h2>
            <Tippy>
                <div className="flex px-24 flex-wrap">
                    <div className="lg:w-1/6 md:w-[20%] sm:w-[33.33333%] p-6">
                        <Button className="w-full h-full aspect-square p-2 rounded-lg flex flex-col border" href="#" icon={{
                            "content": <img alt="smartphone" className="p-3" src="https://hpcluxury.com.vn/wp-content/uploads/2023/07/iPhone-15-pro-titanium-blue-png.png"></img>
                        }}>Điện thoại</Button>
                    </div>
                    <div className="lg:w-1/6 md:w-[20%] sm:w-[33.33333%] p-6">
                        <Button className="w-full h-full aspect-square p-2 rounded-lg flex flex-col border" href="#" icon={{
                            "content": <img alt="smartphone" className="p-3" src="https://hpcluxury.com.vn/wp-content/uploads/2023/07/iPhone-15-pro-titanium-blue-png.png"></img>
                        }}>Máy tính bảng</Button>
                    </div>
                    <div className="lg:w-1/6 md:w-[20%] sm:w-[33.33333%] p-6">
                        <Button className="w-full h-full aspect-square p-2 rounded-lg flex flex-col border" href="#" icon={{
                            "content": <img alt="smartphone" className="p-3" src="https://hpcluxury.com.vn/wp-content/uploads/2023/07/iPhone-15-pro-titanium-blue-png.png"></img>
                        }}>Laptop</Button>
                    </div>
                    <div className="lg:w-1/6 md:w-[20%] sm:w-[33.33333%] p-6">
                        <Button className="w-full h-full aspect-square p-2 rounded-lg flex flex-col border" href="#" icon={{
                            "content": <img alt="smartphone" className="p-3" src="https://hpcluxury.com.vn/wp-content/uploads/2023/07/iPhone-15-pro-titanium-blue-png.png"></img>
                        }}>Desktop</Button>
                    </div>
                    <div className="lg:w-1/6 md:w-[20%] sm:w-[33.33333%] p-6">
                        <Button className="w-full h-full aspect-square p-2 rounded-lg flex flex-col border" href="#" icon={{
                            "content": <img alt="smartphone" className="p-3" src="https://hpcluxury.com.vn/wp-content/uploads/2023/07/iPhone-15-pro-titanium-blue-png.png"></img>
                        }}>PC Components</Button>
                    </div>
                    <div className="lg:w-1/6 md:w-[20%] sm:w-[33.33333%] p-6">
                        <Button className="w-full h-full aspect-square p-2 rounded-lg flex flex-col border" href="#" icon={{
                            "content": <img alt="smartphone" className="p-3" src="https://hpcluxury.com.vn/wp-content/uploads/2023/07/iPhone-15-pro-titanium-blue-png.png"></img>
                        }}>Sound</Button>
                    </div>
                    <div className="lg:w-1/6 md:w-[20%] sm:w-[33.33333%] p-6">
                        <Button className="w-full h-full aspect-square p-2 rounded-lg flex flex-col border" href="#" icon={{
                            "content": <img alt="smartphone" className="p-3" src="https://hpcluxury.com.vn/wp-content/uploads/2023/07/iPhone-15-pro-titanium-blue-png.png"></img>
                        }}>Display</Button>
                    </div>
                    <div className="lg:w-1/6 md:w-[20%] sm:w-[33.33333%] p-6">
                        <Button className="w-full h-full aspect-square p-2 rounded-lg flex flex-col border" href="#" icon={{
                            "content": <img alt="smartphone" className="p-3" src="https://hpcluxury.com.vn/wp-content/uploads/2023/07/iPhone-15-pro-titanium-blue-png.png"></img>
                        }}>Software</Button>
                    </div>
                    <div className="lg:w-1/6 md:w-[20%] sm:w-[33.33333%] p-6">
                        <Button className="w-full h-full aspect-square p-2 rounded-lg flex flex-col border" href="#" icon={{
                            "content": <img alt="smartphone" className="p-3" src="https://hpcluxury.com.vn/wp-content/uploads/2023/07/iPhone-15-pro-titanium-blue-png.png"></img>
                        }}>Fixing</Button>
                    </div>


                </div>
            </Tippy>
        </div>
        <div id="DiscountedProgram" className="mt-10 p-5 bg-red-400 rounded-2xl">
            <h2 className="font-medium pl-5 text-white">Discount</h2>
            <div className="p-5">
                <h3 className="font-medium pl-5 text-white">Discount Programs</h3>
                <ScrollList className={clsx("w-full")} leftBtn rightBtn>
                    <DiscountProgram className={clsx("lg:w-1/2 md:w-full p-2")} />
                    <DiscountProgram className={clsx("lg:w-1/2 md:w-full p-2")} />
                    <DiscountProgram className={clsx("lg:w-1/2 md:w-full p-2")} />
                    <DiscountProgram className={clsx("lg:w-1/2 md:w-full p-2")} />
                </ScrollList>
            </div>
        </div>
        <div id="DiscountedProduct" className="mt-10 bg-red-400 rounded-2xl">
            <h3 className="text-2xl font-medium ml-10 mb-5 text-white">Discount Programs</h3>
            <ScrollList
                className={clsx("relative")} leftBtn rightBtn
            >
                <div className={clsx("xl:w-1/5 lg:w-1/4 md:w-1/3 sm:1/2 px-3 inline-block", style.productXl)}><ProductItem className="bg-white rounded-lg" /></div>
                <div className={clsx("xl:w-1/5 lg:w-1/4 md:w-1/3 sm:1/2 px-3 inline-block", style.productXl)}><ProductItem className="bg-white rounded-lg" /></div>
                <div className={clsx("xl:w-1/5 lg:w-1/4 md:w-1/3 sm:1/2 px-3 inline-block", style.productXl)}><ProductItem className="bg-white rounded-lg" /></div>
                <div className={clsx("xl:w-1/5 lg:w-1/4 md:w-1/3 sm:1/2 px-3 inline-block", style.productXl)}><ProductItem className="bg-white rounded-lg" /></div>
                <div className={clsx("xl:w-1/5 lg:w-1/4 md:w-1/3 sm:1/2 px-3 inline-block", style.productXl)}><ProductItem className="bg-white rounded-lg" /></div>
                <div className={clsx("xl:w-1/5 lg:w-1/4 md:w-1/3 sm:1/2 px-3 inline-block", style.productXl)}><ProductItem className="bg-white rounded-lg" /></div>
                <div className={clsx("xl:w-1/5 lg:w-1/4 md:w-1/3 sm:1/2 px-3 inline-block", style.productXl)}><ProductItem className="bg-white rounded-lg" /></div>
                <div className={clsx("xl:w-1/5 lg:w-1/4 md:w-1/3 sm:1/2 px-3 inline-block", style.productXl)}><ProductItem className="bg-white rounded-lg" /></div>
            </ScrollList>
        </div>

    </div >);
}

export default HomePage;