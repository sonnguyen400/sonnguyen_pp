import clsx from 'clsx';
import { memo } from 'react';
function InputField({ children, className, ...props }) {
    return (
        <div {...props} className={clsx(className, 'inputField focus-within:bg-transparent')} tabIndex={-1}>
            {children}
        </div>
    );
}

export default InputField;
