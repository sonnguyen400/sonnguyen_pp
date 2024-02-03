import clsx from 'clsx';
import style from './style.module.scss';
import { useRef, memo, useState } from 'react';
function InputNumber({ className, increateBtn, decreateBtn, min, max, vertical, value, ...props }) {
    const input = useRef();
    const [inputValue, setValue] = useState(value || 0);
    function increase() {
        input.current.stepUp();
        setValue(input.current.value);
    }
    function decrease() {
        input.current.stepDown();
        setValue(input.current.value);
    }
    return (
        <div
            className={clsx(className, 'flex', {
                'flex-col': vertical,
                'flex-row': !vertical,
            })}
        >
            <div
                onClick={decrease}
                className={clsx('w-fit h-fit decreate cursor-pointer select-none', {
                    [style.disabled]: min && inputValue <= min,
                })}
            >
                {decreateBtn === true ? <div className=" w-fit h-fit ">-</div> : decreateBtn}
            </div>
            <input
                className={clsx(style.inputNumber, 'text-center')}
                type="number"
                {...props}
                min={min}
                max={max}
                ref={input}
                value={inputValue}
                onChange={(e) => setValue(e.target.value)}
            ></input>
            <div
                onClick={increase}
                className={clsx('w-fit h-fit increate cursor-pointer select-none', {
                    [style.disabled]: max && inputValue >= max,
                })}
            >
                {increateBtn === true ? <div className=" w-full h-full">+</div> : increateBtn}
            </div>
        </div>
    );
}

export default memo(InputNumber);
