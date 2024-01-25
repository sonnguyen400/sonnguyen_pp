import clsx from 'clsx';
import style from './style.module.scss';
function InputText({ className, icon, ...props }) {
    return (
        <div className={clsx(className, 'flex items-center rounded-3xl warn', style.inputbox)}>
            <div className="h-1/3 pl-4 pr-3 aspect-square flex items-center">{icon}</div>
            <input className="pl-10 pr-4 py-2 -ml-10 w-full focus:outline-none bg-transparent" {...props}></input>
        </div>
    );
}

export default InputText;
