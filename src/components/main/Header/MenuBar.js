import clsx from "clsx";
import Button from "~/components/base/Button";
import style from './style.module.scss';
import DropDown from "~/components/base/DropdownMenu/DropdownMenu";

function MenuBar() {
    return (<div className={clsx(style.categoryBar)}>
        <div className="w-max">
            <DropDown
                className={clsx(style.menuItem)}
                button={<Button
                    className='mr-5 px-4 py-2 rounded-3xl hover:bg-slate-800/70 hover:text-slate-200 roud'
                    icon={{
                        "content": <i className="fi fi-rr-laptop-mobile"></i>,
                        "react": <i className="fi fi-sr-laptop-mobile"></i>
                    }}>
                    Máy tính
                </Button>}
            />
            <DropDown
                className={clsx(style.menuItem)}
                button={<Button
                    className='mr-5 px-4 py-2 rounded-3xl hover:bg-slate-800/70 hover:text-slate-200'
                    icon={{
                        "content": <i className="fi fi-br-mobile-notch"></i>,
                        "react": <i className="fi fi-sr-mobile-notch"></i>
                    }}>Điện thoại</Button>}
            />
            <DropDown
                className={clsx(style.menuItem)}
                button={<Button
                    className='mr-5 px-4 py-2 rounded-3xl hover:bg-slate-800/70 hover:text-slate-200'
                    icon={{
                        "content": <i className="fi fi-rr-tablet-android"></i>,
                        "react": <i className="fi fi-sr-tablet-android"></i>
                    }}>
                    Máy tính bảng
                </Button>}
            />
            <DropDown
                className={clsx(style.menuItem)}
                button={<Button
                    className='mr-5 px-4 py-2 rounded-3xl hover:bg-slate-800/70 hover:text-slate-200'
                    icon={{
                        "content": <i className="fi fi-rr-speakers"></i>,
                        "react": <i className="fi fi-sr-speakers"></i>
                    }}>
                    Âm thanh
                </Button>}
            />
            <DropDown
                className={clsx(style.menuItem)}
                button={<Button
                    className='mr-5 px-4 py-2 rounded-3xl hover:bg-slate-800/70 hover:text-slate-200'
                    icon={{
                        "content": <i className="fi fi-rr-computer"></i>,
                        "react": <i className="fi fi-sr-computer"></i>
                    }}
                >Hiển thị</Button>}
            />
            <DropDown
                className={clsx(style.menuItem)}
                button={<Button
                    className='mr-5 px-4 py-2 rounded-3xl hover:bg-slate-800/70 hover:text-slate-200'
                    icon={{
                        "content": <i className="fi fi-brands-fonts"></i>
                    }}
                >Phần mềm</Button>}
            />
            <DropDown
                className={clsx(style.menuItem)}
                button={<Button
                    className='mr-5 px-4 py-2 rounded-3xl hover:bg-slate-800/70 hover:text-slate-200'
                    icon={{
                        "content": <i className="fi fi-rs-refresh"></i>
                    }}
                >Dich vụ sửa chữa</Button>}
            />
        </div>
    </div>);
}
export default MenuBar;