import laptop from 'image/macbook.png';
import clsx from 'clsx';
import { ColorRadio, CheckRadio, InputNumber } from '~/component/base/input';
import { useState } from 'react';
import { TERipple } from 'tw-elements-react';
function ProductItem({ disabled }) {
    const [visible, setVisible] = useState(true);
    function toggleVisible() {
        console.log('djhd');
        setVisible((item) => !item);
    }
    return (
        <>
            <div className="flex items-center">
                <div>
                    <input type="checkbox" />
                </div>
                <div className="flex items-start">
                    <img src={laptop} alt="laptop" className="aspect-square w-1/5 object-contain inline-block" />
                    <div className="flex-1">
                        <div className="w-full inline-block ">
                            <div className="flex justify-between w-full">
                                <h5 className="font-semibold">San pham 1</h5>
                                <TERipple>
                                    <button className="font-semibold text-red-500 p-2 rounded-es-xl">Xóa</button>
                                </TERipple>
                            </div>
                            <h6 className="text-red-500 font-semibold ">67.000.000</h6>
                            <button
                                onClick={toggleVisible}
                                className="px-1 bg-gray-100 border border-gray-200 hover:bg-gray-200 rounded-sm flex items-center"
                            >
                                Red, Green , Option1
                                <span className="pt-1">
                                    <i className="fi fi-rr-caret-down"></i>
                                </span>
                            </button>
                            <div className="mt-3">
                                <InputNumber
                                    className="text-xl w-1/3 flex items-stretch border-blue-500 border mt-2"
                                    min={1}
                                    value={1}
                                    increateBtn={<div className="bg-blue-500 px-2 text-white pb-1">+</div>}
                                    decreateBtn={<div className="bg-blue-500 px-2 text-white pb-1">-</div>}
                                />
                            </div>
                        </div>
                        <div className="flex justify-end text-xl">
                            <span className="font-semibold text-gray-500 mr-4">Total</span>
                            <span className="text-red-500 font-semibold">15.000.000</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx({ hidden: visible })}>
                <div className="mt-2 flex items-center">
                    <label className="font-semibold text-gray-500">Color</label>
                    <div className="flex mt-2 ml-4">
                        <ColorRadio
                            className="inline-block mr-3"
                            name="color"
                            value="Red"
                            icon={<div className="bg-red-400 w-full h-full rounded-full"></div>}
                        />
                        <ColorRadio
                            className="inline-block mr-3"
                            name="color"
                            value="Red"
                            icon={<div className="bg-blue-400 w-full h-full rounded-full"></div>}
                        />
                        <ColorRadio
                            className="inline-block mr-3"
                            name="color"
                            value="Red"
                            icon={<div className="bg-green-400 w-full h-full rounded-full"></div>}
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <label className="font-semibold text-gray-500">Memory</label>
                    <div className="flex mt-2 ml-4">
                        <CheckRadio className="inline-block mr-3" name="memory" value="256G" />
                        <CheckRadio className="inline-block mr-3" name="memory" value="512G" />
                        <CheckRadio className="inline-block mr-3" name="memory" value="1T" checked />
                        <CheckRadio className="inline-block mr-3" name="memory" value="2T" />
                        <CheckRadio className="inline-block mr-3" name="memory" value="5T" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductItem;
