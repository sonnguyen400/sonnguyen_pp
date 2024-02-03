import ProductItem from '../ProductItem/ProductItem';

function CartList() {
    return (
        <div className="flex">
            <div className="w-3/5 px-2 inline-block">
                <div className="w-full rounded-md p-2">
                    <ProductItem />
                </div>
            </div>
            <div className="w-2/5 px-2  inline-block">
                <div className="w-full rounded-md p-4 border bg-blue-100">
                    <div className="flex items-stretch">
                        <input
                            placeholder="Coupons"
                            className="flex-1 rounded-md px-4 py-1 text-md mr-2 focus:outline-none"
                        />
                        <button className="bg-green-500 text-white px-2 rounded-md hover:bg-green-600">Apply</button>
                    </div>
                    <div className="font-semibold text-2xl mt-5">
                        <span className="text-blue-900 mr-4">Total</span>
                        <span className="text-red-700">12.000.000</span>
                    </div>
                    <button>Order now</button>
                </div>
            </div>
        </div>
    );
}

export default CartList;
