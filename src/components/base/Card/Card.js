import style from './style.module.scss';
function Card({ className, children }) {
    return (<div className='pd'>
        <div className='flex flex-row'>
            <h1 className='text-2xl font-semibold'>Title</h1>
        </div>
        <div>
            {children}
        </div>
    </div>);
}

export default Card;