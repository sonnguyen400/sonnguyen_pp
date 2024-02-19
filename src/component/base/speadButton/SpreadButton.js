import style from './style.module.scss';
import clsx from 'clsx';
function SpreadButton({ icon, children, className, ...props }) {
    return (
        <div className={clsx('flex items-center text-white w-fit rounded-full', className, style.button)}>
            <div className="px-5 py-3 font-bold aspect-square w-fit  rounded-full">{icon}</div>
            <span className={clsx('pl-2 pr-4', style.content)}>{children}</span>
        </div>
    );
}

export default SpreadButton;
