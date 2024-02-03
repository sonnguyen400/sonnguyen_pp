import Button from '~/component/base/button/Button';
import style from './style.module.scss';
import clsx from 'clsx';
import Breadcum from '~/component/base/breadcum';
import { Filter, FilterItem } from '~/component/base/filter';
import ProductItem from '~/component/base/ProductItem';
function ProductList() {
    return (
        <>
            <Breadcum />
            <div className="p-4 rounded-md shadow-md max-w-screen-md text-sm">
                <h4 id="title " className="font-semibold ">
                    Laptop
                </h4>
                <p id="description" className="py-5 border-b border-gray-200">
                    dxgcfhvjbklkgchvgjbhknjgcfhvgj
                </p>
                <div id="branch" className={clsx(style.branchList, 'mt-5')}>
                    <Button href="#" className={style.branch}>
                        HP
                    </Button>
                    <Button href="#" className={style.branch}>
                        LG
                    </Button>
                    <Button href="#" className={style.branch}>
                        ASUS
                    </Button>
                    <Button href="#" className={style.branch}>
                        SAMSUNG
                    </Button>
                    <Button href="#" className={style.branch}>
                        Apple
                    </Button>
                </div>
            </div>
            <div className="my-4">
                <Filter className="flex">
                    <FilterItem
                        name="price"
                        title="Price"
                        className="border border-gray-200 rounded-lg px-4 pb-2 pt-1 inline-block bg-white mr-2"
                    >
                        <input type="checkbox" value="15000to200000" title="15000 - 200000" />
                        <input type="checkbox" value="12000to300000" title="12000 - 300000" />
                    </FilterItem>
                    <FilterItem
                        name="type"
                        title="Type"
                        className="border border-gray-200 rounded-lg px-4 pb-2 pt-1  inline-block bg-white mr-2"
                    >
                        <input type="checkbox" value="laptop" title="Laptop" />
                        <input type="checkbox" value="smartphone" title="Smartphone" />
                    </FilterItem>
                    <div className="flex-1 flex justify-end">
                        <FilterItem
                            name="sort"
                            title={<i className="fi fi-rr-bars-sort"></i>}
                            className="border border-gray-200 rounded-lg px-4 pb-2 pt-1  inline-block bg-white"
                        >
                            <input type="radio" value="price_asc" name="sort" title="Ascending price " />
                            <input type="radio" value="price_desc" name="sort" title="Descending price " />
                        </FilterItem>
                    </div>
                </Filter>
            </div>
            <div className="lg:-mx-2">
                <ProductItem className={clsx(style.productItem)} />
                <ProductItem className={clsx(style.productItem)} />
                <ProductItem className={clsx(style.productItem)} />
                <ProductItem className={clsx(style.productItem)} />
                <ProductItem className={clsx(style.productItem)} />
                <ProductItem className={clsx(style.productItem)} />
                <ProductItem className={clsx(style.productItem)} />
            </div>
            <div className="block">
                <button className="bg-gray-100 font-semibold py-2 rounded-lg w-1/2 mx-auto block">More</button>
            </div>
        </>
    );
}

export default ProductList;
