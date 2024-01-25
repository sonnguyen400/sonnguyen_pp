import clsx from 'clsx';
function RatingStars({ percent, className, ...props }) {
    return (
        <div className={clsx('w-fit h-fit inline-block mt-2 relative bg-slate-400', className)} {...props}>
            <div className={clsx('absolute h-full top-0 left-0  bg-yellow-500')} style={{ width: `${percent}%` }}></div>
            <div className=" bg-white text-black mix-blend-color-dodge">
                <i className="fi fi-sr-star mr-1"></i>
                <i className="fi fi-sr-star mr-1"></i>
                <i className="fi fi-sr-star mr-1"></i>
                <i className="fi fi-sr-star mr-1"></i>
                <i className="fi fi-sr-star mr-1"></i>
            </div>
        </div>
    );
}

export default RatingStars;
