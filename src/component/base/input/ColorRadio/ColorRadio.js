import style from './style.module.scss';
import clsx from 'clsx';
function ColorRadio({ value, name, title, icon, className, ...props }) {
    return (
        <label className={clsx(style.inputRadio, className)}>
            {title || value}
            <input type="radio" name={name} value={value} {...props} />
            <span className={clsx(style.checkmark)}>
                <div className="w-full h-full  bg-white p-[1px] rounded-full p-[1]">{icon}</div>
            </span>
        </label>
    );
}

export default ColorRadio;
