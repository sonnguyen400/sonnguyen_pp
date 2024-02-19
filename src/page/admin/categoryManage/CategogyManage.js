import BrickButton from '~/component/base/brickbutton/BrickButton';
import { SearchS } from 'icon';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import SpreadButton from '~/component/base/speadButton/SpreadButton';
function CategoryManage() {
    return (
        <div>
            <div className={clsx('menu')}>
                <div className="p-2 block">
                    <Link to="./add">
                        <SpreadButton className={'bg-blue-400'} icon={'+'}>
                            Add Category
                        </SpreadButton>
                    </Link>
                </div>
            </div>
            <div className="w-1/6 p-2">
                <Link className="aspect-[5/3] p-2" to="./add">
                    <BrickButton className={'w-full h-full'} icon={<SearchS />} bgColor="#C4DFDF" bg2Color="#E3F4F4">
                        <span className="text-lg text-[#343c2e] font-semibold">Search Product</span>
                    </BrickButton>
                </Link>
            </div>
        </div>
    );
}

export default CategoryManage;
