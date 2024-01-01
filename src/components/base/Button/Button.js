import clsx from 'clsx';
import style from './style.module.scss';
import { memo } from 'react';
import { Link } from 'react-router-dom';
function Button({ children, layout, icon, ...props }) {
    let Type = "button";
    if (props.href) Type = "a";
    else if (props.onClick) Type = "button";
    else if (props.link) Type = Link;

    return (
        <Type {...props}
            className={clsx(style.button, props.className,
                {
                    "items-end": icon?.direction === "right",
                    "items-start": icon?.direction === "left",
                    "items-between": icon?.direction === "center",
                }
            )}
        >
            <div className={clsx("pr-2", style.icon, icon?.size, icon?.margin, icon?.padding, icon?.color)}>
                {(!icon?.react) || <div className={clsx(style.btnIcon_impact)}>{icon?.react}</div>}
                {!(icon?.content) || <div className={clsx(style.btnIcon)}>{icon?.content}</div>}
            </div>
            <div>{children}</div>
        </Type>
    );
}

export default memo(Button);