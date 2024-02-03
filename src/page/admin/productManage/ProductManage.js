import { Link } from 'react-router-dom';
import BrickButton from '~/component/base/brickbutton/BrickButton';
import { Boxes, SearchS } from 'icon';
import { BoxOpen } from '~/resources/icon';

function ProductManage() {
    return (
        <>
            <div className="w-full flex flex-row flex-wrap">
                <Link className="w-1/6 aspect-[5/3] p-2" to="./add">
                    <BrickButton className={'w-full h-full'} icon={<BoxOpen />} bgColor="#fff5d5" bg2Color="#fffee5">
                        <span className="text-lg text-[#735F32] font-semibold">Add Product</span>
                    </BrickButton>
                </Link>
                <Link className="w-1/6 aspect-[5/3] p-2" to="./add">
                    <BrickButton className={'w-full h-full'} icon={<SearchS />} bgColor="#C4DFDF" bg2Color="#E3F4F4">
                        <span className="text-lg text-[#343c2e] font-semibold">Search Product</span>
                    </BrickButton>
                </Link>
            </div>
            <div className=""></div>
        </>
    );
}

export default ProductManage;
