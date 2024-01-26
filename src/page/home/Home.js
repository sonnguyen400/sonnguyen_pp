import style from './style.module.scss';
import clsx from "clsx";
import ProductItem from "~/component/base/ProductItem";
import ScrollList from "~/component/base/scrollList";
import DiscountProgram from "~/component/base/DiscountProgram";
import Tippy from "@tippyjs/react";
import Carousel from "~/component/base/carousel";

function Home({ children }) {
    return (
        <div>
            <Carousel
                className='w-full h-64 '
            >
                <div className="bg-black w-full h-full rounded-2xl"></div>
                <div className=" bg-white w-full h-full rounded-2xl"></div>
                <div className="  bg-red-600 w-full h-full rounded-2xl"></div>
            </Carousel>
            <div id="Categories">
                <h2>Danh mục</h2>
                <Tippy>
                    <div className="flex lg:px-24 flex-wrap">
                        <div className={clsx(style.categoryItem)}>
                            <div className={clsx(style.content)}>
                                <img alt="smartphone" src="https://hpcluxury.com.vn/wp-content/uploads/2023/07/iPhone-15-pro-titanium-blue-png.png"></img>
                                <div className="text-center -mx-2 mt-2">Tablet</div>
                            </div>
                        </div>
                        <div className={clsx(style.categoryItem)}>
                            <div className={clsx(style.content)}>
                                <img alt="smartphone" src="https://hpcluxury.com.vn/wp-content/uploads/2023/07/iPhone-15-pro-titanium-blue-png.png"></img>
                                <div className="text-center -mx-2 mt-2">Table fdhgj hkaf chdgjhakt</div>
                            </div>
                        </div>
                        <div className={clsx(style.categoryItem)}>
                            <div className={clsx(style.content)}>
                                <img alt="smartphone" src="https://hpcluxury.com.vn/wp-content/uploads/2023/07/iPhone-15-pro-titanium-blue-png.png"></img>
                                <div className="text-center -mx-2 mt-2">Tablet</div>
                            </div>
                        </div>
                        <div className={clsx(style.categoryItem)}>
                            <div className={clsx(style.content)}>
                                <img alt="smartphone" src="https://hpcluxury.com.vn/wp-content/uploads/2023/07/iPhone-15-pro-titanium-blue-png.png"></img>
                                <div className="text-center -mx-2 mt-2">Tablet</div>
                            </div>
                        </div>
                        <div className={clsx(style.categoryItem)}>
                            <div className={clsx(style.content)}>
                                <img alt="smartphone" src="https://hpcluxury.com.vn/wp-content/uploads/2023/07/iPhone-15-pro-titanium-blue-png.png"></img>
                                <div className="text-center -mx-2 mt-2">Tablet</div>
                            </div>
                        </div>
                        <div className={clsx(style.categoryItem)}>
                            <div className={clsx(style.content)}>
                                <img alt="smartphone" src="https://hpcluxury.com.vn/wp-content/uploads/2023/07/iPhone-15-pro-titanium-blue-png.png"></img>
                                <div className="text-center -mx-2 mt-2">Tablet</div>
                            </div>
                        </div>
                        <div className={clsx(style.categoryItem)}>
                            <div className={clsx(style.content)}>
                                <img alt="smartphone" src="https://hpcluxury.com.vn/wp-content/uploads/2023/07/iPhone-15-pro-titanium-blue-png.png"></img>
                                <div className="text-center -mx-2 mt-2">Tablet</div>
                            </div>
                        </div>
                        <div className={clsx(style.categoryItem)}>
                            <div className={clsx(style.content)}>
                                <img alt="smartphone" src="https://hpcluxury.com.vn/wp-content/uploads/2023/07/iPhone-15-pro-titanium-blue-png.png"></img>
                                <div className="text-center -mx-2 mt-2">Tablet</div>
                            </div>
                        </div>

                    </div>
                </Tippy>
            </div>
            <div className="py-5">
                <h3 className="font-medium pl-5 text-white">Discount Programs</h3>
                <ScrollList className={clsx("w-full")} leftBtn rightBtn>
                    <DiscountProgram className={clsx("lg:w-1/2 md:w-full ssm:w-full p-2")} />
                    <DiscountProgram className={clsx("lg:w-1/2 md:w-full ssm:w-full p-2")} />
                    <DiscountProgram className={clsx("lg:w-1/2 md:w-full ssm:w-full p-2")} />
                    <DiscountProgram className={clsx("lg:w-1/2 md:w-full ssm:w-full p-2")} />
                </ScrollList>
            </div>
            <div id="DiscountedProduct" className="mt-10 rounded-2xl">
                <h3 className="text-2xl font-medium ml-10 mb-5 text-white">Discount Programs</h3>
                <ScrollList
                    className={clsx("relative")} leftBtn rightBtn
                >
                    <div className={clsx("xl:w-1/5 lg:w-1/4 sm:w-1/3 ssm:w-1/2 ssm:px-1 sm:px-3 inline-block", style.productXl)}><ProductItem className="bg-white border border-gray-200 rounded-lg" /></div>
                    <div className={clsx("xl:w-1/5 lg:w-1/4 sm:w-1/3 ssm:w-1/2 ssm:px-1 sm:px-3 inline-block", style.productXl)}><ProductItem className="bg-white border border-gray-200 rounded-lg" /></div>
                    <div className={clsx("xl:w-1/5 lg:w-1/4 sm:w-1/3 ssm:w-1/2 ssm:px-1 sm:px-3 inline-block", style.productXl)}><ProductItem className="bg-white border border-gray-200 rounded-lg" /></div>
                    <div className={clsx("xl:w-1/5 lg:w-1/4 sm:w-1/3 ssm:w-1/2 ssm:px-1 sm:px-3 inline-block", style.productXl)}><ProductItem className="bg-white border border-gray-200 rounded-lg" /></div>
                    <div className={clsx("xl:w-1/5 lg:w-1/4 sm:w-1/3 ssm:w-1/2 ssm:px-1 sm:px-3 inline-block", style.productXl)}><ProductItem className="bg-white border border-gray-200 rounded-lg" /></div>
                    <div className={clsx("xl:w-1/5 lg:w-1/4 sm:w-1/3 ssm:w-1/2 ssm:px-1 sm:px-3 inline-block", style.productXl)}><ProductItem className="bg-white border border-gray-200 rounded-lg" /></div>
                    <div className={clsx("xl:w-1/5 lg:w-1/4 sm:w-1/3 ssm:w-1/2 ssm:px-1 sm:px-3 inline-block", style.productXl)}><ProductItem className="bg-white border border-gray-200 rounded-lg" /></div>
                    <div className={clsx("xl:w-1/5 lg:w-1/4 sm:w-1/3 ssm:w-1/2 ssm:px-1 sm:px-3 inline-block", style.productXl)}><ProductItem className="bg-white border border-gray-200 rounded-lg" /></div>
                </ScrollList>
            </div>
        </div>);
}

export default Home;