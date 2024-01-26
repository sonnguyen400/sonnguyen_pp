import clsx from "clsx";
import style from './style.module.scss';
import { useRef, useEffect, memo, useMemo, useState } from "react";
function InputNumber({ className, increateBtn, decreateBtn, vertical, step, value, defaultValue, min, max, disabledClass, onChange, ...props }) {
    const inputLayout = useRef();
    const initializeValue = useMemo(() => {
        if (value) {
            if (min && value < min) return min;
            if (max && value > max) return max;
        }
        if (defaultValue) {
            if (min && defaultValue < min) return min;
            if (max && defaultValue > max) return max;
        }
        return min || max || value || defaultValue || 0;
    }, []);

    const [intValue, setValue] = useState(initializeValue);
    useEffect(() => {
        if (onChange) onChange(intValue);
    }, [intValue])
    function changeValue(e) {
        setValue(e.target.value);
    }
    function increate(e) {
        if (!max || intValue < max) {
            setValue(value => value * 1 + (step || 1));
        }
    }
    function decreate(e) {
        if (!min || intValue > min) {
            setValue(value => value * 1 - (step || 1));
        }
    }
    function checkMinMax(e) {
        if (min && e.target.value < min) setValue(min);
        if (max && e.target.value > max) setValue(max);
    }
    useEffect(() => {
        let input = inputLayout.current.querySelector("input");
        input.addEventListener("blur", checkMinMax);
        return () => {
            input.removeEventListener("blur", checkMinMax);
        }
    }, [])

    return (<div ref={inputLayout} className={clsx(className,
        "flex",
        {
            "flex-col": vertical,
            "flex-row": !vertical
        }
    )}>
        <div onClick={decreate} className={clsx("w-fit h-fit decreate cursor-pointer select-none",
            {
                [style.disabled + "  " + disabledClass]: min && intValue === min
            }
        )}>{decreateBtn === true ? <div className=" w-fit h-fit ">-</div> : decreateBtn}</div>
        <input className={clsx(style.inputNumber, "text-center")} onChange={changeValue} type="number" value={intValue}  {...props} />
        <div onClick={increate} className={clsx("w-fit h-fit increate cursor-pointer select-none",
            { [style.disabled + " " + disabledClass]: max && intValue === max }
        )}>{increateBtn === true ? <div className=" w-full h-full">+</div> : increateBtn}</div>
    </div >);
}

export default memo(InputNumber);