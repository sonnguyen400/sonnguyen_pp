import { Children } from "react";
import clsx from "clsx";
import style from './style.module.scss';
import Button from "../Button";
function DropDown({ button, menu, type, pos, className, ...properties }) {
    if (!type) type = 'hover';
    if (!pos) pos = "right-0";
    return (
        <div  {...properties} className={clsx("relative inline-block text-left ",
            { [style.hover]: type === 'hover' },
            { [style.focus]: type === 'focus' },
            className
        )} tabIndex={100} {...properties}>
            {button}
            <div className={clsx(pos, style.menu, "absolute  z-10 w-56 origin-top-right  ")} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                <div className="py-1 mt-2 bg-white shadow-lg ring-black ring-opacity-5 focus:outline-none rounded-md   ring-1" role="none">
                    {menu}
                </div>
            </div>
        </div>
    );
}

export default DropDown;