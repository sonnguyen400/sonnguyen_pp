import clsx from 'clsx';
import { memo } from 'react';
function InputError({ children, className, ...props }) {
    return <div className={clsx(className, 'errText')} {...props}></div>;
}

export default memo(InputError);
