import clsx from 'clsx';
import style from './style.module.scss';
function InputText({ className, icon, ...props }) {
    return (
        <div className={clsx(className, 'flex items-center rounded-3xl warn', style.inputbox)}>
            {icon && <div className="h-1/3 pl-4 pr-3 aspect-square flex items-center">{icon}</div>}
            <input
                className={clsx(' pr-4 py-2 w-full focus:outline-none bg-transparent', {
                    'pl-4': !icon,
                    '-ml-10 pl-10': icon,
                })}
                {...props}
            ></input>
        </div>
    );
}

export default InputText;
