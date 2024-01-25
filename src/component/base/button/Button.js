import clsx from 'clsx';
import style from './style.module.scss';
import { memo } from 'react';
import { Link } from 'react-router-dom';
function Button({ children, icon, className, ...props }) {
    let Type = 'button';
    if (props.href) Type = 'a';
    else if (props.onClick) Type = 'button';
    else if (props.link) Type = Link;

    return (
        <Type
            {...props}
            className={clsx(style.button, className, {
                'items-end': icon?.direction === 'right',
                'items-start': icon?.direction === 'left',
                'justify-between': icon?.direction === 'center',
            })}
        >
            <div className={clsx(style.icon, icon?.style)}>
                {!icon?.react || <div className={clsx(style.btnIcon_impact)}>{icon?.react}</div>}
                {!icon?.content || <div className={clsx(style.btnIcon)}>{icon?.content}</div>}
            </div>
            <div className="px-2 ">{children}</div>
        </Type>
    );
}

export default memo(Button);
