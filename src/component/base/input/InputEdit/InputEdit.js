import { useEffect, useRef, useState } from 'react';
import style from './style.module.scss';
import clsx from 'clsx';
import { Pencil } from 'icon';
function InputEdit({ className, icon, value, ...props }) {
    const [editable, setEditable] = useState(false);
    const [content, setContent] = useState(value);
    const input = useRef();
    function enableEdit() {
        setEditable(true);
    }
    useEffect(() => {
        if (editable) input.current.focus();
    }, [editable]);
    return (
        <div
            className={clsx(className, 'flex items-center border-gray-200 warn hover:bg-gray-100', style.inputbox, {
                'border  rounded-xl': editable,
                'border-b ': !editable,
            })}
        >
            {icon && <div className="h-1/3 pb-1 pl-1 pr-3 aspect-square flex items-center ">{icon}</div>}
            <input
                ref={input}
                disabled={!editable}
                className={clsx(' pr-4 py-2 w-full focus:outline-none bg-transparent', {
                    'pl-4': !icon,
                    '-ml-10 pl-10': icon,
                })}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                {...props}
            ></input>
            {editable ? (
                <div
                    className="px-3 py-1 bg-slate-300 rounded-xl text-sm mr-2 cursor-pointer"
                    onClick={() => setEditable(false)}
                >
                    Save
                </div>
            ) : (
                <div
                    className={clsx(
                        'p-2 aspect-square rounded-full hover:bg-gray-200 mr-2  cursor-pointer',
                        style.behavior,
                    )}
                    onClick={() => setEditable(true)}
                >
                    <Pencil width={15} height={15} />
                </div>
            )}
        </div>
    );
}

export default InputEdit;
