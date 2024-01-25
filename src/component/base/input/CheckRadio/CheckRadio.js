import style from './style.module.scss';
import clsx from 'clsx';
function CheckRadio({ value, name, title, className, ...props }) {
    return (
        <label className={clsx(style.inputRadio, className)}>
            <input type="radio" name={name} value={value} {...props} />
            <span className={clsx(style.checkmark)}>
                <i className="fi fi-br-check"></i>
                {title || value}
            </span>
        </label>
    );
}

export default CheckRadio;
