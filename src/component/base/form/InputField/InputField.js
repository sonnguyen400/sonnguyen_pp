import clsx from 'clsx';

function InputField({ children, label, className, ...props }) {
    return (
        <div {...props} className={clsx(className, 'inputField focus-within:bg-transparent')} tabIndex={-1}>
            <div className="mb-2 pl-4 font-semibold text-gray-500">{label}</div>
            {children}
            <div className="flex justify-center ">
                <span className="text-red-500 text-[12px] errText hidden"></span>
            </div>
        </div>
    );
}

export default InputField;
