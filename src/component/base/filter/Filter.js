import Tippy from '@tippyjs/react/headless';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import style from './style.module.scss';
function Filter({ children, ...props }) {
    const [searchParam, setSearchParam] = useSearchParams(new URLSearchParams(window.location.search));
    const searchParamsArray = useMemo(() => {
        let array = [];
        searchParam.forEach((value, key) => {
            array.push({
                name: key,
                value: value,
            });
        });
        return array;
    }, [searchParam]);
    function deleteParam(name, value) {
        setSearchParam((param) => {
            param.delete(name, value);
            return param;
        });
    }
    function clearAll() {
        setSearchParam(new URLSearchParams());
    }
    return (
        <div {...props}>
            {searchParam.size === 0 || (
                <Tippy
                    trigger="click"
                    placement="bottom"
                    interactive
                    render={(attrs) => {
                        return (
                            <div className="bg-white shadow-xl px-4 py-2 rounded-lg" {...attrs}>
                                <div className="border-b border-gray-100 max-w-96 pb-2 ">
                                    {searchParamsArray.map((item, key) => (
                                        <div key={key} className={style.appliedFilter}>
                                            <span className="mr-1">{item.value}</span>
                                            <button
                                                onClick={() => {
                                                    deleteParam(item.name, item.value);
                                                }}
                                                className="mb-[-0.25rem]"
                                            >
                                                <i className="fi fi-br-cross-small px-1 pt-1 rounded-full text-sm  hover:text-white hover:bg-gray-400"></i>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    onClick={clearAll}
                                    className="rounded-3xl border border-red-400 text-red-500 font-semibold px-2 bg-white"
                                >
                                    Clear all
                                </button>
                            </div>
                        );
                    }}
                >
                    <button className="border border-gray-300  rounded-lg px-4 pb-2 pt-1  inline-block bg-white mr-2">
                        {searchParam.size === 1 ? '1 filter applied' : `${searchParam.size} filters applied`}
                    </button>
                </Tippy>
            )}
            {children}
        </div>
    );
}

export default Filter;
