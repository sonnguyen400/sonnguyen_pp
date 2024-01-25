import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';
import style from './style.module.scss';
function FilterItem({ children, title, name, ...props }) {
    const [searchParam, setSearchParam] = useSearchParams(new URLSearchParams(window.location.search));
    const childrens = useMemo(() => {
        if (typeof children[Symbol.iterator] === 'function') {
            return children;
        }
        if (children == null) return [false];
        else return [children];
    }, [children]);
    function clearAllFilter() {
        setSearchParam((searchParam) => {
            searchParam.getAll(name).forEach((value) => {
                searchParam.delete(name, value);
            });
            return searchParam;
        });
    }
    function setFilter(e) {
        if (e.target.type === 'radio') {
            let filterList = e.target;
            while (!filterList.classList.contains(style.filterList)) {
                filterList = filterList.parentElement;
            }
            filterList.querySelectorAll('input:not(:checked)').forEach((item) => {
                setSearchParam((params) => {
                    params.delete(item.name || name, item.value);
                    return params;
                });
            });
            // console.log(e.target.parentElement.parentElement.classList.contains(style.filterList));
        }
        if (!searchParam.has(e.target.name || name, e.target.value) && e.target.checked) {
            setSearchParam((params) => {
                params.append(e.target.name || name, e.target.value);
                return params;
            });
        }
        if (e.target.type === 'checkbox' && !e.target.checked) {
            setSearchParam((params) => {
                params.delete(e.target.name || name, e.target.value);
                return params;
            });
        }
    }
    return (
        <Tippy
            trigger="click"
            placement="bottom"
            interactive
            render={(attr) => (
                <div {...attr} className={clsx(style.filterList)}>
                    <div className="border-b border-b-gray-200">
                        <input type="radio" checked={!searchParam.get(name)} onClick={clearAllFilter} />
                        <label className="ml-2">Tất cả</label>
                    </div>
                    {childrens.map(({ props }, index) => {
                        return (
                            <div className="block" key={index}>
                                <input
                                    onChange={setFilter}
                                    {...props}
                                    checked={searchParam.has(props.name || name, props.value)}
                                />
                                <label className="ml-2">{props.title || props.name}</label>
                            </div>
                        );
                    })}
                </div>
            )}
        >
            <button {...props}>
                <span className="mr-2">{title || name}</span>
                <div className="inline-block pt-1 translate-y-1">
                    <i className="fi fi-rr-angle-small-down translate-y-2"></i>
                </div>
            </button>
        </Tippy>
    );
}

export default FilterItem;
