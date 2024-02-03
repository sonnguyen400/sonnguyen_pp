import clsx from 'clsx';
import { Link } from 'react-router-dom';
function BrickButton({ children, icon, className, bgColor, bg2Color, ...props }) {
    let Type = 'button';
    if (props.onClick) Type = 'button';
    else if (props.link || props.href) Type = Link;
    return (
        <Type
            className={clsx('flex flex-col rounded-lg w-full p-2 justify-between', className)}
            {...props}
            style={{ backgroundColor: bgColor }}
        >
            <div className="flex justify-end w-full">
                <div className="p-3 rounded-full aspect-square" style={{ backgroundColor: bg2Color }}>
                    {icon}
                </div>
            </div>
            <div>{children}</div>
        </Type>
    );
}

export default BrickButton;
