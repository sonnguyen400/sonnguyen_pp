import clsx from 'clsx';
function Box({ children, className, ...props }) {
    return <div className={clsx(className, 'rounded-lg shadow-lg w-full h-full')}>{children}</div>;
}

export default Box;
