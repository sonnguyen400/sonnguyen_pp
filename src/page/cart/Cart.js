import clsx from "clsx";
import style from './style.module.scss';
import { useMemo, useState } from "react";
import Tab0 from "./Tab0/Tab0";
function Cart() {
    const [tabIndex, setTabIndex] = useState(0);
    const CurTab = useMemo(() => {
        if (tabIndex === 0) return <Tab0 />;
    }, [])
    return (
        <>
            <div className="flex justify-stretch items-stretch relative">
                <div className={clsx("p-2 max-ssm:w-20 w-40 h-full absolute rounded-full bg-blue-400 z-0 duration-700")} style={{ left: `${tabIndex * 160}px`, transitionProperty: 'all' }}></div>
                <div onClick={() => { setTabIndex(0) }} className={clsx("inline-block p-2 max-ssm:w-20 w-40 text-center z-10 text-lg cursor-pointer", { [style.tabActive]: tabIndex === 0 })}>Cart</div>
                <div onClick={() => { setTabIndex(1) }} className={clsx("inline-block p-2 max-ssm:w-20 w-40 text-center z-10 text-lg cursor-pointer", { [style.tabActive]: tabIndex === 1 })}>Verifying</div>
                <div onClick={() => { setTabIndex(2) }} className={clsx("inline-block p-2 max-ssm:w-20 w-40 text-center z-10 text-lg cursor-pointer", { [style.tabActive]: tabIndex === 2 })}>Delivering</div>
                <div onClick={() => { setTabIndex(3) }} className={clsx("inline-block p-2 max-ssm:w-20 w-40 text-center z-10 text-lg cursor-pointer", { [style.tabActive]: tabIndex === 3 })}>Received</div>
            </div>
            <div>
                {
                    <Tab0 />
                }
            </div>
        </>);
}

export default Cart;