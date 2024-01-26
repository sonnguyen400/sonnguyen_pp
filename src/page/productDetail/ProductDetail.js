import { useEffect, useState } from 'react';
import style from './style.module.scss';
import axios, { HttpStatusCode } from 'axios';
import ProductImage from './ProductImage/ProductImage';
import { InputNumber, ColorRadio, CheckRadio } from '~/component/base/input';
import RatingStars from '~/component/base/RatingStart/RatingStarts';
import clsx from 'clsx';
import ProductReview from './ProductReview/ProductReview';
import ProductComment from './ProductComment/ProductComment';
import ProductFeetback from './ProductFeetback/ProductFeetback';
import ScrollList from '~/component/base/scrollList';
import ProductItem from '~/component/base/ProductItem';
import Button from '~/component/base/button';
import Breadcum from '~/component/base/breadcum';
function ProductDetail() {
    const [product, setProduct] = useState();
    const fetchApi = async () => {
        const options = {
            method: 'GET',
            url: 'https://real-time-product-search.p.rapidapi.com/search',
            params: {
                q: 'Nike shoes',
                country: 'us',
                language: 'en'
            },
            headers: {
                'X-RapidAPI-Key': '74c2c7cfebmshe55e4ee11e000f5p1f14efjsnd649b4a0d5fd',
                'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
            }
        };

        try {
            return await axios.request(options);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchApi().then(data => {
            if (data && data.status === HttpStatusCode.Ok) {
                setProduct(data.data.data[0]);
            }
        });
    }, [])

    return (<>
        <Breadcum />
        <div className="relative flex flex-row">
            <div className="w-1/2 px-5">
                <ProductImage className="p-5 rounded-lg shadow-sm " product_photos={product?.product_photos} />
                <div className=''>
                    <h5 className='font-semibold text-gray-500 border-b-[1px] py-4'>Product Description</h5>
                    <ProductReview maxHeight={"480px"} />
                </div>
            </div>
            <div className='w-1/2 px-5'>
                <div className="p-5 rounded-lg shadow-sm">
                    <div className='bg-blue-500 px-5 py-3 mb-3 text-sm font-semibold rounded-lg text-white'>Pre-Order-product. Order now to receive many discount</div>
                    <div className='bg-red-500 px-5 py-3 mb-3 text-sm font-semibold rounded-lg text-white'>Pre-Order-product. Order now to receive many discount</div>
                    <div className='bg-green-500 px-5 py-3 mb-3 text-sm font-semibold rounded-lg text-white flex items-center'><i className="fi fi-rr-hourglass-end mt-1 pr-5"></i><div>Pre-Order-product. Order now to receive many discountPre-Order-product. Order now to receive many discountPre-Order-product. Order now to receive many discount</div></div>
                    <h4 className='font-semibold'>Bàn Phím Cơ Ajazz AK832 Pro (Ajazz Outemu Brown Switch - Baltic Blue - Mới, Full box, Nhập khẩu)</h4>

                    <div className='pt-3 pb-5 border-b border-b-slate-300'>
                        <h4 className='text-red-500 font-semibold'>19.700.000</h4>
                    </div>
                    {/* Customer Evaluate */}
                    <div className='pt-3 pb-5 border-b border-b-slate-300'>
                        <label className='mr-3 mb-2 font-semibold text-gray-500'>Đánh giá</label>
                        <RatingStars percent={50} />
                    </div>
                    {/* Order or Add cart */}
                    <div className='mt-2 flex items-center'>
                        <label className='font-semibold text-gray-500'>Color</label>
                        <div className='flex mt-2 ml-4'>
                            <ColorRadio className="inline-block mr-3" name="color" value="Red" icon={<div className='bg-red-400 w-full h-full rounded-full'></div>} />
                            <ColorRadio className="inline-block mr-3" name="color" value="Red" icon={<div className='bg-blue-400 w-full h-full rounded-full'></div>} />
                            <ColorRadio className="inline-block mr-3" name="color" value="Red" icon={<div className='bg-green-400 w-full h-full rounded-full'></div>} />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <label className='font-semibold text-gray-500'>Memory</label>
                        <div className='flex mt-2 ml-4'>
                            <CheckRadio className="inline-block mr-3" name="memory" value="256G" />
                            <CheckRadio className="inline-block mr-3" name="memory" value="512G" />
                            <CheckRadio className="inline-block mr-3" name="memory" value="1T" />
                            <CheckRadio className="inline-block mr-3" name="memory" value="2T" />
                            <CheckRadio className="inline-block mr-3" name="memory" value="5T" />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <label className='font-semibold text-gray-500'>Ram</label>
                        <div className='flex mt-2 ml-4'>
                            <CheckRadio className="inline-block mr-3" name="ram" value="8 Gb" />
                            <CheckRadio className="inline-block mr-3" name="ram" value="16 GB" />
                            <CheckRadio className="inline-block mr-3" name="ram" value="32 GB" />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <label className='font-semibold text-gray-500'>Number</label>
                        <InputNumber
                            disabledClass="opacity-55"
                            className="text-xl w-1/3 flex items-stretch border-blue-500 border mt-2"
                            min={1}
                            increateBtn={<div className='bg-blue-500 px-2 text-white pb-1'>+</div>}
                            decreateBtn={<div className='bg-blue-500 px-2 text-white pb-1'>-</div>} />
                    </div>
                    <div className='mt-3'>
                        <div className='font-semibold text-gray-500 border-b-[1px] pt-8 pb-4'>Product Configuration</div>
                        <table className={style.productConfiguration}>
                            <tr>
                                <td>Ram</td>
                                <td><span>16GB</span><span>(Upgradability upto 32GB)</span> </td>
                            </tr>
                            <tr>
                                <td>Internal Storage</td>
                                <td><span>256GB</span>/<span>(512GB)</span> </td>
                            </tr>
                            <tr>
                                <td>Display</td>
                                <td><span>15.6 Inch</span><span> OLED 2K+ </span> </td>
                            </tr>
                            <tr><td colSpan={2}><button className='text-blue-500 border border-blue-500  w-full h-full py-2 mt-5 rounded-lg'>Details</button></td></tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-5 flex flex-row items-start'>
            <ProductComment className="inline-block w-1/2 px-5" />
            <ProductFeetback className="inline-block w-1/2 h-full px-5" />
        </div>
        <div id="sameBranch" className='mt-16'>
            <div className='flex justify-between'>
                <h4 className='font-semibold text-gray-500'>Relevant Product</h4>
                <Button className='font-semibold text-xl text-blue-600 flex-row-reverse' icon={{ content: <i class="fi fi-rr-angle-small-right"></i> }} href="#">
                    Watch All
                </Button>
            </div>
            <ScrollList leftBtn rightBtn>
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
        <div id="relevantProduct" className='mt-16'>
            <div className='flex justify-between'>
                <h4 className='font-semibold text-gray-500'>You may love</h4>
            </div>

            <ScrollList leftBtn rightBtn>
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
    </>);
}

export default ProductDetail;